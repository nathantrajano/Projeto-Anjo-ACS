# Estrutura de Áudios - Anjo ACS

Este diretório contém todos os arquivos MP3 necessários para o sistema de leitura de textos do Anjo ACS.

## Estrutura de Diretórios

```
audios/
├── header/              # Mensagens de boas-vindas (1 arquivo)
├── confirmacao/         # Confirmações de intenção (25 arquivos)
├── guias/               # Títulos e resumos dos guias (50 arquivos: 25 titles + 25 summaries)
├── passos/              # Passos individuais dos guias (~110 arquivos total)
└── motivacional/        # Mensagens motivacionais (7 arquivos)
```

## Arquivos Necessários

### 1. HEADER (1 arquivo)

```
header/welcome.mp3
```

**Conteúdo:**
> "Você está no Anjo ACS, seu assistente digital. Como posso ajudar você hoje?"

---

### 2. CONFIRMAÇÃO (25 arquivos)

Um arquivo para cada intenção disponível:

```
confirmacao/cadastro-familia.mp3
confirmacao/visita-domiciliar.mp3
confirmacao/e-sus-problemas.mp3
confirmacao/pre-natal.mp3
confirmacao/hiperdia.mp3
confirmacao/bolsa-familia.mp3
confirmacao/visita-recem-nascido.mp3
confirmacao/combate-dengue.mp3
confirmacao/saude-mental.mp3
confirmacao/atualizar-cadastro.mp3
confirmacao/saude-idoso.mp3
confirmacao/vacinacao-atraso.mp3
confirmacao/planejamento-familiar.mp3
confirmacao/puerperio.mp3
confirmacao/busca-ativa-tb-hanseniase.mp3
confirmacao/saude-bucal.mp3
confirmacao/identificar-violencia.mp3
confirmacao/riscos-ambientais.mp3
confirmacao/cuidados-paliativos.mp3
confirmacao/mordedura-animais.mp3
confirmacao/saude-homem.mp3
confirmacao/reducao-danos.mp3
confirmacao/prevencao-cancer.mp3
confirmacao/sintomas-gripais.mp3
confirmacao/desenvolvimento-infantil.mp3
```

**Padrão de conteúdo:**
> "Entendi. Você quer saber como [INTENT_TITLE]. Posso continuar para o guia?"

Exemplo para `cadastro-familia.mp3`:
> "Entendi. Você quer saber como Cadastrar família. Posso continuar para o guia?"

---

### 3. GUIAS (50 arquivos)

#### 3.1 Títulos dos Guias (25 arquivos)

```
guias/g1_title.mp3    → "Cadastrar Nova Família"
guias/g2_title.mp3    → "Registrar Visita Domiciliar"
guias/g3_title.mp3    → "Problemas no e-SUS"
guias/g4_title.mp3    → "Acompanhamento de Pré-natal"
guias/g5_title.mp3    → "Acompanhamento Hiperdia"
guias/g6_title.mp3    → "Acompanhamento Bolsa Família"
guias/g7_title.mp3    → "Visita ao Recém-nascido"
guias/g8_title.mp3    → "Prevenção de Arboviroses"
guias/g9_title.mp3    → "Saúde Mental na Comunidade"
guias/g10_title.mp3   → "Atualizar Dados Cadastrais"
guias/g11_title.mp3   → "Saúde do Idoso"
guias/g12_title.mp3   → "Vacinação em Atraso"
guias/g13_title.mp3   → "Planejamento Familiar"
guias/g14_title.mp3   → "Cuidados no Puerpério"
guias/g15_title.mp3   → "Sintomáticos Respiratórios e Pele"
guias/g16_title.mp3   → "Orientações de Saúde Bucal"
guias/g17_title.mp3   → "Identificação de Violência"
guias/g18_title.mp3   → "Saneamento e Meio Ambiente"
guias/g19_title.mp3   → "Apoio em Cuidados Paliativos"
guias/g20_title.mp3   → "Mordedura e Raiva Humana"
guias/g21_title.mp3   → "Saúde do Homem"
guias/g22_title.mp3   → "Álcool e Drogas (Redução de Danos)"
guias/g23_title.mp3   → "Prevenção de Câncer Feminino"
guias/g24_title.mp3   → "Sintomas Gripais e COVID"
guias/g25_title.mp3   → "Desenvolvimento Infantil"
```

