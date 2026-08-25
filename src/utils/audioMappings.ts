/**
 * Mapeamento de Textos para Áudio MP3
 * Define a correspondência exata entre os textos exibidos no aplicativo e os arquivos MP3 pré-gravados
 * 
 * Estrutura de diretórios em /public/audios/:
 * - /header/
 * - /confirmacao/
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
  "Você está no Anjo ACS, seu assistente digital. Como posso ajudar você hoje?":
    "header/welcome.mp3",

  // === CONFIRMAÇÃO DE INTENÇÕES (25 ARQUIVOS MP3 EXISTENTES) ===
  "\"Entendi. Você quer saber como cadastrar uma casa nova no sistema. Posso continuar para o guia?\"":
    "confirmacao/cadastro-casa-nova.mp3",
  "Entendi. Você quer saber como cadastrar uma casa nova no sistema. Posso continuar para o guia?":
    "confirmacao/cadastro-casa-nova.mp3",

  "\"Entendi. Você quer saber como registrar que fez uma visita hoje. Posso continuar para o guia?\"":
    "confirmacao/registrar-visita-hoje.mp3",
  "Entendi. Você quer saber como registrar que fez uma visita hoje. Posso continuar para o guia?":
    "confirmacao/registrar-visita-hoje.mp3",

  "\"Entendi. Você quer saber o que fazer quando o endereço ou CEP não aparece certo. Posso continuar para o guia?\"":
    "confirmacao/erro-endereco-cep.mp3",
  "Entendi. Você quer saber o que fazer quando o endereço ou CEP não aparece certo. Posso continuar para o guia?":
    "confirmacao/erro-endereco-cep.mp3",

  "\"Entendi. Você quer saber como registrar a mudança de uma pessoa que saiu da casa. Posso continuar para o guia?\"":
    "confirmacao/mudanca-morador-saida.mp3",
  "Entendi. Você quer saber como registrar a mudança de uma pessoa que saiu da casa. Posso continuar para o guia?":
    "confirmacao/mudanca-morador-saida.mp3",

  "\"Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?\"": "confirmacao/pre-natal.mp3",
  "Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?": "confirmacao/pre-natal.mp3",

  "\"Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?\"": "confirmacao/hiperdia.mp3",
  "Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?": "confirmacao/hiperdia.mp3",

  "\"Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?\"": "confirmacao/bolsa-familia.mp3",
  "Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?": "confirmacao/bolsa-familia.mp3",

  // TODO: Regravar este áudio. O arquivo antigo ("visita-recem-nascido.mp3") dizia "sobre a visita ao recém-nascido" (sem "os cuidados na").
  // "\"Entendi. Você quer saber sobre os cuidados na visita ao recém-nascido. Posso continuar para o guia?\"": "confirmacao/cuidados-visita-recem-nascido.mp3",
  // "Entendi. Você quer saber sobre os cuidados na visita ao recém-nascido. Posso continuar para o guia?": "confirmacao/cuidados-visita-recem-nascido.mp3",

  "\"Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?\"": "confirmacao/combate-dengue.mp3",
  "Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?": "confirmacao/combate-dengue.mp3",

  "\"Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?\"": "confirmacao/saude-mental.mp3",
  "Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?": "confirmacao/saude-mental.mp3",

  "\"Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?\"": "confirmacao/saude-idoso.mp3",
  "Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?": "confirmacao/saude-idoso.mp3",

  "\"Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?\"": "confirmacao/vacinacao-atraso.mp3",
  "Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?": "confirmacao/vacinacao-atraso.mp3",

  "\"Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?\"": "confirmacao/planejamento-familiar.mp3",
  "Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?": "confirmacao/planejamento-familiar.mp3",

  "\"Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?\"": "confirmacao/puerperio.mp3",
  "Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?": "confirmacao/puerperio.mp3",

  "\"Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?\"": "confirmacao/busca-ativa-tb-hanseniase.mp3",
  "Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?": "confirmacao/busca-ativa-tb-hanseniase.mp3",

  "\"Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?\"": "confirmacao/saude-bucal.mp3",
  "Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?": "confirmacao/saude-bucal.mp3",

  "\"Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?\"": "confirmacao/identificar-violencia.mp3",
  "Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?": "confirmacao/identificar-violencia.mp3",

  "\"Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?\"": "confirmacao/riscos-ambientais.mp3",
  "Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?": "confirmacao/riscos-ambientais.mp3",

  "\"Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?\"": "confirmacao/cuidados-paliativos.mp3",
  "Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?": "confirmacao/cuidados-paliativos.mp3",

  "\"Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?\"": "confirmacao/mordedura-animais.mp3",
  "Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?": "confirmacao/mordedura-animais.mp3",

  "\"Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?\"": "confirmacao/saude-homem.mp3",
  "Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?": "confirmacao/saude-homem.mp3",

  "\"Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?\"": "confirmacao/reducao-danos.mp3",
  "Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?": "confirmacao/reducao-danos.mp3",

  "\"Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?\"": "confirmacao/prevencao-cancer.mp3",
  "Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?": "confirmacao/prevencao-cancer.mp3",

  "\"Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?\"": "confirmacao/sintomas-gripais.mp3",
  "Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?": "confirmacao/sintomas-gripais.mp3",

  "\"Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?\"": "confirmacao/desenvolvimento-infantil.mp3",
  "Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?": "confirmacao/desenvolvimento-infantil.mp3",

  // === GUIAS - TÍTULOS E RESUMOS ===
  // G1 - Cadastrar Casa Nova no Sistema
  "Cadastrar Casa Nova no Sistema": "guias/g1_title.mp3",
  "Passo a passo para realizar o cadastro inicial de um novo domicílio no e-SUS Território.": "guias/g1_summary.mp3",

  "Verificar Duplicação de Domicílio": "guias/g2_title.mp3",
  "Como checar se uma casa já foi cadastrada antes de criar um novo registro no e-SUS.": "guias/g2_summary.mp3",

  // G3 - Corrigir Erro de Endereço ou CEP
  "Corrigir Erro de Endereço ou CEP": "guias/g3_title.mp3",
  "O que fazer quando a rua, o bairro ou o CEP não aparecem corretamente no aplicativo.": "guias/g3_summary.mp3",

  // G8 - Registrar Mudança de Morador (Saída)
  "Registrar Mudança de Morador (Saída)": "guias/g8_title.mp3",
  "Como atualizar o sistema quando um morador se muda do domicílio ou da microárea.": "guias/g8_summary.mp3",

  // G11 - Registrar Visita Domiciliar
  "Registrar Visita Domiciliar": "guias/g11_title.mp3",
  "Como registrar corretamente uma visita domiciliar realizada no dia a dia.": "guias/g11_summary.mp3",

  // G21 - Acompanhamento de Pré-natal
  "Acompanhamento de Pré-natal": "guias/g21_title.mp3",
  "Rotina de captação e acompanhamento de gestantes na comunidade.": "guias/g21_summary.mp3",

  // G22 - Acompanhamento Hiperdia
  "Acompanhamento Hiperdia": "guias/g22_title.mp3",
  "Monitoramento de hipertensos e diabéticos durante as visitas.": "guias/g22_summary.mp3",

  // G23 - Acompanhamento Bolsa Família
  "Acompanhamento Bolsa Família": "guias/g23_title.mp3",
  "Cumprimento das condicionalidades de saúde do programa.": "guias/g23_summary.mp3",

  // G24 - Visita ao Recém-nascido (Cuidados)
  "Visita ao Recém-nascido (Cuidados)": "guias/g24_title.mp3",
  "Primeira visita após o nascimento (até o 5º dia de vida).": "guias/g24_summary.mp3",

  // G25 - Prevenção de Arboviroses
  "Prevenção de Arboviroses": "guias/g25_title.mp3",
  "Ações de campo para controle de Dengue, Zika e Chikungunya.": "guias/g25_summary.mp3",

  // G26 - Saúde Mental na Comunidade
  "Saúde Mental na Comunidade": "guias/g26_title.mp3",
  "Apoio e identificação de sofrimento psíquico.": "guias/g26_summary.mp3",

  // G27 - Saúde do Idoso
  "Saúde do Idoso": "guias/g27_title.mp3",
  "Avaliação de fragilidade e riscos no domicílio do idoso.": "guias/g27_summary.mp3",

  // G28 - Vacinação em Atraso
  "Vacinação em Atraso": "guias/g28_title.mp3",
  "Como proceder ao identificar crianças com vacinas pendentes.": "guias/g28_summary.mp3",

  // G29 - Planejamento Familiar
  "Planejamento Familiar": "guias/g29_title.mp3",
  "Orientações sobre métodos contraceptivos e saúde reprodutiva.": "guias/g29_summary.mp3",

  // G30 - Cuidados no Puerpério
  "Cuidados no Puerpério": "guias/g30_title.mp3",
  "Acompanhamento da saúde da mulher após o parto.": "guias/g30_summary.mp3",

  // G31 - Sintomáticos Respiratórios e Pele
  "Sintomáticos Respiratórios e Pele": "guias/g31_title.mp3",
  "Busca ativa de Tuberculose e Hanseníase no território.": "guias/g31_summary.mp3",

  // G32 - Orientações de Saúde Bucal
  "Orientações de Saúde Bucal": "guias/g32_title.mp3",
  "Promoção da higiene oral e identificação de lesões.": "guias/g32_summary.mp3",

  // G33 - Identificação de Violência
  "Identificação de Violência": "guias/g33_title.mp3",
  "Como agir em casos suspeitos de violência doméstica ou infantil.": "guias/g33_summary.mp3",

  // G34 - Saneamento e Meio Ambiente
  "Saneamento e Meio Ambiente": "guias/g34_title.mp3",
  "Vigilância de riscos no entorno do domicílio.": "guias/g34_summary.mp3",

  // G35 - Apoio em Cuidados Paliativos
  "Apoio em Cuidados Paliativos": "guias/g35_title.mp3",
  "Acompanhamento de pacientes com doenças graves em terminalidade.": "guias/g35_summary.mp3",

  // G36 - Mordedura e Raiva Humana
  "Mordedura e Raiva Humana": "guias/g36_title.mp3",
  "Primeiros cuidados após ataques de animais.": "guias/g36_summary.mp3",

  // G37 - Saúde do Homem
  "Saúde do Homem": "guias/g37_title.mp3",
  "Ações de prevenção e rastreamento para a população masculina.": "guias/g37_summary.mp3",

  // G38 - Álcool e Drogas (Redução de Danos)
  "Álcool e Drogas (Redução de Danos)": "guias/g38_title.mp3",
  "Apoio e orientações para usuários de substâncias.": "guias/g38_summary.mp3",

  // G39 - Prevenção de Câncer Feminino
  "Prevenção de Câncer Feminino": "guias/g39_title.mp3",
  "Orientações sobre Papanicolau e Mamografia.": "guias/g39_summary.mp3",

  // G40 - Sintomas Gripais e COVID
  "Sintomas Gripais e COVID": "guias/g40_title.mp3",
  "Como agir em casos de febre, tosse e falta de ar.": "guias/g40_summary.mp3",

  // G41 - Desenvolvimento Infantil
  "Desenvolvimento Infantil": "guias/g41_title.mp3",
  "Marcos de crescimento e aprendizagem da criança.": "guias/g41_summary.mp3",


  // === PASSOS DOS GUIAS ===
  // G1 - Cadastrar Casa Nova no Sistema
  "Acesse o Território. Abra o aplicativo e-SUS Território no tablet e selecione a aba Domicílios.": "passos/g1_step1.mp3",
  "Novo Domicílio. Toque no botão '+' e selecione a opção 'Adicionar Domicílio'.": "passos/g1_step2.mp3",
  "Endereço e Número. Informe o CEP, logradouro, número do imóvel e complemento se houver.": "passos/g1_step3.mp3",
  "Características do Imóvel. Preencha o tipo de imóvel, abastecimento de água e destino do lixo.": "passos/g1_step4.mp3",
  "Salvar Cadastro. Confirme os dados e toque em Salvar para registrar o domicílio na base local.": "passos/g1_step5.mp3",

  // G3 - Corrigir Erro de Endereço ou CEP
  "Buscar por Nome Similar. Digite parte do nome da rua na busca de logradouro para localizar a grafia cadastrada.": "passos/g3_step1.mp3",
  "Usar CEP Geral do Município. Se o CEP específico não funcionar, tente o CEP geral da cidade cadastrado na UBS.": "passos/g3_step2.mp3",
  "Editar Ficha de Domicílio. Se o erro for em casa existente, abra o domicílio e toque no lápis para atualizar o endereço.": "passos/g3_step3.mp3",

  // G8 - Registrar Mudança de Morador (Saída)
  "Acesse o Cadastro do Cidadão. Localize o morador dentro da ficha do domicílio atual.": "passos/g8_step1.mp3",
  "Opções do Morador. Toque nos três pontinhos ou no ícone de edição ao lado do nome da pessoa.": "passos/g8_step2.mp3",
  "Selecionar Mudança de Território. Escolha a opção 'Mudou-se' ou 'Saída do Domicílio'.": "passos/g8_step3.mp3",
  "Confirmar Desvinculação. Confirme a alteração para desvincular o morador daquela residência.": "passos/g8_step4.mp3",

  // G11 - Registrar Visita Domiciliar
  "Localizar Cidadão ou Família. Busque a pessoa ou a casa na sua lista de microárea.": "passos/g11_step1.mp3",
  "Iniciar Ficha de Visita. Toque no botão 'Registrar Visita' no perfil do cidadão.": "passos/g11_step2.mp3",
  "Marcar Motivos e Ações. Selecione os motivos da visita e ações realizadas no momento.": "passos/g11_step3.mp3",
  "Salvar Visita. Confirme o desfecho como 'Visita Realizada' e toque em Salvar.": "passos/g11_step4.mp3",

  // G21 - Acompanhamento de Pré-natal
  "Identificar Gestante. Confirme a suspeita de gravidez e a data da última menstruação (DUM).": "passos/g21_step1.mp3",
  "Ficha de Cadastro. Atualize a ficha individual marcando a opção 'Gestante'.": "passos/g21_step2.mp3",
  "Agendar Consulta. Encaminhe para a primeira consulta de pré-natal na UBS.": "passos/g21_step3.mp3",
  "Caderneta. Verifique se a gestante já possui e está utilizando a Caderneta da Gestante.": "passos/g21_step4.mp3",

  // G22 - Acompanhamento Hiperdia
  "Aferição. Se habilitado, auxilie na aferição de PA ou acompanhe o relato dos valores.": "passos/g22_step1.mp3",
  "Medicação. Questione sobre o uso regular dos medicamentos prescritos.": "passos/g22_step2.mp3",
  "Sinais de Alerta. Observe edemas, tonturas ou feridas que não cicatrizam (em diabéticos).": "passos/g22_step3.mp3",
  "Registro e-SUS. Marque o acompanhamento de 'Hipertensão' ou 'Diabetes' na ficha de visita.": "passos/g22_step4.mp3",

  // G23 - Acompanhamento Bolsa Família
  "Identificar Beneficiário. Localize as famílias que recebem o benefício na sua lista.": "passos/g23_step1.mp3",
  "Pesagem e Estatura. Realize ou encaminhe para a coleta de medidas antropométricas.": "passos/g23_step2.mp3",
  "Vacinação. Verifique se o calendário vacinal das crianças está em dia.": "passos/g23_step3.mp3",
  "Mapa de Acompanhamento. Lance os dados no sistema ou preencha o mapa físico do Bolsa Família.": "passos/g23_step4.mp3",

  // G24 - Visita ao Recém-nascido (Cuidados)
  "Teste do Pezinho. Verifique se o teste foi realizado entre o 3º e o 5º dia.": "passos/g24_step1.mp3",
  "Coto Umbilical. Oriente sobre a limpeza com álcool 70% e observe sinais de infecção.": "passos/g24_step2.mp3",
  "Amamentação. Observe a pega e oriente sobre o aleitamento materno exclusivo.": "passos/g24_step3.mp3",
  "Agendamento. Garanta que a primeira consulta de puericultura esteja marcada na UBS.": "passos/g24_step4.mp3",

  // G25 - Prevenção de Arboviroses
  "Inspeção de Quintal. Procure por recipientes que acumulem água parada.": "passos/g25_step1.mp3",
  "Vedação de Caixas. Verifique se as caixas d'água estão devidamente tampadas.": "passos/g25_step2.mp3",
  "Sinais e Sintomas. Oriente a família sobre febre alta, dores no corpo e manchas vermelhas.": "passos/g25_step3.mp3",
  "Registro de Foco. Caso encontre larvas, notifique imediatamente a equipe de endemias.": "passos/g25_step4.mp3",

  // G26 - Saúde Mental na Comunidade
  "Escuta Qualificada. Dê espaço para o cidadão falar sobre seus sentimentos sem julgamentos.": "passos/g26_step1.mp3",
  "Identificar Crise. Observe sinais de isolamento, choro frequente ou ideação suicida.": "passos/g26_step2.mp3",
  "Rede de Apoio. Verifique se o paciente frequenta o CAPS ou se tem acompanhamento médico.": "passos/g26_step3.mp3",
  "Vínculo Familiar. Oriente a família sobre a importância do acolhimento no ambiente doméstico.": "passos/g26_step4.mp3",

  // G27 - Saúde do Idoso
  "Risco de Queda. Observe tapetes soltos, falta de corrimão e iluminação precária.": "passos/g27_step1.mp3",
  "Polifarmácia. Verifique se o idoso toma mais de 5 medicamentos e se há confusão nas doses.": "passos/g27_step2.mp3",
  "Caderneta do Idoso. Atualize os dados de saúde na Caderneta da Pessoa Idosa.": "passos/g27_step3.mp3",
  "Atividades Diárias. Avalie se o idoso consegue comer, tomar banho e se vestir sozinho.": "passos/g27_step4.mp3",

  // === MOTIVAÇÃO ===
  "\"Missão cumprida! O Ministério da Saúde agradece seu empenho. Você é a peça fundamental que leva o SUS para dentro da casa dos brasileiros. Seu trabalho de hoje garante um futuro com mais saúde para toda a sua comunidade. Orgulhe-se de ser ACS!\"":
    "motivacional/missao-cumprida.mp3",
  "Missão cumprida! O Ministério da Saúde agradece seu empenho. Você é a peça fundamental que leva o SUS para dentro da casa dos brasileiros. Seu trabalho de hoje garante um futuro com mais saúde para toda a sua comunidade. Orgulhe-se de ser ACS!":
    "motivacional/missao-cumprida.mp3",

  "\"Seu trabalho salva vidas todos os dias.\"": "motivacional/msg1.mp3",
  "Seu trabalho salva vidas todos os dias.": "motivacional/msg1.mp3",

  "\"Você é o elo fundamental entre a comunidade e a saúde.\"": "motivacional/msg2.mp3",
  "Você é o elo fundamental entre a comunidade e a saúde.": "motivacional/msg2.mp3",

  "\"Cada cadastro é uma história que você ajuda a cuidar.\"": "motivacional/msg3.mp3",
  "Cada cadastro é uma história que você ajuda a cuidar.": "motivacional/msg3.mp3",

  "\"Obrigado por sua dedicação à saúde pública brasileira.\"": "motivacional/msg4.mp3",
  "Obrigado por sua dedicação à saúde pública brasileira.": "motivacional/msg4.mp3",

  "\"Sua presença na casa das pessoas traz esperança e cuidado.\"": "motivacional/msg5.mp3",
  "Sua presença na casa das pessoas traz esperança e cuidado.": "motivacional/msg5.mp3",

  "\"O SUS acontece através das suas mãos e dos seus pés no campo.\"": "motivacional/msg6.mp3",
  "O SUS acontece através das suas mãos e dos seus pés no campo.": "motivacional/msg6.mp3",
};

/**
 * Obtém o caminho do arquivo de áudio para um texto
 * Se não encontrar um mapeamento exato, tenta variações
 * @param text - Texto para buscar
 * @returns Caminho do arquivo de áudio ou null se não encontrado
 */
export const getAudioPath = (text: string): string | null => {
  if (!text) return null;

  // Busca exata
  if (audioMappings[text]) {
    return audioMappings[text];
  }

  // Busca sem aspas externas
  const unquoted = text.replace(/^"(.*)"$/, '$1').trim();
  if (audioMappings[unquoted]) {
    return audioMappings[unquoted];
  }

  // Busca parcial refinada
  const lowerText = text.toLowerCase().trim();
  for (const [key, path] of Object.entries(audioMappings)) {
    const lowerKey = key.toLowerCase().trim();
    if (lowerKey === lowerText) {
      return path;
    }
  }

  return null;
};

/**
 * Registra um novo mapeamento de texto para áudio
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
