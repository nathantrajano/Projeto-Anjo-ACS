# ✅ Checklist de Implementação - Sistema de Áudio MP3

## Status da Migração

**Data de Início:** 2026-06-10
**Status Atual:** 🟡 Sistema Pronto, Arquivos de Áudio Pendentes
**Bloqueador:** Arquivos MP3 não estão presentes em `/public/audios/`

## O que foi feito ✅

- [x] **audioManager.ts** - Sistema de reprodução e controle de áudio MP3
- [x] **audioMappings.ts** - Mapeamento de textos para arquivos
- [x] **speech.ts** - Atualizado para usar MP3 com fallback para TTS
- [x] **AudioButton.tsx** - Integrado com novo sistema
- [x] **Documentação** - AUDIO_SETUP.md com instruções completas
- [x] **Utilitários** - audioDebug.ts para desenvolvimento

## O que precisa ser feito ❌

### Fase 1: Preparação (CRÍTICO)
- [ ] Criar estrutura de diretórios em `/public/audios/`
  - [ ] `audios/header/`
  - [ ] `audios/confirmacao/`
  - [ ] `audios/guias/`
  - [ ] `audios/motivacional/`

### Fase 2: Áudio Header (1 arquivo)
- [ ] **Gravação necessária (1):**
  - [ ] `header/welcome.mp3` 
    ```
    "Você está no Anjo ACS, seu assistente digital. Como posso ajudar você hoje?"
    Duração esperada: ~5 seg
    ```

### Fase 3: Áudios de Confirmação (25 arquivos)
**Padrão:** `confirmacao/{nome-intencao}.mp3`

Necessários:
- [ ] `cadastro-familia.mp3`
- [ ] `visita-domiciliar.mp3`
- [ ] `e-sus-problemas.mp3`
- [ ] `pre-natal.mp3`
- [ ] `hiperdia.mp3`
- [ ] `bolsa-familia.mp3`
- [ ] `visita-recem-nascido.mp3`
- [ ] `combate-dengue.mp3`
- [ ] `saude-mental.mp3`
- [ ] `atualizar-cadastro.mp3`
- [ ] `saude-idoso.mp3`
- [ ] `vacinacao-atraso.mp3`
- [ ] `planejamento-familiar.mp3`
- [ ] `puerperio.mp3`
- [ ] `busca-ativa-tb-hanseniase.mp3`
- [ ] `saude-bucal.mp3`
- [ ] `identificar-violencia.mp3`
- [ ] `riscos-ambientais.mp3`
- [ ] `cuidados-paliativos.mp3`
- [ ] `mordedura-animais.mp3`
- [ ] `saude-homem.mp3`
- [ ] `reducao-danos.mp3`
- [ ] `prevencao-cancer.mp3`
- [ ] `sintomas-gripais.mp3`
- [ ] `desenvolvimento-infantil.mp3`

### Fase 4: Áudios de Guias (50 arquivos)
**Padrão:** `guias/g{numero}_title.mp3` e `guias/g{numero}_summary.mp3`

Necessários (g1 até g25, cada um com 2 arquivos):
- [ ] Guias 1-5 (10 arquivos)
  - [ ] g1_title.mp3 - "Cadastrar Nova Família"
  - [ ] g1_summary.mp3 - resumo do guia 1
  - [ ] g2_title.mp3 - "Registrar Visita Domiciliar"
  - [ ] g2_summary.mp3 - resumo do guia 2
  - [ ] g3_title.mp3 - "Problemas no e-SUS"
  - [ ] g3_summary.mp3 - resumo do guia 3
  - [ ] g4_title.mp3 - "Acompanhamento de Pré-natal"
  - [ ] g4_summary.mp3 - resumo do guia 4
  - [ ] g5_title.mp3 - "Acompanhamento Hiperdia"
  - [ ] g5_summary.mp3 - resumo do guia 5

- [ ] Guias 6-10 (10 arquivos)
  - [ ] g6_title.mp3 - "Acompanhamento Bolsa Família"
  - [ ] g6_summary.mp3
  - [ ] g7_title.mp3 - "Visita ao Recém-nascido"
  - [ ] g7_summary.mp3
  - [ ] g8_title.mp3 - "Prevenção de Arboviroses"
  - [ ] g8_summary.mp3
  - [ ] g9_title.mp3 - "Saúde Mental na Comunidade"
  - [ ] g9_summary.mp3
  - [ ] g10_title.mp3 - "Atualizar Dados Cadastrais"
  - [ ] g10_summary.mp3

