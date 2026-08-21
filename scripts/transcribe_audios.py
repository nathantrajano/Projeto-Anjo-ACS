import os
import sys
import glob
import json
import tempfile
import soundfile as sf
import speech_recognition as sr
import numpy as np

def transcribe_file(audio_path, recognizer, whisper_model=None):
    """Transcreve arquivo de áudio usando Whisper ou SpeechRecognition com soundfile."""
    # Se whisper estiver disponível
    if whisper_model is not None:
        try:
            result = whisper_model.transcribe(audio_path, language="pt", fp16=False)
            return result["text"].strip()
        except Exception as e:
            return f"[Erro Whisper: {e}]"

    # Fallback via SpeechRecognition + soundfile
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp_wav:
        tmp_wav_path = tmp_wav.name

    try:
        data, samplerate = sf.read(audio_path)
        # Se estéreo, converter para mono
        if len(data.shape) > 1:
            data = np.mean(data, axis=1)

        # Salvar WAV 16-bit PCM mono
        sf.write(tmp_wav_path, data, samplerate, subtype='PCM_16', format='WAV')

        with sr.AudioFile(tmp_wav_path) as source:
            audio_data = recognizer.record(source)
            try:
                text = recognizer.recognize_google(audio_data, language="pt-BR")
                return text.strip()
            except sr.UnknownValueError:
                return "[Inaudível / Não reconhecido]"
            except sr.RequestError as e:
                return f"[Erro na API Google: {e}]"
    except Exception as e:
        return f"[Erro ao processar áudio: {e}]"
    finally:
        if os.path.exists(tmp_wav_path):
            try:
                os.remove(tmp_wav_path)
            except Exception:
                pass

def transcribe_all(root_dir="public/audios", use_whisper=True):
    whisper_model = None
    if use_whisper:
        try:
            import whisper
            print("Carregando modelo Whisper (small/base)...")
            whisper_model = whisper.load_model("base")
            print("Modelo Whisper carregado com sucesso!\n")
        except Exception as e:
            print(f"Whisper não disponível ({e}). Usando motor SpeechRecognition...")
            whisper_model = None

    recognizer = sr.Recognizer() if whisper_model is None else None
    results = []

    print("=" * 80)
    print(f"TRANSCRIÇÃO DE ÁUDIOS - Diretório: {root_dir}")
    print("=" * 80)

    # Coletar todos os arquivos de áudio
    extensions = ("*.mp3", "*.wav", "*.m4a", "*.ogg")
    audio_files = []
    for ext in extensions:
        audio_files.extend(glob.glob(os.path.join(root_dir, "**", ext), recursive=True))

    audio_files.sort()
    total = len(audio_files)
    print(f"Total de arquivos encontrados: {total}\n")

    for i, file_path in enumerate(audio_files, 1):
        rel_path = os.path.relpath(file_path, root_dir)
        folder = os.path.dirname(rel_path) or "raiz"
        filename = os.path.basename(file_path)

        print(f"[{i}/{total}] Lendo: {rel_path} ...", flush=True)
        transcript = transcribe_file(file_path, recognizer, whisper_model)
        print(f" -> Arquivo: {file_path}")
        print(f" -> Pasta: {folder}")
        print(f" -> Transcrição: \"{transcript}\"")
        print("-" * 80, flush=True)

        results.append({
            "index": i,
            "full_path": file_path.replace("\\", "/"),
            "relative_path": rel_path.replace("\\", "/"),
            "folder": folder.replace("\\", "/"),
            "filename": filename,
            "transcription": transcript
        })

    # Salvar resultado em JSON e Markdown
    output_json = "transcricoes_audios.json"
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    output_md = "TRANSCRIÇÃO_AUDIOS.md"
    with open(output_md, "w", encoding="utf-8") as f:
        f.write("# Relatório de Transcrição dos Áudios do Projeto Anjo ACS\n\n")
        f.write(f"**Total de arquivos analisados:** {len(results)}\n\n")
        f.write("| # | Pasta | Arquivo | Transcrição |\n")
        f.write("|---|---|---|---|\n")
        for item in results:
            clean_text = item["transcription"].replace("|", "\\|").replace("\n", " ")
            f.write(f"| {item['index']} | `{item['folder']}` | `{item['filename']}` | {clean_text} |\n")

    print(f"\n[OK] Processamento concluido com sucesso!")
    print(f"[OK] Arquivo JSON: {output_json}")
    print(f"[OK] Relatorio Markdown: {output_md}")

if __name__ == "__main__":
    audio_dir = sys.argv[1] if len(sys.argv) > 1 else "public/audios"
    transcribe_all(audio_dir)