#### 3.2 Resumos dos Guias (25 arquivos)

```
guias/g1_summary.mp3   → "Guia passo a passo para realizar o cadastro completo de uma nova família no e-SUS Território."
guias/g2_summary.mp3   → "Como registrar corretamente uma visita de rotina ou busca ativa."
guias/g3_summary.mp3   → "Resolução de erros comuns de sincronização e login."
guias/g4_summary.mp3   → "Rotina de captação e acompanhamento de gestantes na comunidade."
guias/g5_summary.mp3   → "Monitoramento de hipertensos e diabéticos durante as visitas."
guias/g6_summary.mp3   → "Cumprimento das condicionalidades de saúde do programa."
guias/g7_summary.mp3   → "Primeira visita após o nascimento (até o 5º dia de vida)."
guias/g8_summary.mp3   → "Ações de campo para controle de Dengue, Zika e Chikungunya."
guias/g9_summary.mp3   → "Apoio e identificação de sofrimento psíquico."
guias/g10_summary.mp3  → "Como proceder quando o cidadão muda de endereço ou telefone."
guias/g11_summary.mp3  → "Avaliação de fragilidade e riscos no domicílio do idoso."
guias/g12_summary.mp3  → "Como proceder ao identificar crianças com vacinas pendentes."
guias/g13_summary.mp3  → "Orientações sobre métodos contraceptivos e saúde reprodutiva."
guias/g14_summary.mp3  → "Acompanhamento da saúde da mulher após o parto."
guias/g15_summary.mp3  → "Busca ativa de Tuberculose e Hanseníase no território."
guias/g16_summary.mp3  → "Promoção da higiene oral e identificação de lesões."
guias/g17_summary.mp3  → "Como agir em casos suspeitos de violência doméstica ou infantil."
guias/g18_summary.mp3  → "Vigilância de riscos no entorno do domicílio."
guias/g19_summary.mp3  → "Acompanhamento de pacientes com doenças graves em terminalidade."
guias/g20_summary.mp3  → "Primeiros cuidados após ataques de animais."
guias/g21_summary.mp3  → "Ações de prevenção e rastreamento para a população masculina."
guias/g22_summary.mp3  → "Apoio e orientações para usuários de substâncias."
guias/g23_summary.mp3  → "Orientações sobre Papanicolau e Mamografia."
guias/g24_summary.mp3  → "Como agir em casos de febre, tosse e falta de ar."
guias/g25_summary.mp3  → "Marcos de crescimento e aprendizagem da criança."
```

---

### 4. PASSOS (aproximadamente 110 arquivos)

Padrão: `passos/{guideId}_step{stepNumber}.mp3`

**Estrutura por guia:**

| Guia | ID | Passos | Arquivos Esperados |
|------|----|---------|--------------------|
| g1   | Cadastrar família | 5 | g1_step1.mp3 - g1_step5.mp3 |
| g2   | Registrar visita | 4 | g2_step1.mp3 - g2_step4.mp3 |
| g3   | Erro no e-SUS | 4 | g3_step1.mp3 - g3_step4.mp3 |
| g4   | Pré-natal | 4 | g4_step1.mp3 - g4_step4.mp3 |
| g5   | Hiperdia | 3 | g5_step1.mp3 - g5_step3.mp3 |
| g6   | Bolsa Família | 4 | g6_step1.mp3 - g6_step4.mp3 |
| g7   | Recém-nascido | 4 | g7_step1.mp3 - g7_step4.mp3 |
| g8   | Dengue e Focos | 4 | g8_step1.mp3 - g8_step4.mp3 |
| g9   | Saúde Mental | 4 | g9_step1.mp3 - g9_step4.mp3 |
| g10  | Atualizar cadastro | 3 | g10_step1.mp3 - g10_step3.mp3 |
| g11  | Saúde do Idoso | 4 | g11_step1.mp3 - g11_step4.mp3 |
| g12  | Vacina atrasada | 4 | g12_step1.mp3 - g12_step4.mp3 |
| g13  | Planejamento Familiar | 4 | g13_step1.mp3 - g13_step4.mp3 |
| g14  | Pós-parto | 4 | g14_step1.mp3 - g14_step4.mp3 |
| g15  | TB e Hanseníase | 4 | g15_step1.mp3 - g15_step4.mp3 |
| g16  | Saúde Bucal | 4 | g16_step1.mp3 - g16_step4.mp3 |
| g17  | Violência | 4 | g17_step1.mp3 - g17_step4.mp3 |
| g18  | Riscos Ambientais | 4 | g18_step1.mp3 - g18_step4.mp3 |
| g19  | Cuidados Paliativos | 4 | g19_step1.mp3 - g19_step4.mp3 |
| g20  | Mordida de Animal | 4 | g20_step1.mp3 - g20_step4.mp3 |
| g21  | Saúde do Homem | 4 | g21_step1.mp3 - g21_step4.mp3 |
| g22  | Drogas e Álcool | 4 | g22_step1.mp3 - g22_step4.mp3 |
| g23  | Prevenção de Câncer | 4 | g23_step1.mp3 - g23_step4.mp3 |
| g24  | Gripe e COVID | 4 | g24_step1.mp3 - g24_step4.mp3 |
| g25  | Puericultura | 4 | g25_step1.mp3 - g25_step4.mp3 |