- [ ] Guias 11-15 (10 arquivos)
- [ ] Guias 16-20 (10 arquivos)
- [ ] Guias 21-25 (10 arquivos)

### Fase 5: Áudios Motivacionais (7 arquivos)
**Padrão:** `motivacional/{descricao}.mp3`

Necessários:
- [ ] `missao-cumprida.mp3`
  ```
  "Missão cumprida! O Ministério da Saúde agradece seu empenho. Você é a peça fundamental que leva o SUS para dentro da casa dos brasileiros. Seu trabalho de hoje garante um futuro com mais saúde para toda a sua comunidade. Orgulhe-se de ser ACS!"
  Duração esperada: ~20 seg
  ```

- [ ] `msg1.mp3` - "Seu trabalho salva vidas todos os dias."
- [ ] `msg2.mp3` - "Você é o elo fundamental entre a comunidade e a saúde."
- [ ] `msg3.mp3` - "Cada cadastro é uma história que você ajuda a cuidar."
- [ ] `msg4.mp3` - "Obrigado por sua dedicação à saúde pública brasileira."
- [ ] `msg5.mp3` - "Sua presença na casa das pessoas traz esperança e cuidado."
- [ ] `msg6.mp3` - "O SUS acontece através das suas mãos e dos seus pés no campo."

## Resumo

| Categoria | Quantidade | Status |
|-----------|-----------|--------|
| Header | 1 | ⏳ |
| Confirmações | 25 | ⏳ |
| Guias (títulos) | 25 | ⏳ |
| Guias (resumos) | 25 | ⏳ |
| Motivacionais | 7 | ⏳ |
| **TOTAL** | **83** | ⏳ |

## Como Proceder

### Opção 1: Usar Serviço TTS Profissional (Recomendado)
1. Use Google Cloud Text-to-Speech, Azure Speech, ou similar
2. Gere todos os 83 áudios em Português Brasileiro
3. Baixe em formato MP3
4. Organize em `/public/audios/` conforme a estrutura acima

### Opção 2: Gravar com Ator/Atriz
1. Contratar profissional de voz
2. Fornecer script com todos os textos
3. Gravar em sessão única (economiza custo)
4. Editar e exportar como MP3

### Opção 3: Usar Sistema Híbrido
- Grave áudios críticos (header, confirmações principais)
- Use TTS para categorias menos importantes
- Implemente progressivamente

## Verificação de Progresso

### Para Verificar se os Áudios Estão Funcionando:

```javascript
// No console do navegador, após carregar o app:
__AUDIO_DEBUG__.printAuditReport()
```

### Teste Manual:
1. Abra o app em desenvolvimento
2. Clique no botão "Ouvir tudo" no header
3. Verifique:
   - ✅ Se o áudio toca
   - ✅ Se o botão muda para "Parar Áudio"
   - ✅ Se o console mostra a reprodução

### Teste de Fallback:
1. Remova um arquivo de áudio
2. Clique em "Ouvir"
3. Verifique se o console mostra aviso e usa TTS

## Próximos Passos

### Imediato:
1. Decidir entre TTS profissional ou gravação
2. Solicitar/gerar os 83 áudios
3. Organizar em `/public/audios/`

### Curto Prazo (após áudios):
1. Testar todos os botões de áudio
2. Ajustar volumes se necessário
3. Considerar tema de som (startup, erro)

### Futuro:
1. Adicionar legendas/subtítulos automáticos
2. Suporte a múltiplos idiomas
3. Análise de uso de áudio (tracking)

## Contato/Dúvidas

Para dúvidas sobre a implementação:
1. Consulte `AUDIO_SETUP.md`
2. Verifique `src/utils/audioMappings.ts` para texto-áudio
3. Teste com `src/utils/audioDebug.ts`

---

**Última atualização:** 2026-06-10
**Versão do Sistema:** 1.0
**Total de Mudanças:** 5 arquivos novos + 2 modificados
