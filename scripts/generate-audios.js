import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Script de Automação para Geração de Áudios via ElevenLabs API
 * 
 * Lerv automaticamente todos os mapeamentos definidos em:
 *   src/utils/audioMappings.ts
 * 
 * Uso:
 *   ELEVENLABS_API_KEY="sua-key" VOICE_ID="sua-voice-id" pnpm generate-audios
 * 
 * Para apenas visualizar a lista sem chamar a API (Dry Run):
 *   node scripts/generate-audios.js --dry-run
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.ELEVENLABS_API_KEY || 'SUA_API_KEY_AQUI';
const VOICE_ID = process.env.VOICE_ID || 'ID_DA_VOZ_ELEVENLABS';
const MODEL_ID = process.env.MODEL_ID || 'eleven_flash_v2_5'; // Modelo Flash: 50% mais barato (0.5x créditos), ultra rápido e com ótimo suporte PT-BR

const AUDIOS_DIR = path.resolve(__dirname, '../public/audios');
const MAPPINGS_FILE = path.resolve(__dirname, '../src/utils/audioMappings.ts');
const IS_DRY_RUN = process.argv.includes('--dry-run');

/**
 * Extrai dinamicamente todos os pares (audioPath -> texto) do arquivo audioMappings.ts
 */
function loadMappingsFromTS() {
  if (!fs.existsSync(MAPPINGS_FILE)) {
    console.error(`❌ Arquivo não encontrado: ${MAPPINGS_FILE}`);
    process.exit(1);
  }

  const content = fs.readFileSync(MAPPINGS_FILE, 'utf-8');
  const mappings = {};

  // Regex para capturar linhas de mapeamento ("texto": "caminho.mp3")
  const regex = /"((?:[^"\\]|\\.)*)":\s*"([^"]+)"/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    let rawText = match[1];
    const audioPath = match[2];

    // Desescapar aspas
    let cleanText = rawText.replace(/\\"/g, '"');

    // Remover aspas externas se existirem
    if (cleanText.startsWith('"') && cleanText.endsWith('"')) {
      cleanText = cleanText.substring(1, cleanText.length - 1);
    }

    cleanText = cleanText.trim();

    // Guardar o texto limpo para o arquivo de áudio
    if (!mappings[audioPath]) {
      mappings[audioPath] = cleanText;
    }
  }

  return mappings;
}

async function generateAudio(relativePath, text) {
  const outputPath = path.join(AUDIOS_DIR, relativePath);
  const dir = path.dirname(outputPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`[Gerando] ${relativePath} -> "${text.substring(0, 45)}..."`);

  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': API_KEY,
      },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro API ElevenLabs (${response.status}): ${errorText}`);
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log(` ✅ Salvo com sucesso em: public/audios/${relativePath}`);
  } catch (error) {
    console.error(` ❌ Erro ao gerar ${relativePath}:`, error.message);
  }
}

async function main() {
  console.log(`🔍 Lendo mapeamentos de: src/utils/audioMappings.ts ...`);
  const audioMap = loadMappingsFromTS();
  const entries = Object.entries(audioMap);

  console.log(`📊 Encontrados ${entries.length} arquivos de áudio para gerar.\n`);

  if (IS_DRY_RUN) {
    console.log(`--- [MODO DRY-RUN / SIMULAÇÃO] ---`);
    entries.forEach(([audioPath, text], index) => {
      console.log(`${index + 1}. [${audioPath}] => "${text}"`);
    });
    console.log(`\n Total: ${entries.length} arquivos mapeados corretamente.`);
    return;
  }

  if (API_KEY === 'SUA_API_KEY_AQUI' || !API_KEY) {
    console.error('❌ Por favor, forneça uma ELEVENLABS_API_KEY válida.');
    process.exit(1);
  }

  if (VOICE_ID === 'ID_DA_VOZ_ELEVENLABS' || !VOICE_ID) {
    console.error('❌ Por favor, forneça uma VOICE_ID válida da ElevenLabs.');
    process.exit(1);
  }

  console.log(`🚀 Modelo selecionado: ${MODEL_ID}`);
  console.log(`🎙️  Voz ID: ${VOICE_ID}`);
  console.log(`⚡ Iniciando geração de ${entries.length} arquivos...\n`);

  let count = 0;
  for (const [relativePath, text] of entries) {
    count++;
    console.log(`(${count}/${entries.length})`);
    await generateAudio(relativePath, text);
    // Pequena pausa entre requisições para evitar rate limit
    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  console.log('\n🎉 Todos os áudios mapeados foram processados e salvos com sucesso!');
}

main();
