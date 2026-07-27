import { Guide, Manual, Intent, Category } from '../types';

export const GUIDES: Guide[] = [
  {
    id: "g1",
    slug: "cadastrar-familia",
    title: "Cadastrar Nova Família",
    category: "Cadastro",
    summary: "Guia passo a passo para realizar o cadastro completo de uma nova família no e-SUS Território.",
    steps: [
      { id: 1, title: "Acesse o Território", description: "Abra o aplicativo e-SUS Território no seu tablet ou celular." },
      { id: 2, title: "Novo Domicílio", description: "Toque no ícone '+' e selecione 'Adicionar Domicílio'." },
      { id: 3, title: "Dados da Família", description: "Preencha as informações do responsável familiar primeiro." },
      { id: 4, title: "Membros", description: "Adicione os demais membros vinculando-os ao responsável." },
      { id: 5, title: "Sincronizar", description: "Ao finalizar, não esqueça de sincronizar os dados com a base." }
    ]
  },
  {
    id: "g2",
    slug: "visita-domiciliar",
    title: "Registrar Visita Domiciliar",
    category: "Visitas",
    summary: "Como registrar corretamente uma visita de rotina ou busca ativa.",
    steps: [
      { id: 1, title: "Localizar Família", description: "Busque a família ou indivíduo na sua lista de microárea." },
      { id: 2, title: "Iniciar Visita", description: "Toque no botão 'Registrar Visita' dentro da ficha do cidadão." },
      { id: 3, title: "Motivo da Visita", description: "Selecione o motivo (Ex: Acompanhamento, Egresso de Hospital)." },
      { id: 4, title: "Desfecho", description: "Marque se a visita foi realizada, recusada ou se o morador estava ausente." }
    ]
  },
  {
    id: "g3",
    slug: "e-sus-problemas",
    title: "Problemas no e-SUS",
    category: "Suporte Técnico",
    summary: "Resolução de erros comuns de sincronização e login.",
    steps: [
      { id: 1, title: "Verificar Conexão", description: "Certifique-se de que o Wi-Fi ou dados móveis estão ativos." },
      { id: 2, title: "Limpar Cache", description: "Vá nas configurações do Android > Apps > e-SUS > Limpar Cache." },
      { id: 3, title: "Versão do App", description: "Verifique na Play Store se há atualizações pendentes." }
    ]
  },
  {
    id: "g4",
    slug: "pre-natal",
    title: "Acompanhamento de Pré-natal",
    category: "Materno-Infantil",
    summary: "Rotina de captação e acompanhamento de gestantes na comunidade.",
    steps: [
      { id: 1, title: "Identificar Gestante", description: "Confirme a suspeita de gravidez e a data da última menstruação (DUM)." },
      { id: 2, title: "Ficha de Cadastro", description: "Atualize a ficha individual marcando a opção 'Gestante'." },
      { id: 3, title: "Agendar Consulta", description: "Encaminhe para a primeira consulta de pré-natal na UBS." },
      { id: 4, title: "Caderneta", description: "Verifique se a gestante já possui e está utilizando a Caderneta da Gestante." }
    ]
  },
  {
    id: "g5",
    slug: "hiperdia",
    title: "Acompanhamento Hiperdia",
    category: "Doenças Crônicas",
    summary: "Monitoramento de hipertensos e diabéticos durante as visitas.",
    steps: [
      { id: 1, title: "Aferição", description: "Se habilitado, auxilie na aferição de PA ou acompanhe o relato dos valores." },
      { id: 2, title: "Medicação", description: "Questione sobre o uso regular dos medicamentos prescritos." },
      { id: 3, title: "Sinais de Alerta", description: "Observe edemas, tonturas ou feridas que não cicatrizam (em diabéticos)." },
      { id: 4, title: "Registro e-SUS", description: "Marque o acompanhamento de 'Hipertensão' ou 'Diabetes' na ficha de visita." }
    ]
  },
  {
    id: "g6",
    slug: "bolsa-familia",
    title: "Acompanhamento Bolsa Família",
    category: "Programas Sociais",
    summary: "Cumprimento das condicionalidades de saúde do programa.",
    steps: [
      { id: 1, title: "Identificar Beneficiário", description: "Localize as famílias que recebem o benefício na sua lista." },
      { id: 2, title: "Pesagem e Estatura", description: "Realize ou encaminhe para a coleta de medidas antropométricas." },
      { id: 3, title: "Vacinação", description: "Verifique se o calendário vacinal das crianças está em dia." },
      { id: 4, title: "Mapa de Acompanhamento", description: "Lance os dados no sistema ou preencha o mapa físico do Bolsa Família." }
    ]
  },
  {
    id: "g7",
    slug: "visita-recem-nascido",
    title: "Visita ao Recém-nascido",
    category: "Materno-Infantil",
    summary: "Primeira visita após o nascimento (até o 5º dia de vida).",
    steps: [
      { id: 1, title: "Teste do Pezinho", description: "Verifique se o teste foi realizado entre o 3º e o 5º dia." },
      { id: 2, title: "Coto Umbilical", description: "Oriente sobre a limpeza com álcool 70% e observe sinais de infecção." },
      { id: 3, title: "Amamentação", description: "Observe a pega e oriente sobre o aleitamento materno exclusivo." },
      { id: 4, title: "Agendamento", description: "Garanta que a primeira consulta de puericultura esteja marcada na UBS." }
    ]
  },
  {
    id: "g8",
    slug: "combate-dengue",
    title: "Prevenção de Arboviroses",
    category: "Endemias",
    summary: "Ações de campo para controle de Dengue, Zika e Chikungunya.",
    steps: [
      { id: 1, title: "Inspeção de Quintal", description: "Procure por recipientes que acumulem água parada." },
      { id: 2, title: "Vedação de Caixas", description: "Verifique se as caixas d'água estão devidamente tampadas." },
      { id: 3, title: "Sinais e Sintomas", description: "Oriente a família sobre febre alta, dores no corpo e manchas vermelhas." },
      { id: 4, title: "Registro de Foco", description: "Caso encontre larvas, notifique imediatamente a equipe de endemias." }
    ]
  },
  {
    id: "g9",
    slug: "saude-mental",
    title: "Saúde Mental na Comunidade",
    category: "Saúde Mental",
    summary: "Apoio e identificação de sofrimento psíquico.",
    steps: [
      { id: 1, title: "Escuta Qualificada", description: "Dê espaço para o cidadão falar sobre seus sentimentos sem julgamentos." },
      { id: 2, title: "Identificar Crise", description: "Observe sinais de isolamento, choro frequente ou ideação suicida." },
      { id: 3, title: "Rede de Apoio", description: "Verifique se o paciente frequenta o CAPS ou se tem acompanhamento médico." },
      { id: 4, title: "Vínculo Familiar", description: "Oriente a família sobre a importância do acolhimento no ambiente doméstico." }
    ]
  },
  {
    id: "g10",
    slug: "atualizar-cadastro",
    title: "Atualizar Dados Cadastrais",
    category: "Cadastro",
    summary: "Como proceder quando o cidadão muda de endereço ou telefone.",
    steps: [
      { id: 1, title: "Localizar Cadastro", description: "Busque pelo CPF ou CNS no e-SUS Território." },
      { id: 2, title: "Editar Ficha", description: "Toque no ícone de lápis para abrir a edição da ficha individual." },
      { id: 3, title: "Campos Críticos", description: "Atualize telefone, endereço e a composição familiar (quem saiu/entrou)." },
      { id: 4, title: "Finalizar", description: "Salve e sincronize para que a UBS receba os dados atualizados." }
    ]
  },
  {
    id: "g11",
    slug: "saude-idoso",
    title: "Saúde do Idoso",
    category: "Ciclos de Vida",
    summary: "Avaliação de fragilidade e riscos no domicílio do idoso.",
    steps: [
      { id: 1, title: "Risco de Queda", description: "Observe tapetes soltos, falta de corrimão e iluminação precária." },
      { id: 2, title: "Polifarmácia", description: "Verifique se o idoso toma mais de 5 medicamentos e se há confusão nas doses." },
      { id: 3, title: "Caderneta do Idoso", description: "Atualize os dados de saúde na Caderneta da Pessoa Idosa." },
      { id: 4, title: "Atividades Diárias", description: "Avalie se o idoso consegue comer, tomar banho e se vestir sozinho." }
    ]
  },
  {
    id: "g12",
    slug: "vacinacao-atraso",
    title: "Vacinação em Atraso",
    category: "Imunização",
    summary: "Como proceder ao identificar crianças com vacinas pendentes.",
    steps: [
      { id: 1, title: "Conferir Caderneta", description: "Compare as vacinas tomadas com o calendário nacional vigente." },
      { id: 2, title: "Identificar Faltosas", description: "Anote quais doses estão atrasadas (Ex: Penta, VIP/VOP, SCR)." },
      { id: 3, title: "Orientar Família", description: "Explique a importância da proteção e os riscos das doenças." },
      { id: 4, title: "Encaminhamento", description: "Direcione a família imediatamente à sala de vacina da UBS de referência." }
    ]
  },
  {
    id: "g13",
    slug: "planejamento-familiar",
    title: "Planejamento Familiar",
    category: "Saúde Sexual",
    summary: "Orientações sobre métodos contraceptivos e saúde reprodutiva.",
    steps: [
      { id: 1, title: "Abordagem", description: "Inicie a conversa sobre o desejo de ter filhos ou evitar gravidez no momento." },
      { id: 2, title: "Métodos Disponíveis", description: "Informe sobre camisinha, pílula, injetável, DIU e métodos definitivos no SUS." },
      { id: 3, title: "Grupo de Apoio", description: "Convide o casal para as reuniões de planejamento familiar na unidade." },
      { id: 4, title: "Distribuição", description: "Lembre que preservativos podem ser retirados livremente na UBS." }
    ]
  },
  {
    id: "g14",
    slug: "puerperio",
    title: "Cuidados no Puerpério",
    category: "Materno-Infantil",
    summary: "Acompanhamento da saúde da mulher após o parto.",
    steps: [
      { id: 1, title: "Sinais de Infecção", description: "Observe febre, dor intensa ou sangramento com odor forte (loquiação)." },
      { id: 2, title: "Saúde Mental", description: "Identifique sinais de tristeza profunda ou desinteresse pelo bebê (Depressão Pós-parto)." },
      { id: 3, title: "Exame Ginecológico", description: "Garanta que a consulta de revisão (42 dias) esteja agendada." },
      { id: 4, title: "Amamentação", description: "Avalie a saúde das mamas (fissuras ou mastite) e apoie a puérpera." }
    ]
  },
  {
    id: "g15",
    slug: "busca-ativa-tb-hanseniase",
    title: "Sintomáticos Respiratórios e Pele",
    category: "Doenças Crônicas",
    summary: "Busca ativa de Tuberculose e Hanseníase no território.",
    steps: [
      { id: 1, title: "Identificar Tosse", description: "Questione sobre tosse por 3 semanas ou mais (Tuberculose)." },
      { id: 2, title: "Manchas na Pele", description: "Observe manchas claras ou avermelhadas com perda de sensibilidade (Hanseníase)." },
      { id: 3, title: "Contatos Próximos", description: "Identifique se familiares de casos confirmados estão sendo avaliados." },
      { id: 4, title: "Encaminhamento", description: "Direcione para coleta de escarro ou avaliação médica na UBS." }
    ]
  },
  {
    id: "g16",
    slug: "saude-bucal",
    title: "Orientações de Saúde Bucal",
    category: "Prevenção",
    summary: "Promoção da higiene oral e identificação de lesões.",
    steps: [
      { id: 1, title: "Higiene Diária", description: "Oriente sobre escovação após as refeições e uso do fio dental." },
      { id: 2, title: "Bebês e Crianças", description: "Explique que a limpeza deve começar antes mesmo dos primeiros dentes." },
      { id: 3, title: "Lesões Suspeitas", description: "Observe feridas na boca que não cicatrizam em 15 dias (risco de câncer)." },
      { id: 4, title: "Próteses", description: "Oriente idosos sobre a limpeza correta e retirada da dentadura para dormir." }
    ]
  },
  {
    id: "g17",
    slug: "identificar-violencia",
    title: "Identificação de Violência",
    category: "Social",
    summary: "Como agir em casos suspeitos de violência doméstica ou infantil.",
    steps: [
      { id: 1, title: "Sinais Físicos", description: "Observe hematomas em locais incomuns ou marcas de queimadura." },
      { id: 2, title: "Comportamento", description: "Note isolamento repentino, medo excessivo ou regressão no desenvolvimento." },
      { id: 3, title: "Escuta Protegida", description: "Não force o relato; acolha o que for dito voluntariamente." },
      { id: 4, title: "Notificação", description: "Informe imediatamente à sua enfermeira supervisora para conduta sigilosa." }
    ]
  },
  {
    id: "g18",
    slug: "riscos-ambientais",
    title: "Saneamento e Meio Ambiente",
    category: "Endemias",
    summary: "Vigilância de riscos no entorno do domicílio.",
    steps: [
      { id: 1, title: "Água e Esgoto", description: "Verifique a origem da água e o destino dos dejetos (fossa ou rede)." },
      { id: 2, title: "Lixo e Entulho", description: "Oriente sobre o descarte correto para evitar ratos e escorpiões." },
      { id: 3, title: "Animais Sinantrópicos", description: "Observe presença de morcegos, barbeiros ou caramujos africanos." },
      { id: 4, title: "Manejo Ambiental", description: "Sugira soluções simples como telar ralos e manter quintais limpos." }
    ]
  },
  {
    id: "g19",
    slug: "cuidados-paliativos",
    title: "Apoio em Cuidados Paliativos",
    category: "Saúde",
    summary: "Acompanhamento de pacientes com doenças graves em terminalidade.",
    steps: [
      { id: 1, title: "Conforto e Dor", description: "Pergunte sobre a intensidade da dor e se a medicação está aliviando." },
      { id: 2, title: "Prevenção de Lesões", description: "Oriente a família sobre a mudança de decúbito (virar o paciente) a cada 2h." },
      { id: 3, title: "Higiene e Nutrição", description: "Auxilie com dicas para banho no leito e alimentação pastosa/líquida." },
      { id: 4, title: "Apoio ao Cuidador", description: "Observe se o cuidador está exausto e ofereça escuta emocional." }
    ]
  },
  {
    id: "g20",
    slug: "mordedura-animais",
    title: "Mordedura e Raiva Humana",
    category: "Urgências",
    summary: "Primeiros cuidados após ataques de animais.",
    steps: [
      { id: 1, title: "Lavagem Imediata", description: "Oriente lavar o ferimento abundantemente com água e sabão." },
      { id: 2, title: "Dados do Animal", description: "Identifique se o animal é conhecido e pode ser observado por 10 dias." },
      { id: 3, title: "Encaminhamento Rápido", description: "Envie o paciente à UBS para avaliar a necessidade de vacina ou soro." },
      { id: 4, title: "Notificação", description: "Registre o caso de agressão por animal no sistema de vigilância." }
    ]
  },
  {
    id: "g21",
    slug: "saude-homem",
    title: "Saúde do Homem",
    category: "Ciclos de Vida",
    summary: "Ações de prevenção e rastreamento para a população masculina.",
    steps: [
      { id: 1, title: "Rastreamento", description: "Oriente sobre a importância dos exames de rotina (PA, glicemia, colesterol)." },
      { id: 2, title: "Prevenção de Câncer", description: "Fale sobre o câncer de próstata e pênis (higiene e sinais de alerta)." },
      { id: 3, title: "Saúde Sexual", description: "Aborde o uso de preservativos e o teste rápido para ISTs." },
      { id: 4, title: "Acesso à UBS", description: "Estimule o comparecimento à unidade, mesmo sem sintomas agudos." }
    ]
  },
  {
    id: "g22",
    slug: "reducao-danos",
    title: "Álcool e Drogas (Redução de Danos)",
    category: "Saúde Mental",
    summary: "Apoio e orientações para usuários de substâncias.",
    steps: [
      { id: 1, title: "Vínculo e Escuta", description: "Aproxime-se sem julgamentos para entender o padrão de uso." },
      { id: 2, title: "Hidratação e Alimentação", description: "Oriente sobre cuidados básicos para diminuir o impacto físico." },
      { id: 3, title: "Rede de Cuidado", description: "Informe sobre o CAPS AD e grupos de apoio na comunidade." },
      { id: 4, title: "Segurança", description: "Em caso de overdose ou abstinência grave, saiba como acionar o SAMU." }
    ]
  },
  {
    id: "g23",
    slug: "prevencao-cancer",
    title: "Prevenção de Câncer Feminino",
    category: "Prevenção",
    summary: "Orientações sobre Papanicolau e Mamografia.",
    steps: [
      { id: 1, title: "Autoexame", description: "Ensine a mulher a observar as mamas e identificar alterações." },
      { id: 2, title: "Preventivo", description: "Verifique se o Papanicolau está em dia (recomendado a cada 1 a 3 anos)." },
      { id: 3, title: "Critérios de Idade", description: "Oriente sobre a mamografia para mulheres entre 50 e 69 anos." },
      { id: 4, title: "Encaminhamento", description: "Agende ou direcione para a coleta na Unidade de Saúde." }
    ]
  },
  {
    id: "g24",
    slug: "sintomas-gripais",
    title: "Sintomas Gripais e COVID",
    category: "Urgências",
    summary: "Como agir em casos de febre, tosse e falta de ar.",
    steps: [
      { id: 1, title: "Isolamento", description: "Oriente o afastamento de outras pessoas e o uso de máscara em casa." },
      { id: 2, title: "Sinais de Gravidade", description: "Monitore se há falta de ar, cansaço extremo ou febre persistente." },
      { id: 3, title: "Testagem", description: "Informe sobre onde e quando realizar o teste (COVID ou Influenza)." },
      { id: 4, title: "Notificação", description: "Registre o caso como suspeito na planilha de monitoramento da equipe." }
    ]
  },
  {
    id: "g25",
    slug: "desenvolvimento-infantil",
    title: "Desenvolvimento Infantil",
    category: "Ciclos de Vida",
    summary: "Marcos de crescimento e aprendizagem da criança.",
    steps: [
      { id: 1, title: "Puericultura", description: "Verifique se as consultas de rotina no médico/enfermeiro estão em dia." },
      { id: 2, title: "Marcos Motores", description: "Observe se a criança já senta, engatinha ou anda conforme a idade." },
      { id: 3, title: "Linguagem", description: "Note se a criança interage, balbucia ou já fala palavras simples." },
      { id: 4, title: "Estímulos", description: "Oriente os pais sobre a importância de brincar e conversar com o bebê." }
    ]
  }
];

