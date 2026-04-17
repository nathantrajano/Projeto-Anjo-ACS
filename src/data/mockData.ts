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
    category: "Saúde da Mulher",
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
  }
];

export const INTENTS: Intent[] = [
  { id: "i1", title: "Cadastrar família", keywords: ["família", "familia", "cadastrar", "novo cadastro", "casa nova"], guideId: "g1" },
  { id: "i2", title: "Registrar visita", keywords: ["visita", "visitar", "atendimento", "casa", "domiciliar"], guideId: "g2" },
  { id: "i3", title: "Erro no e-SUS", keywords: ["erro", "problema", "nao funciona", "sincronizar", "trava", "sus", "esus"], guideId: "g3" },
  { id: "i4", title: "Pré-natal", keywords: ["gestante", "grávida", "gravida", "gravidez", "prenatal", "pré-natal", "buchuda", "neném", "bebê"], guideId: "g4" },
  { id: "i5", title: "Hiperdia", keywords: ["pressão", "diabetes", "açúcar", "hipertenso", "diabético", "hiperdia", "insulina", "remédio"], guideId: "g5" },
  { id: "i6", title: "Bolsa Família", keywords: ["bolsa família", "bolsa familia", "pesagem", "peso", "medir", "benefício", "auxílio", "pobreza"], guideId: "g6" }
];

export const CATEGORIES: Category[] = [
  { id: "c1", title: "Cadastro e Visitas", icon: "UserPlus", intents: ["i1", "i2"] },
  { id: "c2", title: "Programas de Saúde", icon: "Home", intents: ["i4", "i5"] },
  { id: "c3", title: "Programas Sociais", icon: "FileText", intents: ["i6"] },
  { id: "c4", title: "Suporte e-SUS", icon: "Tablet", intents: ["i3"] }
];

export const MANUALS: Manual[] = [
  { id: "m1", title: "Manual e-SUS Território v4.1", description: "Guia oficial do Ministério da Saúde para o uso do aplicativo.", fileSize: "4.2 MB", category: "Oficial" },
  { id: "m2", title: "Atribuições do ACS", description: "Documento com as competências legais e rotinas de campo.", fileSize: "1.8 MB", category: "Carreira" },
  { id: "m3", title: "Guia de Vacinação 2024", description: "Calendário nacional e orientações de busca ativa.", fileSize: "2.5 MB", category: "Saúde" }
];

export const MOTIVATIONAL_MESSAGES = [
  "Seu trabalho salva vidas todos os dias.",
  "Você é o elo fundamental entre a comunidade e a saúde.",
  "Cada cadastro é uma história que você ajuda a cuidar.",
  "Obrigado por sua dedicação à saúde pública brasileira."
];