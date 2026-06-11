# Guia de Configuração de Áudio MP3

## Visão Geral

O aplicativo Anjo ACS foi migrado de um sistema de síntese de fala (TTS) para reprodução de arquivos MP3 pré-gravados. Isto fornece:

✅ Melhor qualidade de áudio
✅ Tom profissional e consistente
✅ Controle total sobre entonação
✅ Independência de síntese de fala do navegador
✅ Fallback automático para TTS se áudio não estiver disponível

## Estrutura de Diretórios

Os arquivos de áudio devem estar organizados em `/public/audios/` com a seguinte estrutura:

```
public/
└── audios/
    ├── header/
    │   └── welcome.mp3
    ├── confirmacao/
    │   ├── cadastro-familia.mp3
    │   ├── visita-domiciliar.mp3
    │   ├── e-sus-problemas.mp3
    │   ├── pre-natal.mp3
    │   ├── hiperdia.mp3
    │   ├── bolsa-familia.mp3
    │   ├── visita-recem-nascido.mp3
    │   ├── combate-dengue.mp3
    │   ├── saude-mental.mp3
    │   ├── atualizar-cadastro.mp3
    │   ├── saude-idoso.mp3
    │   ├── vacinacao-atraso.mp3
    │   ├── planejamento-familiar.mp3
    │   ├── puerperio.mp3
    │   ├── busca-ativa-tb-hanseniase.mp3
    │   ├── saude-bucal.mp3
    │   ├── identificar-violencia.mp3
    │   ├── riscos-ambientais.mp3
    │   ├── cuidados-paliativos.mp3
    │   ├── mordedura-animais.mp3
    │   ├── saude-homem.mp3
    │   ├── reducao-danos.mp3
    │   ├── prevencao-cancer.mp3
    │   ├── sintomas-gripais.mp3
    │   └── desenvolvimento-infantil.mp3
    ├── guias/
    │   ├── g1_title.mp3
    │   ├── g1_summary.mp3
    │   ├── g2_title.mp3
    │   ├── g2_summary.mp3
    │   ... (continue para todos os guias de g1 a g25)
    └── motivacional/
        ├── missao-cumprida.mp3
        ├── msg1.mp3 (Seu trabalho salva vidas todos os dias)
        ├── msg2.mp3 (Você é o elo fundamental...)
        ├── msg3.mp3 (Cada cadastro é uma história...)
        ├── msg4.mp3 (Obrigado por sua dedicação...)
        ├── msg5.mp3 (Sua presença na casa das pessoas...)
        └── msg6.mp3 (O SUS acontece através...)
```

## Especificações de Áudio

**Formato:** MP3
**Taxa de amostragem:** 44100 Hz (recomendado)
**Bitrate:** 128 kbps (recomendado)
**Idioma:** Português Brasileiro
**Voz:** Profissional (recomendação)

## Como Adicionar Novos Áudios

### Passo 1: Gravar/Gerar o Áudio
- Use ferramentas como Audacity, Adobe Audition ou serviços de TTS profissionais
- Garanta áudio claro sem ruído de fundo
- Duração apropriada para o conteúdo

### Passo 2: Salvar em MP3
- Exporte como MP3 com configurações recomendadas acima
- Nomeie o arquivo com o padrão: `categoria/descricao.mp3`

### Passo 3: Colocar em `/public/audios/`
- Crie ou adicione à pasta apropriada em `/public/audios/`
- Mantenha a estrutura organizada

### Passo 4: Registrar no Mapeamento
- Abra `src/utils/audioMappings.ts`
- Adicione uma entrada ao objeto `audioMappings`:

```typescript
export const audioMappings: AudioMapping = {
  // ... outros mapeamentos
  "Seu texto exato aqui": "categoria/nome-do-arquivo.mp3",
  // ... mais mapeamentos
};
```

## Funcionamento do Sistema

### Fluxo de Reprodução

1. **Usuário clica no botão de áudio**
2. `AudioButton.tsx` chama `speak(texto)`
3. `speak()` busca o áudio no `audioMappings`
4. Se encontrado → reproduz o arquivo MP3
5. Se não encontrado → usa TTS como fallback com aviso no console
6. Callback atualiza o estado de reprodução no componente

### Arquivos Principais

- **`src/utils/audioManager.ts`** - Gerencia reprodução e estado
- **`src/utils/audioMappings.ts`** - Mapeia textos para arquivos
- **`src/utils/speech.ts`** - Interface principal (compatível com TTS)
- **`src/components/AudioButton.tsx`** - Componente de botão

## Tratamento de Erros

Se um arquivo MP3 não for encontrado:
1. ⚠️ Aviso é logado no console
2. 🔄 Sistema tenta fallback para TTS
3. 🎵 Usuário ouve áudio sintetizado temporariamente

## Dicas de Uso

- ✅ **Manter textos consistentes** - Use exatamente os mesmos textos em `audioMappings`
- ✅ **Organizar por categoria** - Mantenha diretórios bem estruturados
- ✅ **Testar cada áudio** - Valide qualidade e duração
- ✅ **Documentar mudanças** - Se modificar textos da UI, atualize `audioMappings`

## Migração do TTS

Se quiser reverter para TTS puro:

1. Modifique `src/utils/speech.ts`
2. Comente a lógica de MP3
3. Descomente o fallback para TTS
4. O comportamento voltará ao sistema anterior

## Desenvolvedor - Adicionar Novo Texto com Áudio

Quando adicionar novo texto no app:

```tsx
// src/pages/MinhaPage.tsx
import { AudioButton } from "@/components/AudioButton";

export const MeuComponente = () => {
  const novoTexto = "Meu novo texto de áudio";
  
  return (
    <AudioButton 
      text={novoTexto}
      label="Ouvir"
      variant="pill"
    />
  );
};
```

Depois:

1. Grave o áudio com `novoTexto`
2. Salve em `/public/audios/categoria/arquivo.mp3`
3. Adicione em `audioMappings.ts`:

```typescript
"Meu novo texto de áudio": "categoria/arquivo.mp3",
```

## Perguntas Frequentes

**P: E se o dispositivo não suportar MP3?**
R: Navegadores modernos todos suportam MP3. Como fallback, o TTS é acionado.

**P: Posso usar outros formatos como OGG ou WAV?**
R: Sim! Modifique `audioManager.ts` para aceitar outros formatos.

**P: Como medir a duração real do áudio?**
R: O `audioManager` emite eventos `ended` quando o áudio termina.

**P: Posso fazer download dos áudios?**
R: Depende de sua política. Arquivos em `/public/` são acessíveis.

---

**Última atualização:** 2026-06-10
**Versão:** 1.0
