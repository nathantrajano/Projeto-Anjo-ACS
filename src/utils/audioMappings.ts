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

  // === CONFIRMAÇÃO DE INTENÇÕES (CONFORME AS 20 PERGUNTAS DO PDF + PROGRAMAS DE SAÚDE) ===
  "\"Entendi. Você quer saber como cadastrar uma casa nova no sistema. Posso continuar para o guia?\"":
    "confirmacao/cadastrar-casa-nova.mp3",
  "\"Entendi. Você quer saber se a casa já está cadastrada ou se precisa cadastrar de novo. Posso continuar para o guia?\"":
    "confirmacao/verificar-duplicacao-domicilio.mp3",
  "\"Entendi. Você quer saber o que fazer quando o endereço ou CEP não aparece certo. Posso continuar para o guia?\"":
    "confirmacao/corrigir-erro-endereco-cep.mp3",
  "\"Entendi. Você quer saber como cadastrar um morador em uma casa já registrada. Posso continuar para o guia?\"":
    "confirmacao/cadastrar-morador-domicilio.mp3",
  "\"Entendi. Você quer saber se pode cadastrar uma pessoa mesmo sem CPF nem cartão do SUS. Posso continuar para o guia?\"":
    "confirmacao/cadastrar-morador-sem-cpf-cns.mp3",
  "\"Entendi. Você quer saber como verificar se a pessoa já está cadastrada no sistema. Posso continuar para o guia?\"":
    "confirmacao/verificar-duplicacao-cidadao.mp3",
  "\"Entendi. Você quer saber como cadastrar um recém-nascido no sistema. Posso continuar para o guia?\"":
    "confirmacao/cadastrar-recem-nascido.mp3",
  "\"Entendi. Você quer saber como registrar a mudança de uma pessoa que saiu da casa. Posso continuar para o guia?\"":
    "confirmacao/registrar-mudanca-morador.mp3",
  "\"Entendi. Você quer saber como atualizar a família quando chega um novo morador. Posso continuar para o guia?\"":
    "confirmacao/atualizar-novo-morador-familia.mp3",
  "\"Entendi. Você quer saber como registrar um óbito no e-SUS Território. Posso continuar para o guia?\"":
    "confirmacao/registrar-obito-sistema.mp3",
  "\"Entendi. Você quer saber como registrar que fez uma visita hoje. Posso continuar para o guia?\"":
    "confirmacao/registrar-visita-domiciliar.mp3",
  "\"Entendi. Você quer saber qual motivo de visita deve marcar no aplicativo. Posso continuar para o guia?\"":
    "confirmacao/selecionar-motivo-visita.mp3",
  "\"Entendi. Você quer saber se precisa registrar a visita quando não encontra ninguém em casa. Posso continuar para o guia?\"":
    "confirmacao/registrar-visita-ausente-recusada.mp3",
  "\"Entendi. Você quer saber o que significa a mensagem de cadastro duplicado. Posso continuar para o guia?\"":
    "confirmacao/mensagem-cadastro-duplicado.mp3",
  "\"Entendi. Você quer saber como verificar se duas pessoas com o mesmo nome são a mesma pessoa. Posso continuar para o guia?\"":
    "confirmacao/diferenciar-pessoas-mesmo-nome.mp3",
  "\"Entendi. Você quer saber qual rua escolher quando há duas ruas com nomes parecidos. Posso continuar para o guia?\"":
    "confirmacao/escolher-logradouro-ruas-semelhantes.mp3",
  "\"Entendi. Você quer saber o que é uma inconsistência informada pelo sistema. Posso continuar para o guia?\"":
    "confirmacao/entender-inconsistencia-sistema.mp3",
  "\"Entendi. Você quer saber como corrigir um erro que apareceu após a sincronização. Posso continuar para o guia?\"":
    "confirmacao/corrigir-erro-pos-sincronizacao.mp3",
  "\"Entendi. Você quer saber por que seus cadastros não estão aparecendo no sistema da unidade. Posso continuar para o guia?\"":
    "confirmacao/cadastros-ausentes-sistema-unidade.mp3",
  "\"Entendi. Você quer saber como sincronizar os dados do tablet com a unidade. Posso continuar para o guia?\"":
    "confirmacao/sincronizar-dados-tablet-unidade.mp3",

  // Confirmações de Programas de Saúde
  "\"Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?\"": "confirmacao/pre-natal.mp3",
  "\"Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?\"": "confirmacao/hiperdia.mp3",
  "\"Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?\"": "confirmacao/bolsa-familia.mp3",
  "\"Entendi. Você quer saber sobre os cuidados na visita ao recém-nascido. Posso continuar para o guia?\"": "confirmacao/visita-recem-nascido.mp3",
  "\"Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?\"": "confirmacao/combate-dengue.mp3",
  "\"Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?\"": "confirmacao/saude-mental.mp3",
  "\"Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?\"": "confirmacao/saude-idoso.mp3",
  "\"Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?\"": "confirmacao/vacinacao-atraso.mp3",
  "\"Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?\"": "confirmacao/planejamento-familiar.mp3",
  "\"Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?\"": "confirmacao/puerperio.mp3",
  "\"Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?\"": "confirmacao/busca-ativa-tb-hanseniase.mp3",
  "\"Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?\"": "confirmacao/saude-bucal.mp3",
  "\"Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?\"": "confirmacao/identificar-violencia.mp3",
  "\"Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?\"": "confirmacao/riscos-ambientais.mp3",
  "\"Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?\"": "confirmacao/cuidados-paliativos.mp3",
  "\"Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?\"": "confirmacao/mordedura-animais.mp3",
  "\"Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?\"": "confirmacao/saude-homem.mp3",
  "\"Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?\"": "confirmacao/reducao-danos.mp3",
  "\"Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?\"": "confirmacao/prevencao-cancer.mp3",
  "\"Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?\"": "confirmacao/sintomas-gripais.mp3",
  "\"Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?\"": "confirmacao/desenvolvimento-infantil.mp3",
  "\"Entendi. Você quer saber como preencher e aplicar o IVCF-20 da pessoa idosa no e-SUS Território. Posso continuar para o guia?\"": "confirmacao/ivcf-20.mp3",

  // === GUIAS - TÍTULOS E RESUMOS (G1 A G20) ===
  "Cadastrar Casa Nova no Sistema": "guias/g1_title.mp3",
  "Passo a passo para realizar o cadastro inicial de um novo domicílio no e-SUS Território.": "guias/g1_summary.mp3",

  "Verificar Duplicação de Domicílio": "guias/g2_title.mp3",
  "Como checar se uma casa já foi cadastrada antes de criar um novo registro no e-SUS.": "guias/g2_summary.mp3",

  "Corrigir Erro de Endereço ou CEP": "guias/g3_title.mp3",
  "O que fazer quando a rua, o bairro ou o CEP não aparecem corretamente no aplicativo.": "guias/g3_summary.mp3",

  "Cadastrar Morador no Domicílio": "guias/g4_title.mp3",
  "Passo a passo para incluir e vincular um novo morador a um domicílio já existente.": "guias/g4_summary.mp3",

  "Cadastrar Morador sem CPF ou CNS": "guias/g5_title.mp3",
  "Como cadastrar um cidadão que não possui CPF nem Cartão do SUS no momento da visita.": "guias/g5_summary.mp3",

  "Verificar Duplicação de Cidadão": "guias/g6_title.mp3",
  "Como buscar e confirmar se a pessoa já possui cadastro no sistema antes de criar outro.": "guias/g6_summary.mp3",

  "Cadastrar Recém-Nascido": "guias/g7_title.mp3",
  "Orientações para cadastrar um recém-nascido no e-SUS Território vinculando-o à família.": "guias/g7_summary.mp3",

  "Registrar Mudança de Morador (Saída)": "guias/g8_title.mp3",
  "Como atualizar o sistema quando um morador se muda do domicílio ou da microárea.": "guias/g8_summary.mp3",

  "Atualizar Novo Morador na Família": "guias/g9_title.mp3",
  "Passo a passo para incluir um morador recém-chegado à composição familiar.": "guias/g9_summary.mp3",

  "Registrar Óbito no Sistema": "guias/g10_title.mp3",
  "Como proceder para dar baixa por óbito na ficha do cidadão com respeito e precisão.": "guias/g10_summary.mp3",

  "Registrar Visita Domiciliar": "guias/g11_title.mp3",
  "Como registrar corretamente uma visita domiciliar realizada no dia a dia.": "guias/g11_summary.mp3",

  "Selecionar Motivo da Visita Domiciliar": "guias/g12_title.mp3",
  "Orientações sobre qual motivo de visita marcar de acordo com o foco do atendimento.": "guias/g12_summary.mp3",

  "Registrar Visita com Morador Ausente ou Recusada": "guias/g13_title.mp3",
  "Como registrar a tentativa de visita quando a casa está fechada ou o morador recusa.": "guias/g13_summary.mp3",

  "Mensagem de Cadastro Duplicado": "guias/g14_title.mp3",
  "Entenda o alerta de cadastro duplicado e saiba como resolver sem perdas de dados.": "guias/g14_summary.mp3",

  "Diferenciar Pessoas com Mesmo Nome (Homônimos)": "guias/g15_title.mp3",
  "Como conferir data de nascimento, mãe e documentos para diferenciar cadastros homônimos.": "guias/g15_summary.mp3",

  "Escolher Logradouro em Ruas Semelhantes": "guias/g16_title.mp3",
  "Orientações para selecionar a rua correta quando houver nomes parecidos na lista oficial.": "guias/g16_summary.mp3",

  "Entender Inconsistência no Sistema": "guias/g17_title.mp3",
  "O que é uma inconsistência de dados no e-SUS Território e como identificá-la.": "guias/g17_summary.mp3",

  "Corrigir Erro Pós-Sincronização": "guias/g18_title.mp3",
  "Passo a passo para localizar e corrigir fichas com erro devolvidas após sincronizar.": "guias/g18_summary.mp3",

  "Cadastros Ausentes no Sistema da Unidade": "guias/g19_title.mp3",
  "Por que cadastros feitos no tablet ainda não aparecem no PEC da unidade e como resolver.": "guias/g19_summary.mp3",

  "Sincronizar Dados do Tablet com a Unidade": "guias/g20_title.mp3",
  "Passo a passo completo para sincronizar os dados do tablet com o PEC da unidade.": "guias/g20_summary.mp3",


  // === PASSOS DOS GUIAS (G1 A G20) ===
  // G1 - Cadastrar Casa Nova no Sistema
  "Acesse o Território. Abra o aplicativo e-SUS Território no tablet e selecione a aba Domicílios.": "passos/g1_step1.mp3",
  "Novo Domicílio. Toque no botão '+' e selecione a opção 'Adicionar Domicílio'.": "passos/g1_step2.mp3",
  "Endereço e Número. Informe o CEP, logradouro, número do imóvel e complemento se houver.": "passos/g1_step3.mp3",
  "Características do Imóvel. Preencha o tipo de imóvel, abastecimento de água e destino do lixo.": "passos/g1_step4.mp3",
  "Salvar Cadastro. Confirme os dados e toque em Salvar para registrar o domicílio na base local.": "passos/g1_step5.mp3",

  // G2 - Verificar Duplicação de Domicílio
  "Pesquisar Endereço. Na aba Domicílios, use a barra de busca e digite o nome da rua e o número da casa.": "passos/g2_step1.mp3",
  "Conferir Complemento. Verifique se o imóvel possui complementos como casa A, casa B ou bloco.": "passos/g2_step2.mp3",
  "Consultar Lista da Microárea. Filtre a busca pela sua microárea para listar todas as casas da quadra.": "passos/g2_step3.mp3",
  "Confirmar Antes de Criar. Se a casa já aparecer na lista, abra a ficha existente em vez de cadastrar novamente.": "passos/g2_step4.mp3",

  // G3 - Corrigir Erro de Endereço ou CEP
  "Buscar por Nome Similar. Digite parte do nome da rua na busca de logradouro para localizar a grafia cadastrada.": "passos/g3_step1.mp3",
  "Usar CEP Geral do Município. Se o CEP específico não funcionar, tente o CEP geral da cidade cadastrado na UBS.": "passos/g3_step2.mp3",
  "Editar Ficha de Domicílio. Se o erro for em casa existente, abra o domicílio e toque no lápis para atualizar o endereço.": "passos/g3_step3.mp3",
  "Anotar Logradouro Ausente. Caso a rua não exista na lista oficial, anote e informe à coordenação para atualização da base.": "passos/g3_step4.mp3",

  // G4 - Cadastrar Morador no Domicílio
  "Abrir o Domicílio. Localize a casa no aplicativo e toque na ficha do domicílio correspondente.": "passos/g4_step1.mp3",
  "Adicionar Morador. Toque na opção 'Adicionar Família' ou 'Adicionar Morador' dentro da casa.": "passos/g4_step2.mp3",
  "Preencher Dados Pessoais. Insira nome completo, data de nascimento, sexo e nome da mãe.": "passos/g4_step3.mp3",
  "Vincular ao Responsável. Defina o parentesco do morador em relação ao responsável familiar.": "passos/g4_step4.mp3",
  "Salvar Morador. Confirme as informações e salve para concluir a inclusão do morador.": "passos/g4_step5.mp3",

  // G5 - Cadastrar Morador sem CPF ou CNS
  "Prosseguir sem Documento. Sim, é possível realizar o cadastro no e-SUS mesmo sem o CPF ou CNS do morador.": "passos/g5_step1.mp3",
  "Usar CNS se Houver. Se a pessoa não tiver CPF, verifique se ela possui o Cartão Nacional do SUS.": "passos/g5_step2.mp3",
  "Preencher Nome e Nascimento. Se não houver nenhum documento, registre com precisão o nome completo e a data de nascimento.": "passos/g5_step3.mp3",
  "Solicitar Atualização Posterior. Oriente a família a providenciar o documento e levar à unidade para atualizar depois.": "passos/g5_step4.mp3",

  // G6 - Verificar Duplicação de Cidadão
  "Buscar por CPF ou CNS. Utilize o campo de busca digitando o CPF ou o número do Cartão SUS da pessoa.": "passos/g6_step1.mp3",
  "Buscar por Nome e Nascimento. Se não tiver o documento, busque pelo nome completo e data de nascimento.": "passos/g6_step2.mp3",
  "Conferir Nome da Mãe. Compare o nome da mãe no cadastro encontrado para confirmar se é a mesma pessoa.": "passos/g6_step3.mp3",
  "Vincular Cadastro Existente. Se o cadastro for encontrado, apenas vincule a pessoa ao domicílio atual.": "passos/g6_step4.mp3",

  // G7 - Cadastrar Recém-Nascido
  "Abrir a Ficha Familiar. Acesse o domicílio cadastrado onde a mãe ou responsável reside.": "passos/g7_step1.mp3",
  "Adicionar Novo Membro. Toque em Adicionar Morador e selecione a opção de dependente ou filho.": "passos/g7_step2.mp3",
  "Preencher Registro de Nascimento. Informe a data de nascimento, peso ao nascer e a Declaração de Nascido Vivo se houver.": "passos/g7_step3.mp3",
  "Vincular à Mãe. Selecione o cadastro da mãe no campo correspondente para garantir o vínculo.": "passos/g7_step4.mp3",
  "Salvar e Agendar Visita. Salve a ficha do recém-nascido e já programe a primeira visita de puericultura.": "passos/g7_step5.mp3",

  // G8 - Registrar Mudança de Morador (Saída)
  "Acesse o Cadastro do Cidadão. Localize o morador dentro da ficha do domicílio atual.": "passos/g8_step1.mp3",
  "Opções do Morador. Toque nos três pontinhos ou no ícone de edição ao lado do nome da pessoa.": "passos/g8_step2.mp3",
  "Selecionar Mudança de Território. Escolha a opção 'Mudou-se' ou 'Saída do Domicílio'.": "passos/g8_step3.mp3",
  "Confirmar Desvinculação. Confirme a alteração para desvincular o morador daquela residência.": "passos/g8_step4.mp3",

  // G9 - Atualizar Novo Morador na Família
  "Localizar a Residência. Abra a ficha da casa onde o novo morador passou a residir.": "passos/g9_step1.mp3",
  "Verificar se já tem Cadastro. Pesquise se a pessoa veio de outro bairro e já possui registro no sistema.": "passos/g9_step2.mp3",
  "Adicionar ou Transferir. Se já tiver cadastro, faça a transferência de endereço; se não tiver, crie um novo.": "passos/g9_step3.mp3",
  "Atualizar Relação Familiar. Ajuste o grau de parentesco e salve a nova formação da família.": "passos/g9_step4.mp3",

  // G10 - Registrar Óbito no Sistema
  "Localizar Ficha do Cidadão. Busque pelo nome ou CPF da pessoa falecida no aplicativo.": "passos/g10_step1.mp3",
  "Editar Cadastro Individual. Toque no ícone de lápis para alterar os dados da ficha.": "passos/g10_step2.mp3",
  "Marcar Opção Óbito. Selecione o campo de saída por 'Óbito' e informe a data do falecimento se solicitada.": "passos/g10_step3.mp3",
  "Salvar e Notificar Equipe. Salve a ficha e comunique a equipe de saúde para encerramento de acompanhamentos.": "passos/g10_step4.mp3",

  // G11 - Registrar Visita Domiciliar
  "Localizar Cidadão ou Família. Busque a pessoa ou a casa na sua lista de microárea.": "passos/g11_step1.mp3",
  "Iniciar Ficha de Visita. Toque no botão 'Registrar Visita' no perfil do cidadão.": "passos/g11_step2.mp3",
  "Marcar Motivos e Ações. Selecione os motivos da visita e ações realizadas no momento.": "passos/g11_step3.mp3",
  "Salvar Visita. Confirme o desfecho como 'Visita Realizada' e toque em Salvar.": "passos/g11_step4.mp3",

  // G12 - Selecionar Motivo da Visita Domiciliar
  "Cadastramento e Atualização. Marque 'Cadastramento/Atualização' quando o foco for coletar dados cadastrais.": "passos/g12_step1.mp3",
  "Acompanhamento Continuado. Marque 'Gestante', 'Hipertensão', 'Diabetes' ou 'Criança' conforme o público atendido.": "passos/g12_step2.mp3",
  "Busca Ativa e Convites. Marque 'Busca Ativa' para vacinas atrasadas, consultas faltosas ou exames pendentes.": "passos/g12_step3.mp3",
  "Controle Ambiental. Marque 'Controle de Vetores' ao realizar inspeções de dengue e saneamento.": "passos/g12_step4.mp3",

  // G13 - Registrar Visita com Morador Ausente ou Recusada
  "Sim, Deve Registrar. É essencial registrar no sistema mesmo quando não encontrar ninguém em casa.": "passos/g13_step1.mp3",
  "Abrir Ficha de Visita. Selecione o domicílio ou o cidadão que tentou visitar.": "passos/g13_step2.mp3",
  "Selecionar Desfecho Ausente. No campo Desfecho, escolha a opção 'Ausente' se o imóvel estiver fechado.": "passos/g13_step3.mp3",
  "Selecionar Desfecho Recusada. Se o morador não quiser atender, escolha a opção 'Recusada' e salve.": "passos/g13_step4.mp3",

  // G14 - Mensagem de Cadastro Duplicado
  "Compreender o Alerta. Esta mensagem indica que o CPF ou CNS digitado já existe na base de dados da UBS.": "passos/g14_step1.mp3",
  "Não Criar Novo Cadastro. Não tente forçar um novo cadastro alterando letras do nome ou números.": "passos/g14_step2.mp3",
  "Buscar Cadastro Existente. Volte à tela de busca e pesquise pelo CPF para carregar a ficha oficial.": "passos/g14_step3.mp3",
  "Vincular à Família. Abra a ficha encontrada e apenas atualize o endereço para o domicílio atual.": "passos/g14_step4.mp3",

  // G15 - Diferenciar Pessoas com Mesmo Nome (Homônimos)
  "Verificar Data de Nascimento. Compare a data de nascimento exata dos dois cadastros para conferir se são pessoas diferentes.": "passos/g15_step1.mp3",
  "Conferir Nome da Mãe. Examine o nome completo da mãe registrado em cada uma das fichas.": "passos/g15_step2.mp3",
  "Checar Número de CPF e CNS. Verifique o número do CPF ou do Cartão do SUS de cada cidadão.": "passos/g15_step3.mp3",
  "Confirmar Endereço do Imóvel. Certifique-se em qual casa e microárea cada um dos homônimos reside.": "passos/g15_step4.mp3",

  // G16 - Escolher Logradouro em Ruas Semelhantes
  "Evitar Abreviações. Procure o nome por extenso na lista de logradouros em vez de usar siglas incomuns.": "passos/g16_step1.mp3",
  "Conferir o Bairro. Verifique a qual bairro a rua pertence na lista de opções exibida.": "passos/g16_step2.mp3",
  "Padronizar com a Equipe. Consulte os colegas ACS da mesma microárea para usar o mesmo padrão de rua.": "passos/g16_step3.mp3",
  "Selecionar Código de Logradouro. Escolha a rua que possui o código CEP oficial cadastrado na UBS.": "passos/g16_step4.mp3",

  // G17 - Entender Inconsistência no Sistema
  "O que é Inconsistência?. Inconsistência ocorre quando faltam dados obrigatórios ou há dados conflitantes na ficha.": "passos/g17_step1.mp3",
  "Exemplos Comuns. CPF inválido, responsável familiar não indicado ou ausência de vínculo de parentesco.": "passos/g17_step2.mp3",
  "Impacto no Trabalho. Fichas com inconsistência não são validadas pelo Ministério da Saúde até serem corrigidas.": "passos/g17_step3.mp3",
  "Como Identificar. O aplicativo exibe um alerta amarelo ou vermelho indicando a ficha com pendência.": "passos/g17_step4.mp3",

  // G18 - Corrigir Erro Pós-Sincronização
  "Verificar Relatório de Sincronização. Após sincronizar, abra a aba Sincronização e veja a lista de fichas rejeitadas.": "passos/g18_step1.mp3",
  "Ler a Mensagem do Erro. Toque na ficha rejeitada para ler exatamente qual campo precisa de correção.": "passos/g18_step2.mp3",
  "Editar os Campos Indicados. Abra a ficha do cidadão ou domicílio e corrija a informação incorreta.": "passos/g18_step3.mp3",
  "Sincronizar Novamente. Após salvar as correções, faça uma nova sincronização para reenviar as fichas.": "passos/g18_step4.mp3",

  // G19 - Cadastros Ausentes no Sistema da Unidade
  "Verificar Fichas Pendentes. Abra o menu Sincronização no tablet e confira se há fichas acumuladas sem enviar.": "passos/g19_step1.mp3",
  "Checar Conexão Wi-Fi da UBS. Certifique-se de que o tablet está conectado à rede de internet oficial da UBS.": "passos/g19_step2.mp3",
  "Aguardar Processamento do PEC. O sistema da unidade pode levar alguns minutos para importar o lote recebido.": "passos/g19_step3.mp3",
  "Solicitar Reimportação. Se as fichas foram enviadas mas não aparecem, peça ao digitador ou enfermeiro para checar o lote no PEC.": "passos/g19_step4.mp3",

  // G20 - Sincronizar Dados do Tablet com a Unidade
  "Conectar ao Wi-Fi da UBS. Ao chegar na Unidade de Saúde, ligue o Wi-Fi do tablet e conecte à rede autorizada.": "passos/g20_step1.mp3",
  "Abrir o Menu Sincronização. Abra o aplicativo e-SUS Território e toque no menu lateral na opção 'Sincronizar'.": "passos/g20_step2.mp3",
  "Iniciar o Envio de Fichas. Toque no botão 'Enviar Dados' e aguarde a barra de progresso ser concluída.": "passos/g20_step3.mp3",
  "Receber Atualizações da Base. Após enviar, toque em 'Receber Dados' para baixar novidades do PEC no seu tablet.": "passos/g20_step4.mp3",
  "Confirmar Mensagem de Sucesso. Certifique-se de que a mensagem 'Sincronização realizada com sucesso' foi exibida.": "passos/g20_step5.mp3",

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

  // Busca parcial (útil para textos que podem variar ligeiramente)
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
