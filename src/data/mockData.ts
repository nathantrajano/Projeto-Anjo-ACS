import { Guide, Manual, Intent, Category } from '../types';

export const GUIDES: Guide[] = [
  // ==========================================
  // GUIAS 1 A 20: 20 PERGUNTAS MAIS PROVÁVEIS DO ACS (CONFORME DOCUMENTO ANJO ACS)
  // ==========================================

  // 1. Cadastro de Domicílio
  {
    id: "g1",
    slug: "cadastrar-casa-nova",
    title: "Cadastrar Casa Nova no Sistema",
    category: "Cadastro de Domicílio",
    summary: "Passo a passo para realizar o cadastro inicial de um novo domicílio no e-SUS Território.",
    steps: [
      { id: 1, title: "Acesse o Território", description: "Abra o aplicativo e-SUS Território no tablet e selecione a aba Domicílios.", image: "/images/guides/g1/g1-passo1.jpg", visualTip: "Toque no ícone oficial do e-SUS Território e vá no menu de Domicílios." },
      { id: 2, title: "Novo Domicílio", description: "Toque no botão '+' e selecione a opção 'Adicionar Domicílio'.", image: "/images/guides/g1/g1-passo2.jpg", visualTip: "Clique no botão verde de adição '+' no canto inferior da tela." },
      { id: 3, title: "Endereço e Número", description: "Informe o CEP, logradouro, número do imóvel e complemento se houver.", image: "/images/guides/g1/g1-passo3.jpg", visualTip: "Confira se o nome da rua coincide com o mapa oficial da microárea." },
      { id: 4, title: "Características do Imóvel", description: "Preencha o tipo de imóvel, abastecimento de água e destino do lixo.", image: "/images/guides/g1/g1-passo4.png", visualTip: "Marque as condições habitacionais observadas no local." },
      { id: 5, title: "Salvar Cadastro", description: "Confirme os dados e toque em Salvar para registrar o domicílio na base local.", image: "/images/guides/g1/g1-passo5.jpg", visualTip: "Certifique-se de que a mensagem de sucesso seja exibida." }
    ]
  },
  {
    id: "g2",
    slug: "verificar-duplicacao-domicilio",
    title: "Verificar Duplicação de Domicílio",
    category: "Cadastro de Domicílio",
    summary: "Como checar se uma casa já foi cadastrada antes de criar um novo registro no e-SUS.",
    steps: [
      { id: 1, title: "Pesquisar Endereço", description: "Na aba Domicílios, use a barra de busca e digite o nome da rua e o número da casa.", image: "/images/guides/g2/g2-passo1.jpg", visualTip: "Digite o número exato do imóvel na barra de pesquisa no topo." },
      { id: 2, title: "Conferir Complemento", description: "Verifique se o imóvel possui complementos como casa A, casa B ou bloco.", image: "/images/guides/g2/g2-passo2.jpg", visualTip: "Confira se o número do imóvel tem diferenciação por letra ou bloco." },
      { id: 3, title: "Consultar Lista da Microárea", description: "Filtre a busca pela sua microárea para listar todas as casas da quadra.", image: "/images/guides/g2/g2-passo3.jpg", visualTip: "Selecione o filtro por microárea para visualizar os vizinhos." },
      { id: 4, title: "Confirmar Antes de Criar", description: "Se a casa já aparecer na lista, abra a ficha existente em vez de cadastrar novamente.", visualTip: "Evite cadastrar duas vezes a mesma casa no sistema." }
    ]
  },
  {
    id: "g3",
    slug: "corrigir-erro-endereco-cep",
    title: "Corrigir Erro de Endereço ou CEP",
    category: "Cadastro de Domicílio",
    summary: "O que fazer quando a rua, o bairro ou o CEP não aparecem corretamente no aplicativo.",
    steps: [
      { id: 1, title: "Buscar por Nome Similar", description: "Digite parte do nome da rua na busca de logradouro para localizar a grafia cadastrada.", image: "/images/guides/g3/g3-passo1.jpg", visualTip: "Digite apenas o nome principal da rua sem o termo 'Rua' ou 'Avenida'." },
      { id: 2, title: "Usar CEP Geral do Município", description: "Se o CEP específico não funcionar, tente o CEP geral da cidade cadastrado na UBS.", visualTip: "Consulte o código de CEP de referência da sua equipe de saúde." },
      { id: 3, title: "Editar Ficha de Domicílio", description: "Se o erro for em casa existente, abra o domicílio e toque no lápis para atualizar o endereço.", image: "/images/guides/g3/g3-passo3.jpg", visualTip: "Clique no ícone de lápis de edição no cabeçalho da ficha do imóvel." },
      { id: 4, title: "Anotar Logradouro Ausente", description: "Caso a rua não exista na lista oficial, anote e informe à coordenação para atualização da base.", visualTip: "Repasse o nome correto da rua nova à supervisão da UBS." }
    ]
  },

  // 2. Cadastro de Moradores
  {
    id: "g4",
    slug: "cadastrar-morador-domicilio",
    title: "Cadastrar Morador no Domicílio",
    category: "Cadastro de Moradores",
    summary: "Passo a passo para incluir e vincular um novo morador a um domicílio já existente.",
    steps: [
      { id: 1, title: "Abrir o Domicílio", description: "Localize a casa no aplicativo e toque na ficha do domicílio correspondente.", image: "/images/guides/g4/g4-passo1.jpg", visualTip: "Selecione o cartão da casa na sua lista de imóveis." },
      { id: 2, title: "Adicionar Morador", description: "Toque na opção 'Adicionar Família' ou 'Adicionar Morador' dentro da casa.", image: "/images/guides/g4/g4-passo2.jpg", visualTip: "Clique no botão de adição de moradores no rodapé da ficha." },
      { id: 3, title: "Preencher Dados Pessoais", description: "Insira nome completo, data de nascimento, sexo e nome da mãe.", image: "/images/guides/g4/g4-passo3.jpg", visualTip: "Digite os dados exatamente como constam no documento oficial." },
      { id: 4, title: "Vincular ao Responsável", description: "Defina o parentesco do morador em relação ao responsável familiar.", image: "/images/guides/g4/g4-passo4.jpg", visualTip: "Selecione a opção de parentesco correta no menu suspenso." },
      { id: 5, title: "Salvar Morador", description: "Confirme as informações e salve para concluir a inclusão do morador.", image: "/images/guides/g4/g4-passo5.jpg", visualTip: "Clique em Salvar no final do formulário." }
    ]
  },
  {
    id: "g5",
    slug: "cadastrar-morador-sem-cpf-cns",
    title: "Cadastrar Morador sem CPF ou CNS",
    category: "Cadastro de Moradores",
    summary: "Como cadastrar um cidadão que não possui CPF nem Cartão do SUS no momento da visita.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Prosseguir sem Documento", description: "Sim, é possível realizar o cadastro no e-SUS mesmo sem o CPF ou CNS do morador.", visualTip: "Avance no formulário deixando o campo de documento em branco se necessário." },
      { id: 2, title: "Usar CNS se Houver", description: "Se a pessoa não tiver CPF, verifique se ela possui o Cartão Nacional do SUS.", visualTip: "Digite a numeração de 15 dígitos do Cartão SUS se disponível." },
      { id: 3, title: "Preencher Nome e Nascimento", description: "Se não houver nenhum documento, registre com precisão o nome completo e a data de nascimento.", visualTip: "Preencha a data de nascimento e o nome da mãe completo." },
      { id: 4, title: "Solicitar Atualização Posterior", description: "Oriente a família a providenciar o documento e levar à unidade para atualizar depois.", visualTip: "Anote o compromisso de atualização no seu diário de campo." }
    ]
  },
  {
    id: "g6",
    slug: "verificar-duplicacao-cidadao",
    title: "Verificar Duplicação de Cidadão",
    category: "Cadastro de Moradores",
    summary: "Como buscar e confirmar se a pessoa já possui cadastro no sistema antes de criar outro.",
    steps: [
      { id: 1, title: "Buscar por CPF ou CNS", description: "Utilize o campo de busca digitando o CPF ou o número do Cartão SUS da pessoa.", image: "/images/guides/g6/g6-passo1.jpg", visualTip: "O CPF é a forma mais rápida e segura de localizar um cadastro existente." },
      { id: 2, title: "Buscar por Nome e Nascimento", description: "Se não tiver o documento, busque pelo nome completo e data de nascimento.", visualTip: "Digite o nome completo sem abreviações na caixa de busca." },
      { id: 3, title: "Conferir Nome da Mãe", description: "Compare o nome da mãe no cadastro encontrado para confirmar se é a mesma pessoa.", visualTip: "Verifique o nome da mãe para evitar confundir pessoas com nomes iguais." },
      { id: 4, title: "Vincular Cadastro Existente", description: "Se o cadastro for encontrado, apenas vincule a pessoa ao domicílio atual.", visualTip: "Evite duplicar registros atrelando a pessoa já existente ao endereço." }
    ]
  },
  {
    id: "g7",
    slug: "cadastrar-recem-nascido",
    title: "Cadastrar Recém-Nascido",
    category: "Cadastro de Moradores",
    summary: "Orientações para cadastrar um recém-nascido no e-SUS Território vinculando-o à família.",
    steps: [
      { id: 1, title: "Abrir a Ficha Familiar", description: "Acesse o domicílio cadastrado onde a mãe ou responsável reside.", image: "/images/guides/g7/g7-passo1.jpeg", visualTip: "Localize a casa da mãe da criança no aplicativo." },
      { id: 2, title: "Adicionar Novo Membro", description: "Toque em Adicionar Morador e selecione a opção de dependente ou filho.", image: "/images/guides/g7/g7-passo2.jpg", visualTip: "Clique no botão de adicionar membro da família." },
      { id: 3, title: "Preencher Registro de Nascimento", description: "Informe a data de nascimento, peso ao nascer e a Declaração de Nascido Vivo se houver.", image: "/images/guides/g7/g7-passo3.jpg", visualTip: "Insira os dados da certidão de nascimento ou da folha de alta da maternidade." },
      { id: 4, title: "Vincular à Mãe", description: "Selecione o cadastro da mãe no campo correspondente para garantir o vínculo.", image: "/images/guides/g7/g7-passo4.jpg", visualTip: "Marque a mãe cadastrada como responsável direta pelo bebê." },
      { id: 5, title: "Salvar e Agendar Visita", description: "Salve a ficha do recém-nascido e já programe a primeira visita de puericultura.", visualTip: "Confirme o registro e agende o acompanhamento neonatal." }
    ]
  },

  // 3. Atualização de Dados da Família
  {
    id: "g8",
    slug: "registrar-mudanca-morador",
    title: "Registrar Mudança de Morador (Saída)",
    category: "Atualização de Dados",
    summary: "Como atualizar o sistema quando um morador se muda do domicílio ou da microárea.",
    steps: [
      { id: 1, title: "Acesse o Cadastro do Cidadão", description: "Localize o morador dentro da ficha do domicílio atual.", image: "/images/guides/g8/g8-passo1.jpg", visualTip: "Abra a lista de moradores da casa correspondente." },
      { id: 2, title: "Opções do Morador", description: "Toque nos três pontinhos ou no ícone de edição ao lado do nome da pessoa.", image: "/images/guides/g8/g8-passo2.jpg", visualTip: "Clique no botão de opções ao lado do nome do cidadão." },
      { id: 3, title: "Selecionar Mudança de Território", description: "Escolha a opção 'Mudou-se' ou 'Saída do Domicílio'.", visualTip: "Selecione o motivo de saída 'Mudança de Território'." },
      { id: 4, title: "Confirmar Desvinculação", description: "Confirme a alteração para desvincular o morador daquela residência.", visualTip: "Toque em Confirmar para atualizar a composição familiar." }
    ]
  },
  {
    id: "g9",
    slug: "atualizar-novo-morador-familia",
    title: "Atualizar Novo Morador na Família",
    category: "Atualização de Dados",
    summary: "Passo a passo para incluir um morador recém-chegado à composição familiar.",
    steps: [
      { id: 1, title: "Localizar a Residência", description: "Abra a ficha da casa onde o novo morador passou a residir.", image: "/images/guides/g9/g9-passo1.jpg", visualTip: "Selecione o domicílio na lista da sua microárea." },
      { id: 2, title: "Verificar se já tem Cadastro", description: "Pesquise se a pessoa veio de outro bairro e já possui registro no sistema.", image: "/images/guides/g9/g9-passo2.jpg", visualTip: "Busque pelo CPF para puxar o cadastro pré-existente se houver." },
      { id: 3, title: "Adicionar ou Transferir", description: "Se já tiver cadastro, faça a transferência de endereço; se não tiver, crie um novo.", visualTip: "Escolha entre vincular morador existente ou criar nova ficha." },
      { id: 4, title: "Atualizar Relação Familiar", description: "Ajuste o grau de parentesco e salve a nova formação da família.", visualTip: "Defina o parentesco do novo integrante e clique em Salvar." }
    ]
  },
  {
    id: "g10",
    slug: "registrar-obito-sistema",
    title: "Registrar Óbito no Sistema",
    category: "Atualização de Dados",
    summary: "Como proceder para dar baixa por óbito na ficha do cidadão com respeito e precisão.",
    steps: [
      { id: 1, title: "Localizar Ficha do Cidadão", description: "Busque pelo nome ou CPF da pessoa falecida no aplicativo.", image: "/images/guides/g10/g10-passo1.jpg", visualTip: "Abra a ficha do cidadão no e-SUS Território." },
      { id: 2, title: "Editar Cadastro Individual", description: "Toque no ícone de lápis para alterar os dados da ficha.", image: "/images/guides/g10/g10-passo2.jpg", visualTip: "Clique no botão de edição de cadastro do indivíduo." },
      { id: 3, title: "Marcar Opção Óbito", description: "Selecione o campo de saída por 'Óbito' e informe a data do falecimento se solicitada.", image: "/images/guides/g10/g10-passo3.jpg", visualTip: "Marque a caixa de seleção de Óbito nas opções de saída." },
      { id: 4, title: "Salvar e Notificar Equipe", description: "Salve a ficha e comunique a equipe de saúde para encerramento de acompanhamentos.", visualTip: "Confirme a alteração para atualizar o histórico da UBS." }
    ]
  },

  // 4. Registro da Visita Domiciliar
  {
    id: "g11",
    slug: "registrar-visita-domiciliar",
    title: "Registrar Visita Domiciliar",
    category: "Registro de Visitas",
    summary: "Como registrar corretamente uma visita domiciliar realizada no dia a dia.",
    steps: [
      { id: 1, title: "Localizar Cidadão ou Família", description: "Busque a pessoa ou a casa na sua lista de microárea.", visualTip: "Selecione o morador visitado no aplicativo." },
      { id: 2, title: "Iniciar Ficha de Visita", description: "Toque no botão 'Registrar Visita' no perfil do cidadão.", image: "/images/guides/g11/g11-passo2.jpg", visualTip: "Clique no botão azul de registro de visita." },
      { id: 3, title: "Marcar Motivos e Ações", description: "Selecione os motivos da visita e ações realizadas no momento.", visualTip: "Marque as caixas de acompanhamento correspondentes." },
      { id: 4, title: "Salvar Visita", description: "Confirme o desfecho como 'Visita Realizada' e toque em Salvar.", visualTip: "Confirme o salvamento no final da tela." }
    ]
  },
  {
    id: "g12",
    slug: "selecionar-motivo-visita",
    title: "Selecionar Motivo da Visita Domiciliar",
    category: "Registro de Visitas",
    summary: "Orientações sobre qual motivo de visita marcar de acordo com o foco do atendimento.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Cadastramento e Atualização", description: "Marque 'Cadastramento/Atualização' quando o foco for coletar dados cadastrais.", visualTip: "Selecione esta opção ao preencher fichas novas ou atualizar dados." },
      { id: 2, title: "Acompanhamento Continuado", description: "Marque 'Gestante', 'Hipertensão', 'Diabetes' ou 'Criança' conforme o público atendido.", visualTip: "Escolha os grupos prioritários acompanhados na visita." },
      { id: 3, title: "Busca Ativa e Convites", description: "Marque 'Busca Ativa' para vacinas atrasadas, consultas faltosas ou exames pendentes.", visualTip: "Marque busca ativa quando for reconvocar o paciente para a UBS." },
      { id: 4, title: "Controle Ambiental", description: "Marque 'Controle de Vetores' ao realizar inspeções de dengue e saneamento.", visualTip: "Selecione a opção ambiental caso inspecione o quintal." }
    ]
  },
  {
    id: "g13",
    slug: "registrar-visita-ausente-recusada",
    title: "Registrar Visita com Morador Ausente ou Recusada",
    category: "Registro de Visitas",
    summary: "Como registrar a tentativa de visita quando a casa está fechada ou o morador recusa.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Sim, Deve Registrar", description: "É essencial registrar no sistema mesmo quando não encontrar ninguém em casa.", visualTip: "Registrar ausências comprova o deslocamento e a cobertura da microárea." },
      { id: 2, title: "Abrir Ficha de Visita", description: "Selecione o domicílio ou o cidadão que tentou visitar.", visualTip: "Clique em Registrar Visita normalmente." },
      { id: 3, title: "Selecionar Desfecho Ausente", description: "No campo Desfecho, escolha a opção 'Ausente' se o imóvel estiver fechado.", visualTip: "Selecione 'Ausente' no menu de desfecho da visita." },
      { id: 4, title: "Selecionar Desfecho Recusada", description: "Se o morador não quiser atender, escolha a opção 'Recusada' e salve.", visualTip: "Marque 'Recusada' com respeito à opção do cidadão e salve." }
    ]
  },

  // 5. Problemas de Duplicação
  {
    id: "g14",
    slug: "mensagem-cadastro-duplicado",
    title: "Mensagem de Cadastro Duplicado",
    category: "Problemas de Duplicação",
    summary: "Entenda o alerta de cadastro duplicado e saiba como resolver sem perdas de dados.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Compreender o Alerta", description: "Esta mensagem indica que o CPF ou CNS digitado já existe na base de dados da UBS.", visualTip: "O sistema impede a criação de duas fichas para a mesma pessoa." },
      { id: 2, title: "Não Criar Novo Cadastro", description: "Não tente forçar um novo cadastro alterando letras do nome ou números.", visualTip: "Evite alterar dados reais para burlar o aviso do sistema." },
      { id: 3, title: "Buscar Cadastro Existente", description: "Volte à tela de busca e pesquise pelo CPF para carregar a ficha oficial.", visualTip: "Busque pelo CPF para abrir a ficha que já existia." },
      { id: 4, title: "Vincular à Família", description: "Abra a ficha encontrada e apenas atualize o endereço para o domicílio atual.", visualTip: "Reative ou mude o endereço da pessoa para a casa correta." }
    ]
  },
  {
    id: "g15",
    slug: "diferenciar-pessoas-mesmo-nome",
    title: "Diferenciar Pessoas com Mesmo Nome (Homônimos)",
    category: "Problemas de Duplicação",
    summary: "Como conferir data de nascimento, mãe e documentos para diferenciar cadastros homônimos.",
    steps: [
      { id: 1, title: "Verificar Data de Nascimento", description: "Compare a data de nascimento exata dos dois cadastros para conferir se são pessoas diferentes.", visualTip: "Confira dia, mês e ano de nascimento na certidão ou RG." },
      { id: 2, title: "Conferir Nome da Mãe", description: "Examine o nome completo da mãe registrado em cada uma das fichas.", image: "/images/guides/g15/g15-passo2.jpg", visualTip: "O nome da mãe é o principal elemento diferenciador de homônimos." },
      { id: 3, title: "Checar Número de CPF e CNS", description: "Verifique o número do CPF ou do Cartão do SUS de cada cidadão.", visualTip: "O CPF é único para cada brasileiro e tira a dúvida." },
      { id: 4, title: "Confirmar Endereço do Imóvel", description: "Certifique-se em qual casa e microárea cada um dos homônimos reside.", visualTip: "Valide o endereço de residência atual." }
    ]
  },
  {
    id: "g16",
    slug: "escolher-logradouro-ruas-semelhantes",
    title: "Escolher Logradouro em Ruas Semelhantes",
    category: "Problemas de Duplicação",
    summary: "Orientações para selecionar a rua correta quando houver nomes parecidos na lista oficial.",
    steps: [
      { id: 1, title: "Evitar Abreviações", description: "Procure o nome por extenso na lista de logradouros em vez de usar siglas incomuns.", image: "/images/guides/g16/g16-passo1.jpg", visualTip: "Busque por 'São José' em vez de 'S. Jose'." },
      { id: 2, title: "Conferir o Bairro", description: "Verifique a qual bairro a rua pertence na lista de opções exibida.", visualTip: "Confirme se o bairro associado à rua bate com o território." },
      { id: 3, title: "Padronizar com a Equipe", description: "Consulte os colegas ACS da mesma microárea para usar o mesmo padrão de rua.", visualTip: "Alinhe com a equipe qual opção de rua todos estão selecionando." },
      { id: 4, title: "Selecionar Código de Logradouro", description: "Escolha a rua que possui o código CEP oficial cadastrado na UBS.", visualTip: "Selecione o logradouro padrão indicado pela supervisão." }
    ]
  },

  // 6. Problemas de Inconsistência
  {
    id: "g17",
    slug: "entender-inconsistencia-sistema",
    title: "Entender Inconsistência no Sistema",
    category: "Problemas de Inconsistência",
    summary: "O que é uma inconsistência de dados no e-SUS Território e como identificá-la.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "O que é Inconsistência?", description: "Inconsistência ocorre quando faltam dados obrigatórios ou há dados conflitantes na ficha.", visualTip: "Exemplo: morador sem sexo informado ou data de nascimento futura." },
      { id: 2, title: "Exemplos Comuns", description: "CPF inválido, responsável familiar não indicado ou ausência de vínculo de parentesco.", visualTip: "Campos obrigatórios em branco geram inconsistência no PEC." },
      { id: 3, title: "Impacto no Trabalho", description: "Fichas com inconsistência não são validadas pelo Ministério da Saúde até serem corrigidas.", visualTip: "Inconsistências impedem a contabilização dos seus relatórios." },
      { id: 4, title: "Como Identificar", description: "O aplicativo exibe um alerta amarelo ou vermelho indicando a ficha com pendência.", visualTip: "Fique atento aos símbolos de aviso ao lado dos nomes." }
    ]
  },
  {
    id: "g18",
    slug: "corrigir-erro-pos-sincronizacao",
    title: "Corrigir Erro Pós-Sincronização",
    category: "Problemas de Inconsistência",
    summary: "Passo a passo para localizar e corrigir fichas com erro devolvidas após sincronizar.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Verificar Relatório de Sincronização", description: "Após sincronizar, abra a aba Sincronização e veja a lista de fichas rejeitadas.", visualTip: "Confira as mensagens marcadas como Erro ou Rejeitada." },
      { id: 2, title: "Ler a Mensagem do Erro", description: "Toque na ficha rejeitada para ler exatamente qual campo precisa de correção.", visualTip: "Leia a instrução emitida pelo sistema sobre a pendência." },
      { id: 3, title: "Editar os Campos Indicados", description: "Abra a ficha do cidadão ou domicílio e corrija a informação incorreta.", visualTip: "Preencha o campo ausente ou corrija o número inválido." },
      { id: 4, title: "Sincronizar Novamente", description: "Após salvar as correções, faça uma nova sincronização para reenviar as fichas.", visualTip: "Envie novamente os dados para validação no PEC da unidade." }
    ]
  },

  // 7. Problemas de Sincronização
  {
    id: "g19",
    slug: "cadastros-ausentes-sistema-unidade",
    title: "Cadastros Ausentes no Sistema da Unidade",
    category: "Problemas de Sincronização",
    summary: "Por que cadastros feitos no tablet ainda não aparecem no PEC da unidade e como resolver.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Verificar Fichas Pendentes", description: "Abra o menu Sincronização no tablet e confira se há fichas acumuladas sem enviar.", visualTip: "Veja se o contador de fichas pendentes está maior que zero." },
      { id: 2, title: "Checar Conexão Wi-Fi da UBS", description: "Certifique-se de que o tablet está conectado à rede de internet oficial da UBS.", visualTip: "Verifique se o Wi-Fi da unidade está ativo e funcionando." },
      { id: 3, title: "Aguardar Processamento do PEC", description: "O sistema da unidade pode levar alguns minutos para importar o lote recebido.", visualTip: "Dê um tempo para o computador da unidade processar a carga." },
      { id: 4, title: "Solicitar Reimportação", description: "Se as fichas foram enviadas mas não aparecem, peça ao digitador ou enfermeiro para checar o lote no PEC.", visualTip: "Peça à supervisão para verificar a aba de recepção de fichas no PEC." }
    ]
  },
  {
    id: "g20",
    slug: "sincronizar-dados-tablet-unidade",
    title: "Sincronizar Dados do Tablet com a Unidade",
    category: "Problemas de Sincronização",
    summary: "Passo a passo completo para sincronizar os dados do tablet com o PEC da unidade.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Conectar ao Wi-Fi da UBS", description: "Ao chegar na Unidade de Saúde, ligue o Wi-Fi do tablet e conecte à rede autorizada.", visualTip: "Confira se a conexão com a internet ou rede local está ativa." },
      { id: 2, title: "Abrir o Menu Sincronização", description: "Abra o aplicativo e-SUS Território e toque no menu lateral na opção 'Sincronizar'.", visualTip: "Acesse a tela de sincronização no menu principal do app." },
      { id: 3, title: "Iniciar o Envio de Fichas", description: "Toque no botão 'Enviar Dados' e aguarde a barra de progresso ser concluída.", visualTip: "Mantenha a tela aberta enquanto os arquivos são transmitidos." },
      { id: 4, title: "Receber Atualizações da Base", description: "Após enviar, toque em 'Receber Dados' para baixar novidades do PEC no seu tablet.", visualTip: "Atualize a base do tablet com os novos cadastros da equipe." },
      { id: 5, title: "Confirmar Mensagem de Sucesso", description: "Certifique-se de que a mensagem 'Sincronização realizada com sucesso' foi exibida.", visualTip: "Verifique se o contador de fichas pendentes zerou." }
    ]
  },

  // ==========================================
  // GUIAS 21 EM DIANTE: PROGRAMAS DE SAÚDE E ATENDIMENTO CLÍNICO NO TERRITÓRIO
  // ==========================================
  {
    id: "g21",
    slug: "pre-natal",
    title: "Acompanhamento de Pré-natal",
    category: "Programas de Saúde",
    summary: "Rotina de captação e acompanhamento de gestantes na comunidade.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Identificar Gestante", description: "Confirme a suspeita de gravidez e a data da última menstruação (DUM).", visualTip: "Anote a DUM e verifique a semana gestacional estimada com a gestante." },
      { id: 2, title: "Ficha de Cadastro", description: "Atualize a ficha individual marcando a opção 'Gestante'.", visualTip: "Na aba 'Condições de Saúde', selecione o campo de verificação 'Gestante'." },
      { id: 3, title: "Agendar Consulta", description: "Encaminhe para a primeira consulta de pré-natal na UBS.", visualTip: "Confira na agenda da UBS a data de atendimento da equipe de saúde da família." },
      { id: 4, title: "Caderneta", description: "Verifique se a gestante já possui e está utilizando a Caderneta da Gestante.", visualTip: "Solicite a Caderneta da Gestante para conferir os registros das consultas anteriores." }
    ]
  },
  {
    id: "g22",
    slug: "hiperdia",
    title: "Acompanhamento Hiperdia",
    category: "Programas de Saúde",
    summary: "Monitoramento de hipertensos e diabéticos durante as visitas.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Aferição", description: "Se habilitado, auxilie na aferição de PA ou acompanhe o relato dos valores.", visualTip: "Registre o valor da Pressão Arterial (mmHg) e Glicemia de Jejum relatados pelo paciente." },
      { id: 2, title: "Medicação", description: "Questione sobre o uso regular dos medicamentos prescritos.", visualTip: "Confira se a caixa de medicamentos está sendo tomada nos horários recomendados." },
      { id: 3, title: "Sinais de Alerta", description: "Observe edemas, tonturas ou feridas que não cicatrizam (em diabéticos).", visualTip: "Avalie presença de inchaço em tornozelos ou feridas em membros inferiores." },
      { id: 4, title: "Registro e-SUS", description: "Marque o acompanhamento de 'Hipertensão' ou 'Diabetes' na ficha de visita.", visualTip: "Selecione 'Hipertensão Arterial' ou 'Diabetes Mellitus' nos campos da visita." }
    ]
  },
  {
    id: "g23",
    slug: "bolsa-familia",
    title: "Acompanhamento Bolsa Família",
    category: "Programas de Saúde",
    summary: "Cumprimento das condicionalidades de saúde do programa.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Identificar Beneficiário", description: "Localize as famílias que recebem o benefício na sua lista.", visualTip: "Filtre a lista de cidadãos selecionando o marcador 'Bolsa Família'." },
      { id: 2, title: "Pesagem e Estatura", description: "Realize ou encaminhe para a coleta de medidas antropométricas.", visualTip: "Anote os valores de peso (kg) e altura/estatura (cm) obtidos na pesagem." },
      { id: 3, title: "Vacinação", description: "Verifique se o calendário vacinal das crianças está em dia.", visualTip: "Examine a Caderneta de Vacinação das crianças menores de 7 anos." },
      { id: 4, title: "Mapa de Acompanhamento", description: "Lance os dados no sistema ou preencha o mapa físico do Bolsa Família.", visualTip: "Confirme a digitação das medidas no mapa de acompanhamento do vigência atual." }
    ]
  },
  {
    id: "g24",
    slug: "visita-recem-nascido-cuidados",
    title: "Visita ao Recém-nascido (Cuidados)",
    category: "Programas de Saúde",
    summary: "Primeira visita após o nascimento (até o 5º dia de vida).",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Teste do Pezinho", description: "Verifique se o teste foi realizado entre o 3º e o 5º dia.", visualTip: "Confirme se a coleta da triagem neonatal (teste do pezinho) foi registrada." },
      { id: 2, title: "Coto Umbilical", description: "Oriente sobre a limpeza com álcool 70% e observe sinais de infecção.", visualTip: "Oriente a aplicação de álcool a 70% na base do coto umbilical a cada troca." },
      { id: 3, title: "Amamentação", description: "Observe a pega e oriente sobre o aleitamento materno exclusivo.", visualTip: "Verifique se os lábios do bebê estão virados para fora e abocanhando a aréola." },
      { id: 4, title: "Agendamento", description: "Garanta que a primeira consulta de puericultura esteja marcada na UBS.", visualTip: "Confirme o agendamento da consulta de retorno da puérpera e do bebê na UBS." }
    ]
  },
  {
    id: "g25",
    slug: "combate-dengue",
    title: "Prevenção de Arboviroses",
    category: "Programas de Saúde",
    summary: "Ações de campo para controle de Dengue, Zika e Chikungunya.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Inspeção de Quintal", description: "Procure por recipientes que acumulem água parada.", visualTip: "Inspecione calhas, pratos de plantas, pneu velhos e vasilhames ao ar livre." },
      { id: 2, title: "Vedação de Caixas", description: "Verifique se as caixas d'água estão devidamente tampadas.", visualTip: "Certifique-se de que reservatórios superiores e cisternas estejam hermeticamente vedados." },
      { id: 3, title: "Sinais e Sintomas", description: "Oriente a família sobre febre alta, dores no corpo e manchas vermelhas.", visualTip: "Reforce a atenção aos sinais de febre súbita, dor atrás dos olhos e manchar cutâneas." },
      { id: 4, title: "Registro de Foco", description: "Caso encontre larvas, notifique imediatamente a equipe de endemias.", visualTip: "Registre o achado de foco na ficha de controle ambiental do aplicativo." }
    ]
  },
  {
    id: "g26",
    slug: "saude-mental",
    title: "Saúde Mental na Comunidade",
    category: "Programas de Saúde",
    summary: "Apoio e identificação de sofrimento psíquico.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Escuta Qualificada", description: "Dê espaço para o cidadão falar sobre seus sentimentos sem julgamentos.", visualTip: "Mantenha contato visual e demonstre empatia durante o relato do morador." },
      { id: 2, title: "Identificar Crise", description: "Observe sinais de isolamento, choro frequente ou ideação suicida.", visualTip: "Preste atenção a mudanças abruptas na rotina, aparência ou discurso do indivíduo." },
      { id: 3, title: "Rede de Apoio", description: "Verifique se o paciente frequenta o CAPS ou se tem acompanhamento médico.", visualTip: "Identifique se há uso de medicações psiquiátricas e se há vínculo com o CAPS da região." },
      { id: 4, title: "Vínculo Familiar", description: "Oriente a família sobre a importância do acolhimento no ambiente doméstico.", visualTip: "Oriente os familiares sobre condutas de suporte emocional e acompanhamento contínuo." }
    ]
  },
  {
    id: "g27",
    slug: "saude-idoso",
    title: "Saúde do Idoso",
    category: "Programas de Saúde",
    summary: "Avaliação de fragilidade e riscos no domicílio do idoso.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Risco de Queda", description: "Observe tapetes soltos, falta de corrimão e iluminação precária.", visualTip: "Examine a casa procurando por obstáculos no piso, iluminação fraca ou banheiros sem barra." },
      { id: 2, title: "Polifarmácia", description: "Verifique se o idoso toma mais de 5 medicamentos e se há confusão nas doses.", visualTip: "Revise a lista de remédios prescritos e organize os horários em caixa organizadora." },
      { id: 3, title: "Caderneta do Idoso", description: "Atualize os dados de saúde na Caderneta da Pessoa Idosa.", visualTip: "Preencha as medições recentes e o gráfico de pressão arterial na Caderneta do Idoso." },
      { id: 4, title: "Atividades Diárias", description: "Avalie se o idoso consegue comer, tomar banho e se vestir sozinho.", visualTip: "Avalie o grau de dependência para atividades básicas da vida diária (ABVD)." }
    ]
  },
  {
    id: "g28",
    slug: "vacinacao-atraso",
    title: "Vacinação em Atraso",
    category: "Programas de Saúde",
    summary: "Como proceder ao identificar crianças com vacinas pendentes.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Conferir Caderneta", description: "Compare as vacinas tomadas com o calendário nacional vigente.", visualTip: "Abra a Caderneta de Vacinação na seção dos esquemas por faixa etária." },
      { id: 2, title: "Identificar Faltosas", description: "Anote quais doses estão atrasadas (Ex: Penta, VIP/VOP, SCR).", visualTip: "Verifique a ausência de carimbo nas vacinas recomendadas para a idade atual." },
      { id: 3, title: "Orientar Família", description: "Explique a importância da proteção e os riscos das doenças.", visualTip: "Esclareça mitos sobre vacinas e reforce a segurança da imunização." },
      { id: 4, title: "Encaminhamento", description: "Direcione a família imediatamente à sala de vacina da UBS de referência.", visualTip: "Entregue a senha ou encaminhamento por escrito indicando a sala de vacinas da UBS." }
    ]
  },
  {
    id: "g29",
    slug: "planejamento-familiar",
    title: "Planejamento Familiar",
    category: "Programas de Saúde",
    summary: "Orientações sobre métodos contraceptivos e saúde reprodutiva.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Abordagem", description: "Inicie a conversa sobre o desejo de ter filhos ou evitar gravidez no momento.", visualTip: "Converse de forma reservada para entender as metas reprodutivas do cidadão ou casal." },
      { id: 2, title: "Métodos Disponíveis", description: "Informe sobre camisinha, pílula, injetável, DIU e métodos definitivos no SUS.", visualTip: "Apresente o leque de métodos contraceptivos reversíveis fornecidos na UBS." },
      { id: 3, title: "Grupo de Apoio", description: "Convide o casal para as reuniões de planejamento familiar na unidade.", visualTip: "Informe os dias e horários dos encontros educativos de planejamento na UBS." },
      { id: 4, title: "Distribuição", description: "Lembre que preservativos podem ser retirados livremente na UBS.", visualTip: "Lembre que não é necessária receita médica para retirar preservativos na unidade." }
    ]
  },
  {
    id: "g30",
    slug: "puerperio",
    title: "Cuidados no Puerpério",
    category: "Programas de Saúde",
    summary: "Acompanhamento da saúde da mulher após o parto.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Sinais de Infecção", description: "Observe febre, dor intensa ou sangramento com odor forte (loquiação).", visualTip: "Questione sobre febre, calafrios ou odor desagradável nos lóquios pós-parto." },
      { id: 2, title: "Saúde Mental", description: "Identifique sinais de tristeza profunda ou desinteresse pelo bebê (Depressão Pós-parto).", visualTip: "Observe manifestações de apatia, choro contínuo ou dificuldade de criar vínculo com o bebê." },
      { id: 3, title: "Exame Ginecológico", description: "Garanta que a consulta de revisão (42 dias) esteja agendada.", visualTip: "Verifique se a marcação da consulta puerperal de 42 dias foi efetuada." },
      { id: 4, title: "Amamentação", description: "Avalie a saúde das mamas (fissuras ou mastite) e apoie a puérpera.", visualTip: "Examine visualmente se há ingurgitamento mamário, fissuras ou vermelhidão excessiva." }
    ]
  },
  {
    id: "g31",
    slug: "busca-ativa-tb-hanseniase",
    title: "Sintomáticos Respiratórios e Pele",
    category: "Programas de Saúde",
    summary: "Busca ativa de Tuberculose e Hanseníase no território.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Identificar Tosse", description: "Questione sobre tosse por 3 semanas ou mais (Tuberculose).", visualTip: "Pergunte a todos os moradores se há tosse persistente por 21 dias ou mais." },
      { id: 2, title: "Manchas na Pele", description: "Observe manchas claras ou avermelhadas com perda de sensibilidade (Hanseníase).", visualTip: "Procure por lesões de pele esbranquiçadas ou avermelhadas que não doem nem coçam." },
      { id: 3, title: "Contatos Próximos", description: "Identifique se familiares de casos confirmados estão sendo avaliados.", visualTip: "Mapeie os comunicantes domiciliares de casos confirmados para agendar avaliação." },
      { id: 4, title: "Encaminhamento", description: "Direcione para coleta de escarro ou avaliação médica na UBS.", visualTip: "Forneça os frascos de baciloscopia ou agende a consulta médica para diagnóstico." }
    ]
  },
  {
    id: "g32",
    slug: "saude-bucal",
    title: "Orientações de Saúde Bucal",
    category: "Programas de Saúde",
    summary: "Promoção da higiene oral e identificação de lesões.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Higiene Diária", description: "Oriente sobre escovação após as refeições e uso do fio dental.", visualTip: "Demonstre a técnica de escovação suave com movimentos circulares na gengiva." },
      { id: 2, title: "Bebês e Crianças", description: "Explique que a limpeza deve começar antes mesmo dos primeiros dentes.", visualTip: "Oriente a limpeza da cavidade oral de bebês com gaze limpa embebida em água filtrada." },
      { id: 3, title: "Lesões Suspeitas", description: "Observe feridas na boca que não cicatrizam em 15 dias (risco de câncer).", visualTip: "Inspecione se há aftas grandes ou úlceras orais que persistem por mais de 2 semanas." },
      { id: 4, title: "Próteses", description: "Oriente idosos sobre a limpeza correta e retirada da dentadura para dormir.", visualTip: "Recomende a remoção da prótese à noite e higienização com escova de cerdas duras." }
    ]
  },
  {
    id: "g33",
    slug: "identificar-violencia",
    title: "Identificação de Violência",
    category: "Programas de Saúde",
    summary: "Como agir em casos suspeitos de violência doméstica ou infantil.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Sinais Físicos", description: "Observe hematomas em locais incomuns ou marcas de queimadura.", visualTip: "Fique atento a escoriações em áreas cobertas por roupas ou contusões com padrões de objetos." },
      { id: 2, title: "Comportamento", description: "Note isolamento repentino, medo excessivo ou regressão no desenvolvimento.", visualTip: "Observe se a criança se sobressalta com facilidade ou se o cidadão se mostra extremamente acuado." },
      { id: 3, title: "Escuta Protegida", description: "Não force o relato; acolha o que for dito voluntariamente.", visualTip: "Escute com calma sem fazer perguntas indutivas ou demonstrar espanto." },
      { id: 4, title: "Notificação", description: "Informe imediatamente à sua enfermeira supervisora para conduta sigilosa.", visualTip: "Encaminhe o relato sigilosamente à supervisão de enfermagem da UBS." }
    ]
  },
  {
    id: "g34",
    slug: "riscos-ambientais",
    title: "Saneamento e Meio Ambiente",
    category: "Programas de Saúde",
    summary: "Vigilância de riscos no entorno do domicílio.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Água e Esgoto", description: "Verifique a origem da água e o destino dos dejetos (fossa ou rede).", visualTip: "Pergunte se a água consumida passa por filtro/fervura e se há vazamento de esgoto." },
      { id: 2, title: "Lixo e Entulho", description: "Oriente sobre o descarte correto para evitar ratos e escorpiões.", visualTip: "Oriente a manter restos de construção longe das paredes da residência." },
      { id: 3, title: "Animais Sinantrópicos", description: "Observe presença de morcegos, barbeiros ou caramujos africanos.", visualTip: "Verifique se há frestas em paredes de taipa/tijolo que sirvam de abrigo a barbeiros." },
      { id: 4, title: "Manejo Ambiental", description: "Sugira soluções simples como telar ralos e manter quintais limpos.", visualTip: "Recomende a instalação de ralo abre-fecha e proteção nas portas contra pragas." }
    ]
  },
  {
    id: "g35",
    slug: "cuidados-paliativos",
    title: "Apoio em Cuidados Paliativos",
    category: "Programas de Saúde",
    summary: "Acompanhamento de pacientes com doenças graves em terminalidade.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Conforto e Dor", description: "Pergunte sobre a intensidade da dor e se a medicação está aliviando.", visualTip: "Consulte a escala visual de dor (0 a 10) relatada pelo paciente ou cuidador." },
      { id: 2, title: "Prevenção de Lesões", description: "Oriente a família sobre a mudança de decúbito (virar o paciente) a cada 2h.", visualTip: "Ensine a alternar a posição do paciente no leito (de lado, de costas) periodicamente." },
      { id: 3, title: "Higiene e Nutrição", description: "Auxilie com dicas para banho no leito e alimentação pastosa/líquida.", visualTip: "Oriente o uso de travesseiros para apoio e alimentos facilitados para deglutição." },
      { id: 4, title: "Apoio ao Cuidador", description: "Observe se o cuidador está exausto e ofereça escuta emocional.", visualTip: "Acolha o cuidador principal e sugira revezamento de tarefas com outros familiares." }
    ]
  },
  {
    id: "g36",
    slug: "mordedura-animais",
    title: "Mordedura e Raiva Humana",
    category: "Programas de Saúde",
    summary: "Primeiros cuidados após ataques de animais.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Lavagem Imediata", description: "Oriente lavar o ferimento abundantemente com água e sabão.", visualTip: "Lave o local com água corrente abundante e sabão em barra por pelo menos 5 minutos." },
      { id: 2, title: "Dados do Animal", description: "Identifique se o animal é conhecido e pode ser observado por 10 dias.", visualTip: "Anote o endereço do proprietário do cão/gato para monitorar o animal por 10 dias." },
      { id: 3, title: "Encaminhamento Rápido", description: "Envie o paciente à UBS para avaliar a necessidade de vacina ou soro.", visualTip: "Encaminhe o acidentado com urgência à sala de atendimento da UBS de referência." },
      { id: 4, title: "Notificação", description: "Registre o caso de agressão por animal no sistema de vigilância.", visualTip: "Preencha o registro de acidente por animal potencialmente transmissor da raiva." }
    ]
  },
  {
    id: "g37",
    slug: "saude-homem",
    title: "Saúde do Homem",
    category: "Programas de Saúde",
    summary: "Ações de prevenção e rastreamento para a população masculina.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Rastreamento", description: "Oriente sobre a importância dos exames de rotina (PA, glicemia, colesterol).", visualTip: "Reforce a realização anual de testes de rotina cardiometabólica na UBS." },
      { id: 2, title: "Prevenção de Câncer", description: "Fale sobre o câncer de próstata e pênis (higiene e sinais de alerta).", visualTip: "Oriente sobre os sinais de nódulos ou feridas na região genital masculina." },
      { id: 3, title: "Saúde Sexual", description: "Aborde o uso de preservativos e o teste rápido para ISTs.", visualTip: "Ofereça os testes rápidos de triagem para ISTs disponíveis na unidade." },
      { id: 4, title: "Acesso à UBS", description: "Estimule o comparecimento à unidade, mesmo sem sintomas agudos.", visualTip: "Informe sobre o pré-natal do parceiro e horários de atendimento masculino na UBS." }
    ]
  },
  {
    id: "g38",
    slug: "reducao-danos",
    title: "Álcool e Drogas (Redução de Danos)",
    category: "Programas de Saúde",
    summary: "Apoio e orientações para usuários de substâncias.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Vínculo e Escuta", description: "Aproxime-se sem julgamentos para entender o padrão de uso.", visualTip: "Adote uma postura empática e aberta para dialogar com o usuário." },
      { id: 2, title: "Hidratação e Alimentação", description: "Oriente sobre cuidados básicos para diminuir o impacto físico.", visualTip: "Enfatize a necessidade de beber água regularmente e se alimentar antes do uso." },
      { id: 3, title: "Rede de Cuidado", description: "Informe sobre o CAPS AD e grupos de apoio na comunidade.", visualTip: "Apresente os serviços de atenção psicossocial especializados em álcool e drogas." },
      { id: 4, title: "Segurança", description: "Em caso de overdose ou abstinência grave, saiba como acionar o SAMU.", visualTip: "Mantenha o número do SAMU 192 visível e oriente a família sobre sinais de emergência." }
    ]
  },
  {
    id: "g39",
    slug: "prevencao-cancer",
    title: "Prevenção de Câncer Feminino",
    category: "Programas de Saúde",
    summary: "Orientações sobre Papanicolau e Mamografia.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Autoexame", description: "Ensine a mulher a observar as mamas e identificar alterações.", visualTip: "Oriente a observação do formato das mamas e presença de retrações na pele." },
      { id: 2, title: "Preventivo", description: "Verifique se o Papanicolau está em dia (recomendado a cada 1 a 3 anos).", visualTip: "Confira na ficha individual se a mulher colheu o exame citopatológico nos últimos 3 anos." },
      { id: 3, title: "Critérios de Idade", description: "Oriente sobre a mamografia para mulheres entre 50 e 69 anos.", visualTip: "Verifique se a paciente está na faixa etária alvo para rastreamento mamográfico." },
      { id: 4, title: "Encaminhamento", description: "Agende ou direcione para a coleta na Unidade de Saúde.", visualTip: "Agende o horário de coleta do preventivo na agenda de enfermagem da UBS." }
    ]
  },
  {
    id: "g40",
    slug: "sintomas-gripais",
    title: "Sintomas Gripais e COVID",
    category: "Programas de Saúde",
    summary: "Como agir em casos de febre, tosse e falta de ar.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Isolamento", description: "Oriente o afastamento de outras pessoas e o uso de máscara em casa.", visualTip: "Oriente o uso de máscara cobrindo boca e nariz e ventilação frequente do quarto." },
      { id: 2, title: "Sinais de Gravidade", description: "Monitore se há falta de ar, cansaço extremo ou febre persistente.", visualTip: "Monitore a frequência respiratória e sensação de sufocamento ao realizar esforços." },
      { id: 3, title: "Testagem", description: "Informe sobre onde e quando realizar o teste (COVID ou Influenza).", visualTip: "Indique a data correta para a realização do teste rápido na unidade básica." },
      { id: 4, title: "Notificação", description: "Registre o caso como suspeito na planilha de monitoramento da equipe.", visualTip: "Insira os dados do sintomático na ficha de acompanhamento respiratório da equipe." }
    ]
  },
  {
    id: "g41",
    slug: "desenvolvimento-infantil",
    title: "Desenvolvimento Infantil",
    category: "Programas de Saúde",
    summary: "Marcos de crescimento e aprendizagem da criança.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Puericultura", description: "Verifique se as consultas de rotina no médico/enfermeiro estão em dia.", visualTip: "Abra a Caderneta da Criança na curva de peso x idade e altura x idade." },
      { id: 2, title: "Marcos Motores", description: "Observe se a criança já senta, engatinha ou anda conforme a idade.", visualTip: "Confira a tabela de desenvolvimento neuropsicomotor da Caderneta da Criança." },
      { id: 3, title: "Linguagem", description: "Note se a criança interage, balbucia ou já fala palavras simples.", visualTip: "Verifique se a criança reage ao ser chamada pelo nome e imita sons." },
      { id: 4, title: "Estímulos", description: "Oriente os pais sobre a importância de brincar e conversar com o bebê.", visualTip: "Incentive os responsáveis a lerem estórias e interagirem sem o uso de telas." }
    ]
  },
  {
    id: "g42",
    slug: "ivcf-20-idoso",
    title: "Aplicação do IVCF-20 (Saúde da Pessoa Idosa)",
    category: "Programas de Saúde",
    summary: "Orientações do Ministério da Saúde para preenchimento e aplicação do Índice de Vulnerabilidade Clínico-Funcional (IVCF-20) no e-SUS Território.",
    hasDetailedGuide: false,
    steps: [
      { id: 1, title: "Acessar o Questionário no e-SUS", description: "Na ficha individual do morador idoso (60 anos ou mais), abra a aba de questionários e selecione 'Avaliação da Pessoa Idosa - IVCF-20'.", visualTip: "Abra a seção de questionários específicos no perfil individual do cidadão idoso." },
      { id: 2, title: "Envolver Familiar ou Cuidador", description: "Convide um familiar ou o cuidador principal para acompanhar a conversa, ajudando a validar as informações sobre uso de remédios, histórico de quedas e dificuldades na rotina.", visualTip: "Peça licença para que um familiar de referência participe e confirme os detalhes relatados." },
      { id: 3, title: "Compreender o Impacto do seu Papel", description: "ACS, ao preencher o IVCF-20 você é os olhos do SUS dentro da casa: muitas famílias não percebem a tempo o risco de quedas, esquecimentos ou sobrecarga de quem cuida. Seu preenchimento garante que a equipe de saúde chegue antes de uma internação grave e dá à família a certeza de que não está desamparada.", visualTip: "Seu olhar atento no território transforma dados em cuidado real e dignidade para a família do idoso." },
      { id: 4, title: "Avaliar as 8 Dimensões Clínicas", description: "Faça as perguntas diretamente ao idoso com calma sobre: autopercepção da saúde, atividades diárias (AVDs), cognição/memória, humor, mobilidade, visão/audição e comorbidades.", visualTip: "Mantenha o foco no idoso, usando o familiar como apoio quando houver dúvida ou esquecimento." },
      { id: 5, title: "Interpretar o Escore (0 a 40 pontos)", description: "O e-SUS calcula a pontuação: 0 a 6 pontos (Idoso Robusto), 7 a 14 pontos (Risco de Fragilização) e 15 ou mais pontos (Idoso Frágil).", visualTip: "Confira o resultado da pontuação total e a classificação de fragilidade calculada na tela." },
      { id: 6, title: "Notificar a Equipe de Saúde da Família", description: "Salve a avaliação e comunique imediatamente à enfermeira ou médico da UBS os idosos com escore ≥ 7 para elaboração do plano de cuidados prioritário.", visualTip: "Repasse os idosos frágeis na reunião de equipe da UBS para visitas e acompanhamento prioritário." }
    ]
  }
];