**Total: 110 arquivos de passos**

---

### 5. MOTIVACIONAL (7 arquivos)

```
motivacional/missao-cumprida.mp3
motivacional/msg1.mp3
motivacional/msg2.mp3
motivacional/msg3.mp3
motivacional/msg4.mp3
motivacional/msg5.mp3
motivacional/msg6.mp3
```

**Conteúdos:**

- `missao-cumprida.mp3`: "Missão cumprida! O Ministério da Saúde agradece seu empenho. Você é a peça fundamental que leva o SUS para dentro da casa dos brasileiros. Seu trabalho de hoje garante um futuro com mais saúde para toda a sua comunidade. Orgulhe-se de ser ACS!"
- `msg1.mp3`: "Seu trabalho salva vidas todos os dias."
- `msg2.mp3`: "Você é o elo fundamental entre a comunidade e a saúde."
- `msg3.mp3`: "Cada cadastro é uma história que você ajuda a cuidar."
- `msg4.mp3`: "Obrigado por sua dedicação à saúde pública brasileira."
- `msg5.mp3`: "Sua presença na casa das pessoas traz esperança e cuidado."
- `msg6.mp3`: "O SUS acontece através das suas mãos e dos seus pés no campo."

---

## Especificações de Áudio

- **Formato:** MP3
- **Taxa de amostragem:** 44.1 kHz
- **Taxa de bits:** 128 kbps
- **Mono ou Estéreo:** Qualquer um
- **Idioma:** Português Brasileiro
- **Duração recomendada:** 
  - Títulos: 2-5 segundos
  - Resumos: 5-10 segundos
  - Passos: 5-20 segundos
  - Mensagens motivacionais: 5-15 segundos

---

## Total de Arquivos Necessários

- Header: 1
- Confirmação: 25
- Guias (títulos + resumos): 50
- Passos: ~110
- Motivacional: 7

**TOTAL: ~193 arquivos MP3**

---

## Notas Importantes

1. **Nomeação:** Respeite exatamente os nomes dos arquivos (case-sensitive no Linux/Docker)
2. **Fallback:** Se um arquivo não existir, o sistema usa Text-to-Speech (TTS) automaticamente
3. **Avisos:** Se um áudio não for encontrado, verá um aviso no console: 
   ```
   [WARN] Nenhum áudio mapeado para: "...". Usando TTS como fallback.
   ```
4. **Mapeamentos:** Adicione/atualize mapeamentos em `src/utils/audioMappings.ts` conforme necessário

---

## Status Atual

- ✅ Estrutura de diretórios criada
- ✅ Mapeamentos de confirmação implementados
- ✅ Mapeamentos de guias (títulos/resumos) implementados
- ✅ Sistema de busca por padrão para passos configurado
- ⏳ Arquivos MP3 **AINDA PRECISAM SER CRIADOS/ADICIONADOS**

---

## Como Adicionar Áudios

1. Gere/procure os arquivos MP3 correspondentes
2. Coloque-os nos diretórios apropriados seguindo a estrutura acima
3. Reinicie a aplicação (Vite dev server)
4. Os áudios serão automaticamente usados no lugar do TTS

---

**Última atualização:** 2026-06-10