export const INTENTS: Intent[] = [
  { id: "i1", title: "Cadastrar família", keywords: ["família", "familia", "cadastrar", "novo cadastro", "casa nova"], guideId: "g1", confirmationPhrase: "Entendi. Você quer saber como cadastrar família. Posso continuar para o guia?" },
  { id: "i2", title: "Registrar visita", keywords: ["visita", "visitar", "atendimento", "casa", "domiciliar"], guideId: "g2", confirmationPhrase: "Entendi. Você quer saber como registrar visita. Posso continuar para o guia?" },
  { id: "i3", title: "Erro no e-SUS", keywords: ["erro", "problema", "nao funciona", "sincronizar", "trava", "sus", "esus"], guideId: "g3", confirmationPhrase: "Entendi. Você quer saber como resolver erro no e-SUS. Posso continuar para o guia?" },
  { id: "i4", title: "Pré-natal", keywords: ["gestante", "grávida", "gravida", "gravidez", "prenatal", "pré-natal", "buchuda", "neném", "bebê"], guideId: "g4", confirmationPhrase: "Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?" },
  { id: "i5", title: "Hiperdia", keywords: ["pressão", "diabetes", "açúcar", "hipertenso", "diabético", "hiperdia", "insulina", "remédio"], guideId: "g5", confirmationPhrase: "Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?" },
  { id: "i6", title: "Bolsa Família", keywords: ["bolsa família", "bolsa familia", "pesagem", "peso", "medir", "benefício", "auxílio", "pobreza"], guideId: "g6", confirmationPhrase: "Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?" },
  { id: "i7", title: "Recém-nascido", keywords: ["bebê", "rn", "recém-nascido", "umbigo", "pezinho", "puerpério", "nasceu", "maternidade"], guideId: "g7", confirmationPhrase: "Entendi. Você quer saber sobre a visita ao recém-nascido. Posso continuar para o guia?" },
  { id: "i8", title: "Dengue e Focos", keywords: ["dengue", "mosquito", "larva", "água parada", "quintal", "zika", "chikungunya", "febre"], guideId: "g8", confirmationPhrase: "Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?" },
  { id: "i9", title: "Saúde Mental", keywords: ["depressão", "tristeza", "ansiedade", "surto", "caps", "remédio controlado", "saúde mental", "sofrimento"], guideId: "g9", confirmationPhrase: "Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?" },
  { id: "i10", title: "Atualizar cadastro", keywords: ["mudou", "telefone", "endereço", "trocou", "atualizar", "mudar", "corrigir"], guideId: "g10", confirmationPhrase: "Entendi. Você quer saber como atualizar cadastro. Posso continuar para o guia?" },
  { id: "i11", title: "Saúde do Idoso", keywords: ["velho", "vovó", "vovô", "idoso", "queda", "remédios", "esquecimento", "fragilidade"], guideId: "g11", confirmationPhrase: "Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?" },
  { id: "i12", title: "Vacina atrasada", keywords: ["vacina", "atrasada", "gotinha", "injeção", "calendário", "faltando", "imunização"], guideId: "g12", confirmationPhrase: "Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?" },
  { id: "i13", title: "Planejamento Familiar", keywords: ["filho", "evitar", "camisinha", "anticoncepcional", "laqueadura", "vasectomia", "diu"], guideId: "g13", confirmationPhrase: "Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?" },
  { id: "i14", title: "Pós-parto / Puerpério", keywords: ["pós-parto", "puerpério", "resguardo", "quarentena", "depressão pós-parto", "sangramento"], guideId: "g14", confirmationPhrase: "Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?" },
  { id: "i15", title: "TB e Hanseníase", keywords: ["tosse", "pulmão", "escarro", "mancha", "pele", "hanseníase", "tuberculose", "perda de força"], guideId: "g15", confirmationPhrase: "Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?" },
  { id: "i16", title: "Saúde Bucal", keywords: ["dente", "boca", "limpeza", "escova", "ferida na boca", "dentadura", "prótese", "gengiva"], guideId: "g16", confirmationPhrase: "Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?" },
  { id: "i17", title: "Violência", keywords: ["apanhou", "violência", "bater", "abuso", "hematoma", "medo", "agressão", "doméstica"], guideId: "g17", confirmationPhrase: "Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?" },
  { id: "i18", title: "Riscos Ambientais", keywords: ["lixo", "esgoto", "água", "rato", "escorpião", "entulho", "fossa", "poluição"], guideId: "g18", confirmationPhrase: "Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?" },
  { id: "i19", title: "Cuidados Paliativos", keywords: ["cama", "leito", "morrer", "terminal", "câncer", "ferida", "conforto", "paliativo"], guideId: "g19", confirmationPhrase: "Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?" },
  { id: "i20", title: "Mordida de Animal", keywords: ["mordida", "cachorro", "gato", "morcego", "raiva", "animal", "ferimento", "vacina raiva"], guideId: "g20", confirmationPhrase: "Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?" },
  { id: "i21", title: "Saúde do Homem", keywords: ["homem", "próstata", "novembro azul", "ereção", "exame homem", "masculino"], guideId: "g21", confirmationPhrase: "Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?" },
  { id: "i22", title: "Drogas e Álcool", keywords: ["bebida", "droga", "cachaça", "vício", "alcoolismo", "redução de danos", "fumando"], guideId: "g22", confirmationPhrase: "Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?" },
  { id: "i23", title: "Prevenção Câncer", keywords: ["preventivo", "papanicolau", "mama", "mamografia", "câncer de mama", "câncer de colo"], guideId: "g23", confirmationPhrase: "Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?" },
  { id: "i24", title: "Gripe e COVID", keywords: ["gripe", "covid", "tosse", "falta de ar", "resfriado", "corona", "catarro"], guideId: "g24", confirmationPhrase: "Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?" },
  { id: "i25", title: "Puericultura", keywords: ["desenvolvimento", "crescer", "puericultura", "aprendizado", "marcos", "sentar", "falar"], guideId: "g25", confirmationPhrase: "Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?" }
];