export const INTENTS: Intent[] = [
  // Intents 1 a 20 Mapeadas 1:1 com as 20 Perguntas do Documento Projeto Anjo ACS
  {
    id: "i1",
    title: "1. Cadastro de Casa Nova",
    keywords: [
      "casa nova", "cadastrar casa", "cadastro domicílio", "cadastro domicilio", "primeira visita", "novo domicílio", "novo domicilio",
      "cadastrar uma casa", "novo imóvel", "novo imovel", "cadastrar residência", "cadastrar residencia", "adicionar casa",
      "adicionar domicílio", "adicionar domicilio", "adicionar imóvel", "adicionar imovel", "incluir casa", "incluir domicílio",
      "incluir domicilio", "abrir ficha de casa", "cadastrar endereço novo", "cadastrar endereco novo", "moradia nova",
      "construção nova", "construcao nova", "primeiro cadastro domiciliar", "ficha de domicílio", "ficha de domicilio", "nova moradia", "cadastrar habitação", "cadastrar habitacao"
    ],
    guideId: "g1",
    confirmationPhrase: "Entendi. Você quer saber como cadastrar uma casa nova no sistema. Posso continuar para o guia?"
  },
  {
    id: "i2",
    title: "2. Duplicação de Domicílio",
    keywords: [
      "casa cadastrada", "duplicação de domicílio", "duplicacao de domicilio", "já cadastrada", "ja cadastrada", "cadastrar de novo",
      "verificar casa", "casa já existe", "casa ja existe", "domicílio duplicado", "domicilio duplicado", "conferir se casa já tem cadastro",
      "saber se a casa está cadastrada", "imóvel duplicado", "imovel duplicado", "residência já cadastrada", "residencia ja cadastrada",
      "checar domicílio", "checar domicilio", "verificar imóvel", "verificar imovel", "duplicidade de casa", "duplicidade de domicílio",
      "duplicidade de domicilio", "mesmo endereço", "mesmo endereco", "casa repetida", "endereço repetido", "endereco repetido",
      "pesquisar casa existente", "consultar domicílio", "consultar domicilio"
    ],
    guideId: "g2",
    confirmationPhrase: "Entendi. Você quer saber se a casa já está cadastrada ou se precisa cadastrar de novo. Posso continuar para o guia?"
  },
  {
    id: "i3",
    title: "3. Erro de Endereço ou CEP",
    keywords: [
      "endereço não aparece", "endereco nao aparece", "erro de rua", "bairro errado", "cep", "logradouro", "endereço errado",
      "endereco errado", "cep não encontrado", "cep nao encontrado", "rua não encontrada", "rua nao encontrada", "rua não aparece",
      "rua nao aparece", "não acho a rua", "nao acho a rua", "corrigir endereço", "corrigir endereco", "alterar cep", "mudar rua",
      "nome da rua errado", "cep inválido", "cep invalido", "logradouro inexistente", "atualizar endereço da casa",
      "atualizar endereco da casa", "trocar bairro", "nome de rua inexistente", "rua sem cep", "editar logradouro", "corrigir domicílio", "corrigir domicilio"
    ],
    guideId: "g3",
    confirmationPhrase: "Entendi. Você quer saber o que fazer quando o endereço ou CEP não aparece certo. Posso continuar para o guia?"
  },
  {
    id: "i4",
    title: "4. Cadastrar Morador",
    keywords: [
      "cadastrar morador", "adicionar morador", "novo morador nessa casa", "cadastrar cidadão no domicílio", "cadastrar cidadao no domicilio",
      "incluir morador", "novo cidadão", "novo cidadao", "cadastrar pessoa na casa", "adicionar pessoa na casa", "adicionar cidadão",
      "adicionar cidadao", "cadastrar familiar", "adicionar parente", "novo morador", "morador novo", "inserir pessoa no domicílio",
      "inserir pessoa no domicilio", "cadastrar morador novo", "adicionar membro familiar", "vincular morador ao domicílio",
      "vincular morador ao domicilio", "colocar pessoa na casa", "registrar morador", "registrar cidadão", "registrar cidadao",
      "ficha individual nova", "cadastrar habitante"
    ],
    guideId: "g4",
    confirmationPhrase: "Entendi. Você quer saber como cadastrar um morador em uma casa já registrada. Posso continuar para o guia?"
  },
  {
    id: "i5",
    title: "5. Cadastro sem CPF ou Cartão SUS",
    keywords: [
      "sem cpf", "sem cartão do sus", "sem cartao do sus", "sem cns", "cadastrar sem documento", "não tem cpf", "nao tem cpf",
      "não tem cartão sus", "nao tem cartao sus", "perdeu os documentos", "sem documento nenhum", "pessoa sem cpf",
      "morador sem documento", "cadastrar sem cartão sus", "cadastrar sem cartao sus", "não tem cns", "nao tem cns",
      "cidadão sem documento", "cidadao sem documento", "sem certidão", "sem certidao", "sem rg", "cadastrar morador sem documento",
      "cadastrar sem identificação", "cadastrar sem identificacao", "pode cadastrar sem documento", "falta de documento",
      "sem número de sus", "sem numero de sus"
    ],
    guideId: "g5",
    confirmationPhrase: "Entendi. Você quer saber se pode cadastrar uma pessoa mesmo sem CPF nem cartão do SUS. Posso continuar para o guia?"
  },
  {
    id: "i6",
    title: "6. Verificar Duplicação de Cidadão",
    keywords: [
      "pessoa já cadastrada", "pessoa ja cadastrada", "verificar cadastro", "duplicação de pessoa", "duplicacao de pessoa",
      "já tá no sistema", "ja ta no sistema", "checar cidadão", "checar cidadao", "cidadão duplicado", "cidadao duplicado",
      "saber se pessoa já tem cadastro", "saber se pessoa ja tem cadastro", "conferir cadastro de morador", "pessoa repetida",
      "duplicidade de cidadão", "duplicidade de cidadao", "buscar cidadão existente", "buscar cidadao existente",
      "verificar se já existe", "verificar se ja existe", "consultar morador", "consultar cpf", "consultar cartão sus",
      "consultar cartao sus", "morador já registrado", "morador ja registrado", "evitar duplicar pessoa"
    ],
    guideId: "g6",
    confirmationPhrase: "Entendi. Você quer saber como verificar se a pessoa já está cadastrada no sistema. Posso continuar para o guia?"
  },
  {
    id: "i7",
    title: "7. Cadastrar Recém-nascido",
    keywords: [
      "recém-nascido", "recem-nascido", "recem nascido", "cadastrar bebê", "cadastrar bebe", "rn", "nasceu bebê", "nasceu bebe",
      "cadastrar recem nascido", "cadastrar recém nascido", "cadastrar criança nova", "cadastrar crianca nova", "novo bebê",
      "novo bebe", "bebezinho", "registro de recém-nascido", "registro de recem nascido", "declaracao de nascido vivo",
      "declaração de nascido vivo", "dnv", "adicionar bebê na família", "adicionar bebe na familia", "cadastrar filho novo",
      "bebê que acabou de nascer", "bebe que acabou de nascer", "incluir recém-nascido", "incluir recem-nascido", "cadastrar neném",
      "cadastrar nenem", "certidão de nascimento do bebê", "certidao de nascimento do bebe"
    ],
    guideId: "g7",
    confirmationPhrase: "Entendi. Você quer saber como cadastrar um recém-nascido no sistema. Posso continuar para o guia?"
  },
  {
    id: "i8",
    title: "8. Mudança de Morador (Saída)",
    keywords: [
      "mudou da casa", "pessoa se mudou", "saída de morador", "saida de morador", "retirar da casa", "mudança territorial",
      "mudanca territorial", "morador foi embora", "mudou de bairro", "mudou de cidade", "tirar pessoa da casa",
      "desvincular morador", "excluir morador da residência", "excluir morador da residencia", "mudou-se", "mudou se",
      "transferência de morador", "transferencia de morador", "registro de mudança", "registro de mudanca",
      "pessoa não mora mais aqui", "pessoa nao mora mais aqui", "saiu da residência", "saiu da residencia",
      "dar baixa no morador", "remover morador da família", "remover morador da familia", "mudança de endereço do morador",
      "mudanca de endereco do morador"
    ],
    guideId: "g8",
    confirmationPhrase: "Entendi. Você quer saber como registrar a mudança de uma pessoa que saiu da casa. Posso continuar para o guia?"
  },
  {
    id: "i9",
    title: "9. Chegada de Novo Morador",
    keywords: [
      "chegou novo morador", "novo morador na casa", "atualizar família", "atualizar familia", "adicionar parente",
      "morador novo", "veio morar aqui", "morador transferido", "parente que veio morar", "atualizar composição familiar",
      "atualizar composicao familiar", "entrou gente nova na casa", "membro novo na família", "membro novo na familia",
      "chegou parente", "incluir novo integrante", "atualizar dados da família", "atualizar dados da familia",
      "veio de outra cidade", "veio de outro bairro", "mudou pra essa casa", "chegada de morador",
      "nova pessoa na residência", "nova pessoa na residencia"
    ],
    guideId: "g9",
    confirmationPhrase: "Entendi. Você quer saber como atualizar a família quando chega um novo morador. Posso continuar para o guia?"
  },
  {
    id: "i10",
    title: "10. Registrar Óbito",
    keywords: [
      "registrar óbito", "registrar obito", "óbito", "obito", "morreu", "faleceu", "desligar por óbito", "desligar por obito",
      "dar baixa por morte", "falecimento", "declaração de óbito", "declaracao de obito", "certidão de óbito", "certidao de obito",
      "morador faleceu", "morador morreu", "informar falecimento", "pessoa morreu", "baixa por falecimento", "desvincular por óbito",
      "desvincular por obito", "registrar morte no esus", "registrar morte no tablet", "cidadão falecido", "cidadao falecido",
      "notificar óbito", "notificar obito", "baixa de cadastro por morte"
    ],
    guideId: "g10",
    confirmationPhrase: "Entendi. Você quer saber como registrar um óbito no e-SUS Território. Posso continuar para o guia?"
  },
  {
    id: "i11",
    title: "11. Registrar Visita Realizada",
    keywords: [
      "registro de visita", "fiz visita hoje", "registrar visita", "visita domiciliar", "marcar visita", "visita realizada",
      "visitei a casa", "lançar visita", "lancar visita", "preencher ficha de visita", "visita do dia", "salvar visita",
      "anotar visita no esus", "anotar visita no tablet", "visita feita", "registrar acompanhamento", "visitei o morador",
      "visitei o cidadão", "visitei o cidadao", "fazer visita no aplicativo", "concluir visita", "ficha de visita domiciliar",
      "registrar atendimento do acs", "visita efetuada", "visitar família", "visitar familia"
    ],
    guideId: "g11",
    confirmationPhrase: "Entendi. Você quer saber como registrar que fez uma visita hoje. Posso continuar para o guia?"
  },
  {
    id: "i12",
    title: "12. Escolher Motivo de Visita",
    keywords: [
      "motivo de visita", "qual motivo marcar", "opção de visita", "opcao de visita", "motivos da visita", "marcar na visita",
      "tipo de visita", "escolher motivo da visita", "o que marcar na visita", "opções de acompanhamento na visita",
      "opcoes de acompanhamento na visita", "qual desfecho marcar", "qual opção escolher na visita", "qual opcao escolher na visita",
      "motivo de consulta", "busca ativa na visita", "acompanhamento periódico", "acompanhamento periodico",
      "motivo do atendimento domiciliar", "como classificar a visita", "campo motivo de visita", "marcar gestante ou hipertenso na visita"
    ],
    guideId: "g12",
    confirmationPhrase: "Entendi. Você quer saber qual motivo de visita deve marcar no aplicativo. Posso continuar para o guia?"
  },
  {
    id: "i13",
    title: "13. Visita Ausente ou Recusada",
    keywords: [
      "não encontrei ninguém", "nao encontrei ninguem", "ninguém em casa", "ninguem em casa", "morador ausente",
      "visita recusada", "casa fechada", "não quiseram atender", "nao quiseram atender", "recusa de visita",
      "morador não atendeu", "morador nao atendeu", "casa trancada", "ninguém atendeu", "ninguem atendeu",
      "morador não estava", "morador nao estava", "visita não realizada", "visita nao realizada", "registrar casa fechada",
      "registrar morador ausente", "recusou a visita", "morador viajou", "não estava em casa", "nao estava em casa",
      "desfecho ausente", "desfecho recusada"
    ],
    guideId: "g13",
    confirmationPhrase: "Entendi. Você quer saber se precisa registrar a visita quando não encontra ninguém em casa. Posso continuar para o guia?"
  },
  {
    id: "i14",
    title: "14. Alerta de Cadastro Duplicado",
    keywords: [
      "mensagem de cadastro duplicado", "cadastro duplicado", "o que significa duplicado", "aviso duplicado",
      "alerta de duplicidade", "sistema deu duplicado", "erro de cadastro duplicado", "cpf já existe no sistema",
      "cpf ja existe no sistema", "cartão sus duplicado", "cartao sus duplicado", "apareceu cadastro duplicado",
      "aviso de morador duplicado", "registro duplicado", "tela de duplicidade", "por que deu duplicado",
      "o que fazer com cadastro duplicado", "notificação de duplicidade", "notificacao de duplicidade", "mensagem duplicada no esus"
    ],
    guideId: "g14",
    confirmationPhrase: "Entendi. Você quer saber o que significa a mensagem de cadastro duplicado. Posso continuar para o guia?"
  },
  {
    id: "i15",
    title: "15. Pessoas com Mesmo Nome",
    keywords: [
      "mesmo nome", "duas pessoas mesmo nome", "homônimo", "homonimo", "como saber se é a mesma", "como saber se e a mesma",
      "nome igual", "pessoas com nomes iguais", "dois moradores com mesmo nome", "homônimos no esus", "homonimos no esus",
      "como diferenciar homônimo", "como diferenciar homonimo", "como saber se é o mesmo morador", "conferir nome da mãe",
      "conferir nome da mae", "duvida de nome igual", "diferenciar cadastros", "mesmo nome e sobrenome",
      "homônimo no território", "homonimo no territorio", "confirmar identidade do morador"
    ],
    guideId: "g15",
    confirmationPhrase: "Entendi. Você quer saber como verificar se duas pessoas com o mesmo nome são a mesma pessoa. Posso continuar para o guia?"
  },
  {
    id: "i16",
    title: "16. Ruas com Nome Parecido",
    keywords: [
      "duas ruas com nome parecido", "rua parecida", "qual rua escolher", "nome de rua parecido", "logradouro parecido",
      "ruas com nomes iguais", "ruas parecidas", "duvida no nome da rua", "qual logradouro selecionar",
      "ruas com mesma nomenclatura", "avenida ou rua parecida", "endereços semelhantes", "enderecos semelhantes",
      "como escolher a rua certa", "bairro com ruas parecidas", "logradouro com mesmo nome", "confusão de nome de rua",
      "confusao de nome de rua", "escolher rua certa no tablet"
    ],
    guideId: "g16",
    confirmationPhrase: "Entendi. Você quer saber qual rua escolher quando há duas ruas com nomes parecidos. Posso continuar para o guia?"
  },
  {
    id: "i17",
    title: "17. Entender Inconsistência",
    keywords: [
      "tem uma inconsistência", "tem uma inconsistencia", "o que é inconsistência", "o que e inconsistencia",
      "sistema disse inconsistência", "sistema disse inconsistencia", "inconsistência no cadastro", "inconsistencia no cadastro",
      "o que significa inconsistência", "o que significa inconsistencia", "ficha inconsistente", "alerta de inconsistência",
      "alerta de inconsistencia", "dados inconsistentes", "aviso amarelo no esus", "cadastro com pendência",
      "cadastro com pendencia", "erro de inconsistência", "erro de inconsistencia", "campo obrigatório faltando",
      "campo obrigatorio faltando", "o que é dado inconsistente"
    ],
    guideId: "g17",
    confirmationPhrase: "Entendi. Você quer saber o que é uma inconsistência informada pelo sistema. Posso continuar para o guia?"
  },
  {
    id: "i18",
    title: "18. Corrigir Erro Pós-Sincronização",
    keywords: [
      "erro depois da sincronização", "erro depois da sincronizacao", "corrigir erro pós sincronização", "corrigir erro pos sincronizacao",
      "erro de sincronização", "erro de sincronizacao", "relatório de inconsistência pós sync", "relatorio de inconsistencia pos sync",
      "ficha rejeitada", "fichas rejeitadas", "erro após envio", "erro apos envio", "sincronizou com erro",
      "corrigir ficha recusada", "ficha devolvida", "relatório de erros da sincronização", "relatorio de erros da sincronizacao",
      "arrumar erro depois de sincronizar", "corrigir fichas pós sincronização", "corrigir fichas pos sincronizacao", "mensagem de erro na sincronização"
    ],
    guideId: "g18",
    confirmationPhrase: "Entendi. Você quer saber como corrigir um erro que apareceu após a sincronização. Posso continuar para o guia?"
  },
  {
    id: "i19",
    title: "19. Cadastros Não Aparecem na UBS",
    keywords: [
      "cadastros não aparecem", "cadastros nao aparecem", "não aparece no sistema da unidade", "nao aparece no sistema da unidade",
      "não foi pro pec", "nao foi pro pec", "cadastros sumiram", "falha no envio", "fichas não chegaram na ubs",
      "fichas nao chegaram na ubs", "enfermeira não achou o cadastro", "enfermeira nao achou o cadastro", "cadastro não subiu",
      "cadastro nao subiu", "dados não constam no pec", "dados nao constam no pec", "enviei mas não aparece",
      "enviei mas nao aparece", "cadastros sumiram do sistema", "fichas pendentes não entram no pec",
      "fichas pendentes nao entram no pec", "onde foram parar os cadastros", "sistema da ubs não recebeu"
    ],
    guideId: "g19",
    confirmationPhrase: "Entendi. Você quer saber por que seus cadastros não estão aparecendo no sistema da unidade. Posso continuar para o guia?"
  },
  {
    id: "i20",
    title: "20. Sincronizar Tablet com Unidade",
    keywords: [
      "como sincronizar", "sincronizar tablet", "enviar dados unidade", "sincronização com pec", "sincronizacao com pec",
      "enviar fichas", "passar dados pro pec", "sincronizar aplicativo", "descarregar tablet", "transmitir visitas",
      "enviar cadastros pra unidade", "enviar cadastros pra ubs", "sincronismo", "receber dados do pec", "como mandar as fichas",
      "sincronizar esus", "conectar no wifi da ubs para enviar", "atualizar base do tablet", "fazer sincronização diária", "fazer sincronizacao diaria"
    ],
    guideId: "g20",
    confirmationPhrase: "Entendi. Você quer saber como sincronizar os dados do tablet com a unidade. Posso continuar para o guia?"
  },

  // Intents Adicionais de Programas de Saúde
  {
    id: "i21",
    title: "Pré-natal",
    keywords: [
      "gestante", "grávida", "gravida", "gravidez", "prenatal", "pré-natal", "pre-natal", "buchuda", "neném", "nenem",
      "bebê", "bebe", "barriguda", "mulher grávida", "mulher gravida", "acompanhar gestante", "dum",
      "data da última menstruação", "data da ultima menstruacao", "caderneta da gestante", "consulta pré-natal",
      "consulta pre-natal", "semana gestacional", "enjoo de gravidez", "primeira consulta de gestante", "exames da gestante",
      "acompanhamento de gravidez", "acompanhar grávida", "acompanhar gravida"
    ],
    guideId: "g21",
    confirmationPhrase: "Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?"
  },
  {
    id: "i22",
    title: "Hiperdia",
    keywords: [
      "pressão", "pressao", "diabetes", "açúcar", "acucar", "hipertenso", "hipertensa", "diabético", "diabetico",
      "diabética", "diabetica", "hiperdia", "insulina", "remédio", "remedio", "pressão alta", "pressao alta",
      "glicose", "glicemia", "aferir pressão", "aferir pressao", "fita de glicemia", "pé diabético", "pe diabetico",
      "remédio de pressão", "remedio de pressao", "remédio de diabetes", "remedio de diabetes",
      "acompanhamento de pressão", "acompanhamento de pressao", "acompanhar hipertenso", "acompanhar diabético", "acompanhar diabetico", "hipertensão", "hipertensao"
    ],
    guideId: "g22",
    confirmationPhrase: "Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?"
  },
  {
    id: "i23",
    title: "Bolsa Família",
    keywords: [
      "bolsa família", "bolsa familia", "pesagem", "peso", "medir", "benefício", "beneficio", "auxílio", "auxilio",
      "pobreza", "pesagem do bolsa família", "pesagem do bolsa familia", "acompanhamento bolsa família",
      "acompanhamento bolsa familia", "pesar criança", "pesar crianca", "medir altura", "estatura",
      "condicionalidades de saúde", "condicionalidades de saude", "mapa do bolsa família", "mapa do bolsa familia",
      "auxílio brasil", "auxilio brasil", "vigência bolsa família", "vigencia bolsa familia", "pesar e medir",
      "cumprir condicionalidade", "beneficiário bolsa família", "beneficiario bolsa familia"
    ],
    guideId: "g23",
    confirmationPhrase: "Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?"
  },
  {
    id: "i24",
    title: "Visita RN (Cuidados)",
    keywords: [
      "cuidados rn", "umbigo", "pezinho", "visita recem nascido", "visita recém nascido", "visita recém-nascido",
      "visita recem-nascido", "teste do pezinho", "coto umbilical", "álcool 70 no umbigo", "alcool 70 no umbigo",
      "primeira visita do bebê", "primeira visita do bebe", "visita até 5 dias", "visita ate 5 dias",
      "amamentação do rn", "amamentacao do rn", "pega da mama", "leite materno exclusivo",
      "cuidados com o recém-nascido", "cuidados com o recem-nascido", "triagem neonatal",
      "visitar bebê recém-nascido", "visitar bebe recem-nascido", "visita neonatal", "icterícia no bebê", "ictericia no bebe"
    ],
    guideId: "g24",
    confirmationPhrase: "Entendi. Você quer saber sobre os cuidados na visita ao recém-nascido. Posso continuar para o guia?"
  },
  {
    id: "i25",
    title: "Dengue e Focos",
    keywords: [
      "dengue", "mosquito", "larva", "água parada", "agua parada", "quintal", "zika", "chikungunya", "chicungunha",
      "febre", "aedes aegypti", "aedes", "foco de dengue", "foco de mosquito", "caixa d'água destampada",
      "caixa dagua destampada", "prato de planta", "pneu velho", "larvas na água", "larvas na agua",
      "combate à dengue", "combate a dengue", "arbovirose", "arboviroses", "inspeção de quintal", "inspecao de quintal",
      "febre alta e dor no corpo", "manchas na pele dengue", "controle de vetores"
    ],
    guideId: "g25",
    confirmationPhrase: "Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?"
  },
  {
    id: "i26",
    title: "Saúde Mental",
    keywords: [
      "depressão", "depressao", "tristeza", "ansiedade", "surto", "caps", "remédio controlado", "remedio controlado",
      "saúde mental", "saude mental", "sofrimento", "sofrimento psíquico", "sofrimento psiquico", "ideação suicida",
      "ideacao suicida", "quer se matar", "crise de ansiedade", "ataque de pânico", "ataque de panico", "choro frequente",
      "isolamento", "angústia", "angustia", "apoio emocional", "escuta qualificada", "tarja preta", "psiquiatra",
      "psicólogo", "psicologo", "saúde emocional", "saude emocional", "problema de cabeça", "problema de cabeca"
    ],
    guideId: "g26",
    confirmationPhrase: "Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?"
  },
  {
    id: "i27",
    title: "Saúde do Idoso",
    keywords: [
      "velho", "velha", "vovó", "vovo", "vovô", "idoso", "idosa", "terceira idade", "melhor idade", "queda",
      "caiu", "risco de queda", "remédios", "remedios", "muitos remédios", "muitos remedios", "polifarmácia",
      "polifarmacia", "esquecimento", "memória", "memoria", "fragilidade", "caderneta do idoso", "idoso acamado",
      "idoso dependente", "cuidados com idoso", "acompanhar idoso", "avaliação da pessoa idosa", "avaliacao da pessoa idosa", "perda de equilíbrio", "perda de equilibrio"
    ],
    guideId: "g27",
    confirmationPhrase: "Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?"
  },
  {
    id: "i28",
    title: "Vacina atrasada",
    keywords: [
      "vacina", "atrasada", "gotinha", "injeção", "injecao", "calendário", "calendario", "faltando", "imunização",
      "imunizacao", "vacina atrasada", "vacinação em atraso", "vacinacao em atraso", "caderneta de vacina",
      "caderneta de vacinação", "caderneta de vacinacao", "doses pendentes", "vacinar criança", "vacinar crianca",
      "busca ativa de vacina", "faltou vacina", "imunizar", "sala de vacina", "penta atrasada", "polio", "sarampo",
      "febre amarela", "conferir caderneta de vacina", "atraso vacinal"
    ],
    guideId: "g28",
    confirmationPhrase: "Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?"
  },
  {
    id: "i29",
    title: "Planejamento Familiar",
    keywords: [
      "filho", "evitar", "camisinha", "anticoncepcional", "laqueadura", "vasectomia", "diu", "planejamento familiar",
      "planejamento reprodutivo", "método contraceptivo", "metodo contraceptivo", "evitar gravidez", "evitar filhos",
      "pílula", "pilula", "injeção anticoncepcional", "injecao anticoncepcional", "preservativo", "saúde reprodutiva",
      "saude reprodutiva", "ligadura de trompas", "reunião de planejamento familiar", "reuniao de planejamento familiar",
      "pegar camisinha", "anticoncepção", "anticoncepcao"
    ],
    guideId: "g29",
    confirmationPhrase: "Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?"
  },
  {
    id: "i30",
    title: "Pós-parto / Puerpério",
    keywords: [
      "pós-parto", "pos-parto", "pos parto", "puerpério", "puerperio", "resguardo", "quarentena", "depressão pós-parto",
      "depressao pos-parto", "depressao pos parto", "sangramento", "puérpera", "puerpera", "mulher que acabou de ter filho",
      "cuidados puerpério", "cuidados puerperio", "consulta de 42 dias", "revisão de parto", "revisao de parto",
      "dor na mama", "mastite", "fissura no peito", "leite empedrado", "lóquios", "loquios", "febre puerperal",
      "saúde da puérpera", "saude da puerpera"
    ],
    guideId: "g30",
    confirmationPhrase: "Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?"
  },
  {
    id: "i31",
    title: "TB e Hanseníase",
    keywords: [
      "tosse", "pulmão", "pulmao", "escarro", "mancha", "pele", "hanseníase", "hanseniase", "tuberculose", "perda de força",
      "perda de forca", "tosse de mais de 3 semanas", "tosse persistente", "tossindo muito", "tosse com sangue",
      "escarro com sangue", "baciloscopia", "exame de escarro", "mancha dormente", "mancha que não sente",
      "mancha que nao sente", "perda de sensibilidade", "lepra", "sintomático respiratório", "sintomatico respiratorio",
      "contato de tuberculose", "contato de hanseníase", "contato de hanseniase", "mancha branca ou vermelha"
    ],
    guideId: "g31",
    confirmationPhrase: "Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?"
  },
  {
    id: "i32",
    title: "Saúde Bucal",
    keywords: [
      "dente", "boca", "limpeza", "escova", "ferida na boca", "dentadura", "prótese", "protese", "gengiva", "saúde bucal",
      "saude bucal", "dor de dente", "cárie", "carie", "escovação", "escovacao", "fio dental", "dentista", "higiene bucal",
      "afta que não sara", "afta que nao sara", "ferida nos lábios", "ferida nos labios", "sangramento na gengiva",
      "limpeza da boca do bebê", "limpeza da boca do bebe", "câncer de boca", "cancer de boca", "consulta odontológica", "consulta odontologica"
    ],
    guideId: "g32",
    confirmationPhrase: "Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?"
  },
  {
    id: "i33",
    title: "Violência",
    keywords: [
      "apanhou", "violência", "violencia", "bater", "abuso", "hematoma", "medo", "agressão", "agressao", "doméstica",
      "domestica", "violência doméstica", "violencia domestica", "violência contra mulher", "violencia contra mulher",
      "violência infantil", "violencia infantil", "maus tratos", "maus-tratos", "marcas roxas", "queimadura suspeita",
      "abuso sexual", "criança espancada", "crianca espancada", "idoso agredido", "marido bateu",
      "notificação de violência", "notificacao de violencia", "escuta protegida", "machucado suspeito"
    ],
    guideId: "g33",
    confirmationPhrase: "Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?"
  },
  {
    id: "i34",
    title: "Riscos Ambientais",
    keywords: [
      "lixo", "esgoto", "água", "agua", "rato", "escorpião", "escorpiao", "entulho", "fossa", "poluição", "poluicao",
      "riscos ambientais", "saneamento básico", "saneamento basico", "água contaminada", "agua contaminada",
      "esgoto a céu aberto", "esgoto a ceu aberto", "fossa estourada", "animais peçonhentos", "animais peconhentos",
      "barbeiro", "doença de chagas", "doenca de chagas", "caramujo", "caramujo africano", "morcego", "lixo acumulado",
      "pragas urbanas", "entulho no quintal"
    ],
    guideId: "g34",
    confirmationPhrase: "Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?"
  },
  {
    id: "i35",
    title: "Cuidados Paliativos",
    keywords: [
      "cama", "leito", "morrer", "terminal", "câncer", "cancer", "ferida", "conforto", "paliativo", "cuidados paliativos",
      "paciente em leito", "paciente acamado", "doente terminal", "alívio da dor", "alivio da dor", "escaras",
      "úlcera de pressão", "ulcera de pressao", "mudar de posição", "mudar de posicao", "virar no leito",
      "banho no leito", "apoio ao cuidador", "doença sem cura", "doenca sem cura", "fim de vida", "suporte paliativo", "cuidar de acamado"
    ],
    guideId: "g35",
    confirmationPhrase: "Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?"
  },
  {
    id: "i36",
    title: "Mordida de Animal",
    keywords: [
      "mordida", "cachorro", "gato", "morcego", "raiva", "animal", "ferimento", "vacina raiva", "mordedura de animal",
      "mordida de cachorro", "mordida de cão", "mordida de cao", "mordida de gato", "mordida de morcego",
      "arranhão de gato", "arranhao de gato", "ataque de animal", "raiva humana", "soro antirrábico", "soro antirrabico",
      "vacina antirrábica", "vacina antirrabica", "lavar com água e sabão", "lavar com agua e sabao",
      "observar animal 10 dias", "agressão por animal", "agressao por animal", "mordida sangrando"
    ],
    guideId: "g36",
    confirmationPhrase: "Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?"
  },
  {
    id: "i37",
    title: "Saúde do Homem",
    keywords: [
      "homem", "próstata", "prostata", "novembro azul", "ereção", "erecao", "exame homem", "masculino", "saúde do homem",
      "saude do homem", "câncer de próstata", "cancer de prostata", "câncer de pênis", "cancer de penis",
      "exame de sangue psa", "psa", "pré-natal do parceiro", "pre-natal do parceiro", "saúde sexual masculina",
      "saude sexual masculina", "higiene íntima masculina", "higiene intima masculina", "testes rápidos homem",
      "testes rapidos homem", "atrair homem pra ubs", "atrair homem pra unidade", "exames de rotina do homem"
    ],
    guideId: "g37",
    confirmationPhrase: "Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?"
  },
  {
    id: "i38",
    title: "Drogas e Álcool",
    keywords: [
      "bebida", "droga", "cachaça", "cachaca", "vício", "vicio", "alcoolismo", "redução de danos", "reducao de danos",
      "fumando", "álcool", "alcool", "drogas", "usuário de drogas", "usuario de drogas", "beber demais", "viciado",
      "cigarro", "tabagismo", "caps ad", "caps-ad", "overdose", "abstinência", "abstinencia", "dependência química",
      "dependencia quimica", "crack", "maconha", "orientação de redução de danos", "orientacao de reducao de danos"
    ],
    guideId: "g38",
    confirmationPhrase: "Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?"
  },
  {
    id: "i39",
    title: "Prevenção Câncer",
    keywords: [
      "preventivo", "papanicolau", "mama", "mamografia", "câncer de mama", "cancer de mama", "câncer de colo",
      "cancer de colo", "câncer de colo de útero", "cancer de colo de utero", "câncer feminino", "cancer feminino",
      "autoexame da mama", "nódulo na mama", "nodulo na mama", "outubro rosa", "exame de lâmina", "exame de lamina",
      "exame citopatológico", "exame citopatologico", "rastreamento de câncer", "rastreamento de cancer",
      "fazer preventivo", "fazer mamografia", "saúde da mulher", "saude da mulher"
    ],
    guideId: "g39",
    confirmationPhrase: "Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?"
  },
  {
    id: "i40",
    title: "Gripe e COVID",
    keywords: [
      "gripe", "covid", "covid-19", "covid 19", "tosse", "falta de ar", "resfriado", "corona", "catarro", "sintomas gripais",
      "síndrome gripal", "sindrome gripal", "febre e tosse", "coriza", "dor de garganta", "teste de covid",
      "teste rápido covid", "teste rapido covid", "isolamento", "máscara", "mascara", "influenza", "vírus respiratório",
      "virus respiratorio", "dificuldade de respirar", "cansaço e falta de ar", "cansaco e falta de ar", "suspeita de covid"
    ],
    guideId: "g40",
    confirmationPhrase: "Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?"
  },
  {
    id: "i41",
    title: "Puericultura",
    keywords: [
      "desenvolvimento", "crescer", "puericultura", "aprendizado", "marcos", "sentar", "falar", "desenvolvimento infantil",
      "crescimento da criança", "crescimento da crianca", "marcos motores", "marcos do desenvolvimento",
      "caderneta da criança", "caderneta da crianca", "consulta de puericultura", "andar", "engatinhar",
      "estímulo infantil", "estimulo infantil", "peso e altura da criança", "peso e altura da crianca",
      "desenvolvimento da fala", "atraso no desenvolvimento", "acompanhar criança", "acompanhar crianca"
    ],
    guideId: "g41",
    confirmationPhrase: "Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?"
  },
  {
    id: "i42",
    title: "Avaliação IVCF-20 (Pessoa Idosa)",
    keywords: [
      "ivcf", "ivcf 20", "ivcf-20", "idoso fragil", "idoso frágil", "fragilidade idoso", "fragilidade da pessoa idosa",
      "vulnerabilidade idoso", "vulnerabilidade clínico-funcional", "vulnerabilidade clinico funcional", "questionario idoso",
      "questionário idoso", "questionário da pessoa idosa", "questionario da pessoa idosa", "avaliação idoso", "avaliacao idoso",
      "escore idoso", "preenchimento ivcf", "preencher ivcf", "aplicar ivcf", "como preencher ivcf", "como aplicar ivcf",
      "pontuação ivcf", "pontuacao ivcf", "idoso robusto", "risco de fragilização", "risco de fragilizacao", "avds idoso",
      "índice de vulnerabilidade", "indice de vulnerabilidade"
    ],
    guideId: "g42",
    confirmationPhrase: "Entendi. Você quer saber como preencher e aplicar o IVCF-20 da pessoa idosa no e-SUS Território. Posso continuar para o guia?"
  }
];

