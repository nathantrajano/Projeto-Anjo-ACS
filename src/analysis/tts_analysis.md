# Análise de Frases de TTS - Anjo ACS

## Resumo Executivo

- **Local do documento**: `src/analysis/tts_analysis.md`
- **Total de frases fixas**: 8
- **Total de frases dinâmicas**: 3 categorias
- **Prioridade para conversão manual**: Frases fixas (8) e frases dinâmicas de guias (25)

---

## 1. Frases Fixas (Prioridade Alta para Conversão)

| ID | Texto | Tipo | Origem no código | Contexto de uso | Nome de arquivo sugerido | Duplicatas |
|----|-------|------|-----------------|-----------------|-------------------------|------------|
| 1 | "Entendi. Você quer saber como {intent.title}. Posso continuar para o guia?" | Fixa (com dinâmico) | `src/pages/Confirmation.tsx` | Tela de confirmação de intenção | confirmation.mp3 | - |
| 2 | "Sua mensagem foi enviada. Responderemos em breve. Obrigado." | Fixa | `src/pages/HelpSuccess.tsx` | Tela de sucesso do envio de ajuda | help_success.mp3 | - |
| 3 | "Seu trabalho salva vidas todos os dias." | Fixa | `src/data/mockData.ts` (MOTIVATIONAL_MESSAGES[0]) | Tela motivacional | msg_1.mp3 | - |
| 4 | "Você é o elo fundamental entre a comunidade e a saúde." | Fixa | `src/data/mockData.ts` (MOTIVATIONAL_MESSAGES[1]) | Tela motivacional | msg_2.mp3 | - |
| 5 | "Cada cadastro é uma história que você ajuda a cuidar." | Fixa | `src/data/mockData.ts` (MOTIVATIONAL_MESSAGES[2]) | Tela motivacional | msg_3.mp3 | - |
| 6 | "Obrigado por sua dedicação à saúde pública brasileira." | Fixa | `src/data/mockData.ts` (MOTIVATIONAL_MESSAGES[3]) | Tela motivacional | msg_4.mp3 | - |
| 7 | "Sua presença na casa das pessoas traz esperança e cuidado." | Fixa | `src/data/mockData.ts` (MOTIVATIONAL_MESSAGES[4]) | Tela motivacional | msg_5.mp3 | - |
| 8 | "O SUS acontece através das suas mãos e dos seus pés no campo." | Fixa | `src/data/mockData.ts` (MOTIVATIONAL_MESSAGES[5]) | Tela motivacional | msg_6.mp3 | - |

---

## 2. Frases Dinâmicas (Baixa Prioridade para Conversão)

### 2.1 Frases de Guia (25 frases)
**Origem**: `src/data/mockData.ts` (GUIDES)
- **Contexto**: Leitura completa de guias passo a passo
- **Formato**: Construídas dinamicamente a partir de dados
- **Exemplo**: `"Guia para Cadastrar Nova Família. Guia passo a passo para realizar o cadastro completo de uma nova família no e-SUS Território. Passo 1: Acesse o Território. Abra o aplicativo e-SUS Território no seu tablet ou celular..."`
- **Prioridade**: Média (podem ser convertidas em áudio por guia, não por frase)

### 2.2 Frases de Intenção (25 frases)
**Origem**: `src/data/mockData.ts` (INTENTS)
- **Contexto**: Leitura de títulos de intenções
- **Formato**: `{intent.title}` (ex: "Cadastrar família")
- **Prioridade**: Baixa (são curtas e variáveis)

### 2.3 Frases de Feedback
**Origem**: `src/pages/FeedbackDoubt.tsx`
- **Contexto**: Mensagens de feedback
- **Formato**: Construídas dinamicamente
- **Exemplo**: "A dúvida continua? Conseguiu realizar o procedimento ou ainda precisa de uma ajuda mais detalhada?"
- **Prioridade**: Baixa

---

## 3. Pontos de Uso de TTS no Código

### 3.1 Função Principal de TTS
**Arquivo**: `src/utils/speech.ts`
```typescript
export const speak = (text: string) => {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  // ... configurações
  window.speechSynthesis.speak(utterance);
};
```

### 3.2 Componente de Áudio
**Arquivo**: `src/components/AudioButton.tsx`
- Usa a função `speak` para reprodução
- Aceita qualquer texto como propriedade

### 3.3 Chamadas Diretas de TTS

| Arquivo | Linha | Contexto | Tipo de Texto |
|--------|-------|----------|---------------|
| `src/pages/Confirmation.tsx` | ~20 | Confirmação de intenção | Fixa (com dinâmico) |
| `src/pages/HelpSuccess.tsx` | ~20 | Sucesso de envio | Fixa |
| `src/pages/Motivational.tsx` | ~40 | Mensagem motivacional | Fixa (array) |
| `src/pages/GuideSteps.tsx` | ~40 | Leitura de guia | Dinâmico |
| `src/components/AudioButton.tsx` | ~25 | Botão de áudio genérico | Dinâmico |

---

## 4. Recomendações para Conversão

### 4.1 Prioridade 1: Frases Fixas (8 frases)
1. Gerar MP3s para as 8 frases fixas
2. Criar função `speakFixedText(id: string)` que reproduz áudio local
3. Substituir chamadas diretas de `speak(text)` por `speakFixedText(id)`

### 4.2 Prioridade 2: Frases de Guia (25 guias)
1. Gerar MP3 para cada guia completo
2. Criar função `speakGuide(guideId: string)`
3. Substituir chamada em `GuideSteps.tsx`

### 4.3 Prioridade 3: Frases Curtas e Variáveis
Manter com speechSynthesis (não vale a pena converter)

---

## 5. Como Gerar os Áudios Futuramente

### 5.1 Script de Geração (exemplo)
```bash
# Instalar dependências
npm install elevenlabs

# Criar script generate-audios.js
node scripts/generate-audios.js
```

### 5.2 Variáveis de Necessárias
```bash
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_VOICE_ID=your_voice_id_here
```

### 5.3 Estrutura de Arquivos Sugerida
```
public/audio/
├── fixed/
│   ├── confirmation.mp3
│   ├── help_success.mp3
│   └── msg_1.mp3 ... msg_6.mp3
└── guides/
    ├── g1.mp  # Cadastrar Nova Família
    ├── g2.mp  # Registrar Visita
    └── ...
```

---

## 6. Como Adicionar Novas Frases

### 6.1 Frases Fixas
1. Adicionar texto na tabela acima
2. Gerar MP3 com ElevenLabs
3. Salvar em `public/audio/fixed/`
4. Criar mapeamento em `src/utils/audioMap.ts`

### 6.2 Frases de Guia
1. Adicionar novo guia em `src/data/mockData.ts`
2. Gerar MP3 para o guia completo
3. Salvar em `public/audio/guides/`
4. Atualizar mapeamento de guias

---

## 7. Análise de Duplicatas

Nenhuma duplicata encontrada entre as frases fixas. As frases dinâmicas são únicas por natureza.