export const CATEGORIES: Category[] = [
  { id: "c1", title: "Cadastro e Visitas", icon: "UserPlus", intents: ["i1", "i2", "i10"] },
  { id: "c2", title: "Saúde Materno-Infantil", icon: "Home", intents: ["i4", "i7", "i14", "i25"] },
  { id: "c3", title: "Doenças e Endemias", icon: "Tablet", intents: ["i5", "i8", "i15", "i18", "i20", "i24"] },
  { id: "c4", title: "Social e Mental", icon: "FileText", intents: ["i6", "i9", "i17", "i22"] },
  { id: "c5", title: "Ciclos e Prevenção", icon: "FileText", intents: ["i11", "i12", "i13", "i16", "i19", "i21", "i23"] },
  { id: "c6", title: "Suporte e-SUS", icon: "Tablet", intents: ["i3"] }
];

export const MANUALS: Manual[] = [
  { id: "m1", title: "Manual e-SUS Território v4.1", description: "Guia oficial do Ministério da Saúde para o uso do aplicativo.", fileSize: "4.2 MB", category: "Oficial" },
  { id: "m2", title: "Atribuições do ACS", description: "Documento com as competências legais e rotinas de campo.", fileSize: "1.8 MB", category: "Carreira" },
  { id: "m3", title: "Guia de Vacinação 2024", description: "Calendário nacional e orientações de busca ativa.", fileSize: "2.5 MB", category: "Saúde" },
  { id: "m4", title: "Protocolo de Dengue 2024", description: "Diretrizes para manejo clínico e controle vetorial.", fileSize: "3.1 MB", category: "Endemias" }
];

export const MOTIVATIONAL_MESSAGES = [
  "Seu trabalho salva vidas todos os dias.",
  "Você é o elo fundamental entre a comunidade e a saúde.",
  "Cada cadastro é uma história que você ajuda a cuidar.",
  "Obrigado por sua dedicação à saúde pública brasileira.",
  "Sua presença na casa das pessoas traz esperança e cuidado.",
  "O SUS acontece através das suas mãos e dos seus pés no campo.",
  "Oxente, você é porreta demais! Mais uma tarefa concluída.",
  "Eita que deu certo! Missão cumprida com sucesso.",
  "Arretado (a)! Você acaba de ter mais uma visita registrada.",
  "Tá fazendo bonito no território, viu?. Parabéns.",
  "É disso que o povo gosta! Meta alcançada.",
  "Bora cuidar que ainda tem chão, mas você tá no rumo certo.",
  "Tá deixando tudo nos trinques.",
  "Se organização fosse forró, você era o sanfoneiro."
];