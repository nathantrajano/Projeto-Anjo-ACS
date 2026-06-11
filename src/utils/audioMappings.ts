/**
 * Mapeamento de Textos para Áudio MP3
 * Define a correspondência entre textos exibidos e arquivos de áudio
 * 
 * Estrutura de diretórios esperada em /public/audios/:
 * - /header/
 * - /confirmacao/
 * - /sucesso/
 * - /guias/
 * - /passos/
 * - /motivacional/
 */

interface AudioMapping {
  [key: string]: string; // text -> audioPath
}

/**
 * Mapeamento global de textos para caminhos de áudio
 * Os caminhos são relativos a /public/audios/
 */
export const audioMappings: AudioMapping = {
  // === HEADER ===
  "\"Você está no Anjo ACS, seu assistente digital. Como posso ajudar você hoje?\"":
    "header/welcome.mp3",

  // === CONFIRMAÇÃO - Confirmação de Intenção (baseado em INTENTS.title) ===
  "\"Entendi. Você quer saber como Cadastrar família. Posso continuar para o guia?\"":
    "confirmacao/cadastro-familia.mp3",
  "\"Entendi. Você quer saber como Registrar visita. Posso continuar para o guia?\"":
    "confirmacao/visita-domiciliar.mp3",
  "\"Entendi. Você quer saber como Erro no e-SUS. Posso continuar para o guia?\"":
    "confirmacao/e-sus-problemas.mp3",
  "\"Entendi. Você quer saber como Pré-natal. Posso continuar para o guia?\"":
    "confirmacao/pre-natal.mp3",
  "\"Entendi. Você quer saber como Hiperdia. Posso continuar para o guia?\"":
    "confirmacao/hiperdia.mp3",
  "\"Entendi. Você quer saber como Bolsa Família. Posso continuar para o guia?\"":
    "confirmacao/bolsa-familia.mp3",
  "\"Entendi. Você quer saber como Recém-nascido. Posso continuar para o guia?\"":
    "confirmacao/visita-recem-nascido.mp3",
  "\"Entendi. Você quer saber como Dengue e Focos. Posso continuar para o guia?\"":
    "confirmacao/combate-dengue.mp3",
  "\"Entendi. Você quer saber como Saúde Mental. Posso continuar para o guia?\"":
    "confirmacao/saude-mental.mp3",
  "\"Entendi. Você quer saber como Atualizar cadastro. Posso continuar para o guia?\"":
    "confirmacao/atualizar-cadastro.mp3",
  "\"Entendi. Você quer saber como Saúde do Idoso. Posso continuar para o guia?\"":
    "confirmacao/saude-idoso.mp3",
  "\"Entendi. Você quer saber como Vacina atrasada. Posso continuar para o guia?\"":
    "confirmacao/vacinacao-atraso.mp3",
  "\"Entendi. Você quer saber como Planejamento Familiar. Posso continuar para o guia?\"":
    "confirmacao/planejamento-familiar.mp3",
  "\"Entendi. Você quer saber como Pós-parto / Puerpério. Posso continuar para o guia?\"":
    "confirmacao/puerperio.mp3",
  "\"Entendi. Você quer saber como TB e Hanseníase. Posso continuar para o guia?\"":
    "confirmacao/busca-ativa-tb-hanseniase.mp3",
  "\"Entendi. Você quer saber como Saúde Bucal. Posso continuar para o guia?\"":
    "confirmacao/saude-bucal.mp3",
  "\"Entendi. Você quer saber como Violência. Posso continuar para o guia?\"":
    "confirmacao/identificar-violencia.mp3",
  "\"Entendi. Você quer saber como Riscos Ambientais. Posso continuar para o guia?\"":
    "confirmacao/riscos-ambientais.mp3",
  "\"Entendi. Você quer saber como Cuidados Paliativos. Posso continuar para o guia?\"":
    "confirmacao/cuidados-paliativos.mp3",
  "\"Entendi. Você quer saber como Mordida de Animal. Posso continuar para o guia?\"":
    "confirmacao/mordedura-animais.mp3",
  "\"Entendi. Você quer saber como Saúde do Homem. Posso continuar para o guia?\"":
    "confirmacao/saude-homem.mp3",
  "\"Entendi. Você quer saber como Drogas e Álcool. Posso continuar para o guia?\"":
    "confirmacao/reducao-danos.mp3",
  "\"Entendi. Você quer saber como Prevenção Câncer. Posso continuar para o guia?\"":
    "confirmacao/prevencao-cancer.mp3",
  "\"Entendi. Você quer saber como Gripe e COVID. Posso continuar para o guia?\"":
    "confirmacao/sintomas-gripais.mp3",
  "\"Entendi. Você quer saber como Puericultura. Posso continuar para o guia?\"":
    "confirmacao/desenvolvimento-infantil.mp3",

  // === GUIAS - Títulos e Resumos ===
  "\"Cadastrar Nova Família\"": "guias/g1_title.mp3",
  "\"Guia passo a passo para realizar o cadastro completo de uma nova família no e-SUS Território.\"":
    "guias/g1_summary.mp3",
  "\"Registrar Visita Domiciliar\"": "guias/g2_title.mp3",
  "\"Como registrar corretamente uma visita de rotina ou busca ativa.\"": "guias/g2_summary.mp3",
  "\"Problemas no e-SUS\"": "guias/g3_title.mp3",
  "\"Resolução de erros comuns de sincronização e login.\"": "guias/g3_summary.mp3",
  "\"Acompanhamento de Pré-natal\"": "guias/g4_title.mp3",
  "\"Rotina de captação e acompanhamento de gestantes na comunidade.\"": "guias/g4_summary.mp3",
  "\"Acompanhamento Hiperdia\"": "guias/g5_title.mp3",
  "\"Monitoramento de hipertensos e diabéticos durante as visitas.\"": "guias/g5_summary.mp3",
  "\"Acompanhamento Bolsa Família\"": "guias/g6_title.mp3",
  "\"Cumprimento das condicionalidades de saúde do programa.\"": "guias/g6_summary.mp3",
  "\"Visita ao Recém-nascido\"": "guias/g7_title.mp3",
  "\"Primeira visita após o nascimento (até o 5º dia de vida).\"": "guias/g7_summary.mp3",
  "\"Prevenção de Arboviroses\"": "guias/g8_title.mp3",
  "\"Ações de campo para controle de Dengue, Zika e Chikungunya.\"": "guias/g8_summary.mp3",
  "\"Saúde Mental na Comunidade\"": "guias/g9_title.mp3",
  "\"Apoio e identificação de sofrimento psíquico.\"": "guias/g9_summary.mp3",
  "\"Atualizar Dados Cadastrais\"": "guias/g10_title.mp3",
  "\"Como proceder quando o cidadão muda de endereço ou telefone.\"": "guias/g10_summary.mp3",
  "\"Saúde do Idoso\"": "guias/g11_title.mp3",
  "\"Avaliação de fragilidade e riscos no domicílio do idoso.\"": "guias/g11_summary.mp3",
  "\"Vacinação em Atraso\"": "guias/g12_title.mp3",
  "\"Como proceder ao identificar crianças com vacinas pendentes.\"": "guias/g12_summary.mp3",
  "\"Planejamento Familiar\"": "guias/g13_title.mp3",
  "\"Orientações sobre métodos contraceptivos e saúde reprodutiva.\"": "guias/g13_summary.mp3",
  "\"Cuidados no Puerpério\"": "guias/g14_title.mp3",
  "\"Acompanhamento da saúde da mulher após o parto.\"": "guias/g14_summary.mp3",
  "\"Sintomáticos Respiratórios e Pele\"": "guias/g15_title.mp3",
  "\"Busca ativa de Tuberculose e Hanseníase no território.\"": "guias/g15_summary.mp3",
  "\"Orientações de Saúde Bucal\"": "guias/g16_title.mp3",
  "\"Promoção da higiene oral e identificação de lesões.\"": "guias/g16_summary.mp3",
  "\"Identificação de Violência\"": "guias/g17_title.mp3",
  "\"Como agir em casos suspeitos de violência doméstica ou infantil.\"": "guias/g17_summary.mp3",
  "\"Saneamento e Meio Ambiente\"": "guias/g18_title.mp3",
  "\"Vigilância de riscos no entorno do domicílio.\"": "guias/g18_summary.mp3",
  "\"Apoio em Cuidados Paliativos\"": "guias/g19_title.mp3",
  "\"Acompanhamento de pacientes com doenças graves em terminalidade.\"": "guias/g19_summary.mp3",
  "\"Mordedura e Raiva Humana\"": "guias/g20_title.mp3",
  "\"Primeiros cuidados após ataques de animais.\"": "guias/g20_summary.mp3",
  "\"Saúde do Homem\"": "guias/g21_title.mp3",
  "\"Ações de prevenção e rastreamento para a população masculina.\"": "guias/g21_summary.mp3",
  "\"Álcool e Drogas (Redução de Danos)\"": "guias/g22_title.mp3",
  "\"Apoio e orientações para usuários de substâncias.\"": "guias/g22_summary.mp3",
  "\"Prevenção de Câncer Feminino\"": "guias/g23_title.mp3",
  "\"Orientações sobre Papanicolau e Mamografia.\"": "guias/g23_summary.mp3",
  "\"Sintomas Gripais e COVID\"": "guias/g24_title.mp3",
  "\"Como agir em casos de febre, tosse e falta de ar.\"": "guias/g24_summary.mp3",
  "\"Desenvolvimento Infantil\"": "guias/g25_title.mp3",
  "\"Marcos de crescimento e aprendizagem da criança.\"": "guias/g25_summary.mp3",

  // === MOTIVAÇÃO ===
  "\"Missão cumprida! O Ministério da Saúde agradece seu empenho. Você é a peça fundamental que leva o SUS para dentro da casa dos brasileiros. Seu trabalho de hoje garante um futuro com mais saúde para toda a sua comunidade. Orgulhe-se de ser ACS!\"":
    "motivacional/missao-cumprida.mp3",
  "\"Seu trabalho salva vidas todos os dias.\"":
    "motivacional/msg1.mp3",
  "\"Você é o elo fundamental entre a comunidade e a saúde.\"":
    "motivacional/msg2.mp3",
  "\"Cada cadastro é uma história que você ajuda a cuidar.\"":
    "motivacional/msg3.mp3",
  "\"Obrigado por sua dedicação à saúde pública brasileira.\"":
    "motivacional/msg4.mp3",
  "\"Sua presença na casa das pessoas traz esperança e cuidado.\"":
    "motivacional/msg5.mp3",
  "\"O SUS acontece através das suas mãos e dos seus pés no campo.\"":
    "motivacional/msg6.mp3",
};

/**
 * Obtém o caminho do arquivo de áudio para um texto
 * Se não encontrar um mapeamento exato, tenta variações
 * @param text - Texto para buscar
 * @returns Caminho do arquivo de áudio ou null se não encontrado
 */
export const getAudioPath = (text: string): string | null => {
  // Busca exata
  if (audioMappings[text]) {
    return audioMappings[text];
  }

  // Busca parcial (útil para textos que podem variar slightly)
  const lowerText = text.toLowerCase().trim();
  for (const [key, path] of Object.entries(audioMappings)) {
    if (key.toLowerCase().includes(lowerText) || lowerText.includes(key.toLowerCase())) {
      return path;
    }
  }

  return null;
};

/**
 * Registra um novo mapeamento de texto para áudio
 * Útil para adicionar mapeamentos dinamicamente
 */
export const registerAudioMapping = (text: string, audioPath: string) => {
  audioMappings[text] = audioPath;
};

/**
 * Obtém todos os mapeamentos registrados
 */
export const getAudioMappings = (): AudioMapping => {
  return { ...audioMappings };
};

/**
 * Verifica se há um áudio mapeado para um texto
 */
export const hasAudioMapping = (text: string): boolean => {
  return getAudioPath(text) !== null;
};
