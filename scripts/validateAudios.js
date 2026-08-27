import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const audiosDir = path.join(rootDir, 'public', 'audios');
const audioMappingsPath = path.join(rootDir, 'src', 'utils', 'audioMappings.ts');

const apiKey = process.env.GEMINI_API_KEY;

// 1. Read audioMappings.ts and extract the mapping
const mappingsContent = fs.readFileSync(audioMappingsPath, 'utf-8');
const mappings = {};
// Regex to find "key": "value.mp3" mappings
const regex = /"([^"]+)"\s*:\s*"([^"]+\.mp3)"/g;
let match;
while ((match = regex.exec(mappingsContent)) !== null) {
  let key = match[1];
  // Remove escaped quotes if present in the key
  if (key.startsWith('\\"') && key.endsWith('\\"')) {
    key = key.substring(2, key.length - 2);
  }
  const value = match[2];
  mappings[key] = value;
}

// 2. Reverse mapping: mp3 path -> array of expected texts
const fileToExpectedTexts = {};
for (const [text, mp3Path] of Object.entries(mappings)) {
  if (!fileToExpectedTexts[mp3Path]) {
    fileToExpectedTexts[mp3Path] = [];
  }
  fileToExpectedTexts[mp3Path].push(text);
}

// 3. Setup Gemini API
let genAI;
let fileManager;
if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
  fileManager = new GoogleAIFileManager(apiKey);
}

async function validateAudios() {
  console.log('=== Iniciando Validação de Áudios ===');
  
  const allMp3s = new Set();
  
  function getMp3Files(dir, relativePath = '') {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const relPath = path.join(relativePath, file).replace(/\\/g, '/');
      if (fs.statSync(fullPath).isDirectory()) {
        getMp3Files(fullPath, relPath);
      } else if (file.endsWith('.mp3')) {
        allMp3s.add(relPath);
      }
    }
  }
  
  getMp3Files(audiosDir);

  let missingFiles = 0;
  let unmappedFiles = 0;
  
  console.log('\n--- Verificando Arquivos Faltantes ---');
  for (const mp3Path of Object.keys(fileToExpectedTexts)) {
    if (!allMp3s.has(mp3Path)) {
      console.log(`[ERRO] Arquivo referenciado no código, mas não existe no disco: ${mp3Path}`);
      missingFiles++;
    }
  }
  if (missingFiles === 0) console.log('[OK] Todos os arquivos mapeados existem no disco.');

  console.log('\n--- Verificando Arquivos Órfãos ---');
  for (const mp3Path of allMp3s) {
    if (!fileToExpectedTexts[mp3Path]) {
      console.log(`[AVISO] Arquivo existe no disco, mas não está mapeado no código: ${mp3Path}`);
      unmappedFiles++;
    }
  }
  if (unmappedFiles === 0) console.log('[OK] Nenhum arquivo órfão encontrado.');
  
  if (!apiKey) {
    console.log('\n[!] GEMINI_API_KEY não encontrada no arquivo .env.');
    console.log('[!] A transcrição de áudios (Speech-to-Text) será pulada.');
    console.log('Para usar, adicione GEMINI_API_KEY=sua_chave no arquivo .env na raiz do projeto.');
    return;
  }
  
  console.log('\n--- Iniciando Transcrição e Comparação de Áudios (Gemini) ---');
  const filesToTranscribe = Object.keys(fileToExpectedTexts);
  console.log(`Encontrados ${filesToTranscribe.length} arquivos únicos mapeados para transcrever.`);
  console.log('Isso pode levar alguns minutos...\n');
  
  const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
  
  for (let i = 0; i < filesToTranscribe.length; i++) {
    const mp3Path = filesToTranscribe[i];
    const fullPath = path.join(audiosDir, mp3Path);
    if (!fs.existsSync(fullPath)) continue;
    
    console.log(`\nProcessando (${i + 1}/${filesToTranscribe.length}): ${mp3Path}`);
    try {
      const uploadResponse = await fileManager.uploadFile(fullPath, {
        mimeType: "audio/mp3",
        displayName: mp3Path,
      });
      
      const fileUri = uploadResponse.file.uri;
      const fileName = uploadResponse.file.name;
      
      const result = await model.generateContent([
        {
          fileData: {
            mimeType: uploadResponse.file.mimeType,
            fileUri: fileUri
          }
        },
        { text: "Transcreva o áudio exatamente como é falado, sem adicionar nenhum comentário ou formatação extra. Apenas o texto falado." },
      ]);
      
      const transcription = result.response.text().trim();
      
      const expectedTexts = fileToExpectedTexts[mp3Path];
      
      console.log(`[Transcrição Gemini]: "${transcription}"`);
      console.log(`[Textos Mapeados]:`);
      expectedTexts.forEach(t => console.log(` - "${t}"`));
      
      // Cleanup
      await fileManager.deleteFile(fileName);
      
      // Aguardar para evitar rate limits da API gratuita
      await new Promise(r => setTimeout(r, 2500));
      
    } catch (err) {
      console.error(`[ERRO] Falha ao processar ${mp3Path}:`, err.message);
    }
  }
  console.log('\n=== Validação Concluída ===');
}

validateAudios().catch(console.error);