export const CATEGORIES: Category[] = [
  { id: "c1", title: "1. Cadastro de Domicílio", icon: "Home", intents: ["i1", "i2", "i3"] },
  { id: "c2", title: "2. Cadastro de Moradores", icon: "UserPlus", intents: ["i4", "i5", "i6", "i7"] },
  { id: "c3", title: "3. Atualização de Dados da Família", icon: "FileText", intents: ["i8", "i9", "i10"] },
  { id: "c4", title: "4. Registro da Visita Domiciliar", icon: "FileText", intents: ["i11", "i12", "i13"] },
  { id: "c5", title: "5. Problemas de Duplicação", icon: "Tablet", intents: ["i14", "i15", "i16"] },
  { id: "c6", title: "6. Problemas de Inconsistência", icon: "Tablet", intents: ["i17", "i18"] },
  { id: "c7", title: "7. Problemas de Sincronização", icon: "Tablet", intents: ["i19", "i20"] },
  { id: "c8", title: "8. Programas de Saúde e Prevenção", icon: "Home", intents: ["i21", "i22", "i23", "i24", "i25", "i26", "i27", "i28", "i29", "i30", "i31", "i32", "i33", "i34", "i35", "i36", "i37", "i38", "i39", "i40", "i41", "i42"] }
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

export const COMFORTING_MESSAGES = [
  "Calma, tá tudo bem! É super comum ter dúvidas na rotina de campo. Vamos ver juntos esse passo a passo mais detalhado para te ajudar!",
  "Não se avexe não! Todo mundo tem dúvida de vez em quando. Vamos olhar o passo a passo com calma que vai dar tudo certo.",
  "Fique tranquilo(a)! A rotina do ACS é cheia de detalhes. Separamos esse guia mastigadinho para facilitar seu trabalho.",
  "Sem aperreio! Dúvida a gente resolve é juntos. Dá uma olhada nesse passo a passo detalhado que preparamos para você.",
  "Respire fundo, tá tudo sob controle! O trabalho em campo é desafiador, mas você não está sozinho(a). Vamos passo a passo!",
  "Calma o coração! Ninguém nasce sabendo tudo. Vamos revisar esse procedimento detalhadamente juntinhos!",
  "Tá em dúvida? Avexado nada! Vamos conferir o passo a passo na prática pra você fazer bonito no território.",
  "Fique em paz! Ter dúvida mostra que você se importa em fazer o melhor pela comunidade. Vamos esclarecer isso agora mesmo!"
];