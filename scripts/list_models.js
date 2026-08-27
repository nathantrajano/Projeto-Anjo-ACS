import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.log('API KEY not found');
  process.exit(1);
}

https.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    const json = JSON.parse(data);
    const models = json.models;
    if (models) {
      console.log('Available models:');
      models.forEach(m => console.log(` - ${m.name} (methods: ${m.supportedGenerationMethods.join(', ')})`));
    } else {
      console.log('Error:', data);
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
