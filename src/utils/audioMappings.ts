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

  // === CONFIRMAÇÃO DE INTENÇÕES ===
  // G1 - Cadastrar Casa Nova no Sistema
  "\"Entendi. Você quer saber como cadastrar uma casa nova no sistema. Posso continuar para o guia?\"":
    "confirmacao/cadastro-casa-nova.mp3",
  "Entendi. Você quer saber como cadastrar uma casa nova no sistema. Posso continuar para o guia?":
    "confirmacao/cadastro-casa-nova.mp3",

  // G2 - Verificar Duplicação de Domicílio
  "\"Entendi. Você quer saber como checar se uma casa já foi cadastrada. Posso continuar para o guia?\"":
    "confirmacao/verificar-duplicacao-domicilio.mp3",
  "Entendi. Você quer saber como checar se uma casa já foi cadastrada. Posso continuar para o guia?":
    "confirmacao/verificar-duplicacao-domicilio.mp3",



  // G3 - Corrigir Erro de Endereço ou CEP
  "\"Entendi. Você quer saber o que fazer quando o endereço ou CEP não aparece certo. Posso continuar para o guia?\"":
    "confirmacao/erro-endereco-cep.mp3",
  "Entendi. Você quer saber o que fazer quando o endereço ou CEP não aparece certo. Posso continuar para o guia?":
    "confirmacao/erro-endereco-cep.mp3",

  // G8 - Registrar Mudança de Morador (Saída)
  "\"Entendi. Você quer saber como registrar a mudança de uma pessoa que saiu da casa. Posso continuar para o guia?\"":
    "confirmacao/mudanca-morador-saida.mp3",
  "Entendi. Você quer saber como registrar a mudança de uma pessoa que saiu da casa. Posso continuar para o guia?":
    "confirmacao/mudanca-morador-saida.mp3",

  // G11 - Registrar Visita Domiciliar
  "\"Entendi. Você quer saber como registrar que fez uma visita hoje. Posso continuar para o guia?\"":
    "confirmacao/registrar-visita-hoje.mp3",
  "Entendi. Você quer saber como registrar que fez uma visita hoje. Posso continuar para o guia?":
    "confirmacao/registrar-visita-hoje.mp3",

  // G21 - Acompanhamento de Pré-natal
  "\"Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?\"": "confirmacao/pre-natal.mp3",
  "Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?": "confirmacao/pre-natal.mp3",

  // G22 - Acompanhamento Hiperdia
  "\"Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?\"": "confirmacao/hiperdia.mp3",
  "Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?": "confirmacao/hiperdia.mp3",

  // G23 - Acompanhamento Bolsa Família
  "\"Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?\"": "confirmacao/bolsa-familia.mp3",
  "Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?": "confirmacao/bolsa-familia.mp3",

  // G24 - Visita ao Recém-nascido (Cuidados)
  // TODO: Regravar este áudio. O arquivo antigo ("visita-recem-nascido.mp3") dizia "sobre a visita ao recém-nascido" (sem "os cuidados na").
  // "\"Entendi. Você quer saber sobre os cuidados na visita ao recém-nascido. Posso continuar para o guia?\"": "confirmacao/cuidados-visita-recem-nascido.mp3",
  // "Entendi. Você quer saber sobre os cuidados na visita ao recém-nascido. Posso continuar para o guia?": "confirmacao/cuidados-visita-recem-nascido.mp3",

  // G25 - Prevenção de Arboviroses
  "\"Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?\"": "confirmacao/combate-dengue.mp3",
  "Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?": "confirmacao/combate-dengue.mp3",

  // G26 - Saúde Mental na Comunidade
  "\"Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?\"": "confirmacao/saude-mental.mp3",
  "Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?": "confirmacao/saude-mental.mp3",

  // G27 - Saúde do Idoso
  "\"Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?\"": "confirmacao/saude-idoso.mp3",
  "Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?": "confirmacao/saude-idoso.mp3",

  // G28 - Vacinação em Atraso
  "\"Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?\"": "confirmacao/vacinacao-atraso.mp3",
  "Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?": "confirmacao/vacinacao-atraso.mp3",

  // G29 - Planejamento Familiar
  "\"Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?\"": "confirmacao/planejamento-familiar.mp3",
  "Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?": "confirmacao/planejamento-familiar.mp3",

  // G30 - Cuidados no Puerpério
  "\"Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?\"": "confirmacao/puerperio.mp3",
  "Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?": "confirmacao/puerperio.mp3",

  // G31 - Sintomáticos Respiratórios e Pele
  "\"Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?\"": "confirmacao/busca-ativa-tb-hanseniase.mp3",
  "Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?": "confirmacao/busca-ativa-tb-hanseniase.mp3",

  // G32 - Orientações de Saúde Bucal
  "\"Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?\"": "confirmacao/saude-bucal.mp3",
  "Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?": "confirmacao/saude-bucal.mp3",

  // G33 - Identificação de Violência
  "\"Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?\"": "confirmacao/identificar-violencia.mp3",
  "Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?": "confirmacao/identificar-violencia.mp3",

  // G34 - Saneamento e Meio Ambiente
  "\"Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?\"": "confirmacao/riscos-ambientais.mp3",
  "Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?": "confirmacao/riscos-ambientais.mp3",

  // G35 - Apoio em Cuidados Paliativos
  "\"Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?\"": "confirmacao/cuidados-paliativos.mp3",
  "Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?": "confirmacao/cuidados-paliativos.mp3",

  // G36 - Mordedura e Raiva Humana
  "\"Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?\"": "confirmacao/mordedura-animais.mp3",
  "Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?": "confirmacao/mordedura-animais.mp3",

  // G37 - Saúde do Homem
  "\"Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?\"": "confirmacao/saude-homem.mp3",
  "Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?": "confirmacao/saude-homem.mp3",

  // G38 - Álcool e Drogas (Redução de Danos)
  "\"Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?\"": "confirmacao/reducao-danos.mp3",
  "Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?": "confirmacao/reducao-danos.mp3",

  // G39 - Prevenção de Câncer Feminino
  "\"Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?\"": "confirmacao/prevencao-cancer.mp3",
  "Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?": "confirmacao/prevencao-cancer.mp3",

  // G40 - Sintomas Gripais e COVID
  "\"Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?\"": "confirmacao/sintomas-gripais.mp3",
  "Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?": "confirmacao/sintomas-gripais.mp3",

  // G41 - Desenvolvimento Infantil
  "\"Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?\"": "confirmacao/desenvolvimento-infantil.mp3",
  "Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?": "confirmacao/desenvolvimento-infantil.mp3",

  // G42 - Avaliação IVCF-20 (Pessoa Idosa)
  "\"Entendi. Você quer saber como preencher e aplicar o IVCF-20 da pessoa idosa no e-SUS Território. Posso continuar para o guia?\"": "confirmacao/ivcf-20-idoso.mp3",
  "Entendi. Você quer saber como preencher e aplicar o IVCF-20 da pessoa idosa no e-SUS Território. Posso continuar para o guia?": "confirmacao/ivcf-20-idoso.mp3",

  // === GUIAS - TÍTULOS E RESUMOS ===
  // G1 - Cadastrar Casa Nova no Sistema
  "Cadastrar Casa Nova no Sistema": "guias/g1_title.mp3",
  "Passo a passo para realizar o cadastro inicial de um novo domicílio no e-SUS Território.": "guias/g1_summary.mp3",

  // G2 - Verificar Duplicação de Domicílio
  "Verificar Duplicação de Domicílio": "guias/g2_title.mp3",
  "Como checar se uma casa já foi cadastrada antes de criar um novo registro no e-SUS.": "guias/g2_summary.mp3",

  // erro de audio * G3 - Corrigir Erro de Endereço ou CEP
  "Corrigir Erro de Endereço ou CEP": "guias/g3_title.mp3",
  "O que fazer quando a rua, o bairro ou o CEP não aparecem corretamente no aplicativo.": "guias/g3_summary.mp3",

  // G4 - Cadastrar Morador no Domicílio
  "Cadastrar Morador no Domicílio": "guias/g4_title.mp3",
  "Passo a passo para incluir e vincular um novo morador a um domicílio já existente.": "guias/g4_summary.mp3",

  // G5 - Cadastrar Morador sem CPF ou CNS
  "Cadastrar Morador sem CPF ou CNS": "guias/g5_title.mp3",
  "Como cadastrar um cidadão que não possui CPF nem Cartão do SUS no momento da visita.": "guias/g5_summary.mp3",

  // G6 - Verificar Duplicação de Cidadão
  "Verificar Duplicação de Cidadão": "guias/g6_title.mp3",
  "Como buscar e confirmar se a pessoa já possui cadastro no sistema antes de criar outro.": "guias/g6_summary.mp3",

  // G7 - Cadastrar Recém-Nascido
  "Cadastrar Recém-Nascido": "guias/g7_title.mp3",
  "Orientações para cadastrar um recém-nascido no e-SUS Território vinculando-o à família.": "guias/g7_summary.mp3",

  // G8 - Registrar Mudança de Morador (Saída)
  "Registrar Mudança de Morador (Saída)": "guias/g8_title.mp3",
  "Como atualizar o sistema quando um morador se muda do domicílio ou da microárea.": "guias/g8_summary.mp3",

  // G9 - Atualizar Novo Morador na Família
  "Atualizar Novo Morador na Família": "guias/g9_title.mp3",
  "Passo a passo para incluir um morador recém-chegado à composição familiar.": "guias/g9_summary.mp3",

  // G10 - Registrar Óbito no Sistema
  "Registrar Óbito no Sistema": "guias/g10_title.mp3",
  "Como proceder para dar baixa por óbito na ficha do cidadão com respeito e precisão.": "guias/g10_summary.mp3",

  // G11 - Registrar Visita Domiciliar
  "Registrar Visita Domiciliar": "guias/g11_title.mp3",
  "Como registrar corretamente uma visita domiciliar realizada no dia a dia.": "guias/g11_summary.mp3",

  // * G12 - Selecionar Motivo da Visita Domiciliar
  "Selecionar Motivo da Visita Domiciliar": "guias/g12_title.mp3",
  "Orientações sobre qual motivo de visita marcar de acordo com o foco do atendimento.": "guias/g12_summary.mp3",

  // * G13 - Registrar Visita com Morador Ausente ou Recusada
  "Registrar Visita com Morador Ausente ou Recusada": "guias/g13_title.mp3",
  "Como registrar a tentativa de visita quando a casa está fechada ou o morador recusa.": "guias/g13_summary.mp3",

  // * G14 - Mensagem de Cadastro Duplicado
  "Mensagem de Cadastro Duplicado": "guias/g14_title.mp3",
  "Entenda o alerta de cadastro duplicado e saiba como resolver sem perdas de dados.": "guias/g14_summary.mp3",

  // * G15 - Diferenciar Pessoas com Mesmo Nome (Homônimos)
  "Diferenciar Pessoas com Mesmo Nome (Homônimos)": "guias/g15_title.mp3",
  "Como conferir data de nascimento, mãe e documentos para diferenciar cadastros homônimos.": "guias/g15_summary.mp3",

  // * G16 - Escolher Logradouro em Ruas Semelhantes
  "Escolher Logradouro em Ruas Semelhantes": "guias/g16_title.mp3",
  "Orientações para selecionar a rua correta quando houver nomes parecidos na lista oficial.": "guias/g16_summary.mp3",

  // * G17 - Entender Inconsistência no Sistema
  "Entender Inconsistência no Sistema": "guias/g17_title.mp3",
  "O que é uma inconsistência de dados no e-SUS Território e como identificá-la.": "guias/g17_summary.mp3",

  // * G18 - Corrigir Erro Pós-Sincronização
  "Corrigir Erro Pós-Sincronização": "guias/g18_title.mp3",
  "Passo a passo para localizar e corrigir fichas com erro devolvidas após sincronizar.": "guias/g18_summary.mp3",

  // * G19 - Cadastros Ausentes no Sistema da Unidade
  "Cadastros Ausentes no Sistema da Unidade": "guias/g19_title.mp3",
  "Por que cadastros feitos no tablet ainda não aparecem no PEC da unidade e como resolver.": "guias/g19_summary.mp3",

  // * G20 - Sincronizar Dados do Tablet com a Unidade
  "Sincronizar Dados do Tablet com a Unidade": "guias/g20_title.mp3",
  "Passo a passo completo para sincronizar os dados do tablet com o PEC da unidade.": "guias/g20_summary.mp3",

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

  // * G42 - Aplicação do IVCF-20 (Saúde da Pessoa Idosa)
  "Aplicação do IVCF-20 (Saúde da Pessoa Idosa)": "guias/g42_title.mp3",
  "Orientações do Ministério da Saúde para preenchimento e aplicação do Índice de Vulnerabilidade Clínico-Funcional (IVCF-20) no e-SUS Território.": "guias/g42_summary.mp3",

  // === PASSOS DOS GUIAS ===
  // G1 - Cadastrar Casa Nova no Sistema
  "Acesse o Território. Abra o aplicativo e-SUS Território no tablet e selecione a aba Domicílios.": "passos/g1_step1.mp3",
  "Novo Domicílio. Toque no botão '+' e selecione a opção 'Adicionar Domicílio'.": "passos/g1_step2.mp3",
  "Endereço e Número. Informe o CEP, logradouro, número do imóvel e complemento se houver.": "passos/g1_step3.mp3",
  "Características do Imóvel. Preencha o tipo de imóvel, abastecimento de água e destino do lixo.": "passos/g1_step4.mp3",
  "Salvar Cadastro. Confirme os dados e toque em Salvar para registrar o domicílio na base local.": "passos/g1_step5.mp3",

  // * G2 - Verificar Duplicação de Domicílio
  "Pesquisar Endereço. Na aba Domicílios, use a barra de busca e digite o nome da rua e o número da casa.": "passos/g2_step1.mp3",
  "Conferir Complemento. Verifique se o imóvel possui complementos como casa A, casa B ou bloco.": "passos/g2_step2.mp3",
  "Consultar Lista da Microárea. Filtre a busca pela sua microárea para listar todas as casas da quadra.": "passos/g2_step3.mp3",
  "Confirmar Antes de Criar. Se a casa já aparecer na lista, abra a ficha existente em vez de cadastrar novamente.": "passos/g2_step4.mp3",

  // G3 - Corrigir Erro de Endereço ou CEP
  "Buscar por Nome Similar. Digite parte do nome da rua na busca de logradouro para localizar a grafia cadastrada.": "passos/g3_step1.mp3",
  "Usar CEP Geral do Município. Se o CEP específico não funcionar, tente o CEP geral da cidade cadastrado na UBS.": "passos/g3_step2.mp3",
  "Editar Ficha de Domicílio. Se o erro for em casa existente, abra o domicílio e toque no lápis para atualizar o endereço.": "passos/g3_step3.mp3",

  // * G4 - Cadastrar Morador no Domicílio
  "Abrir o Domicílio. Localize a casa no aplicativo e toque na ficha do domicílio correspondente.": "passos/g4_step1.mp3",
  "Adicionar Morador. Toque na opção 'Adicionar Família' ou 'Adicionar Morador' dentro da casa.": "passos/g4_step2.mp3",
  "Preencher Dados Pessoais. Insira nome completo, data de nascimento, sexo e nome da mãe.": "passos/g4_step3.mp3",
  "Vincular ao Responsável. Defina o parentesco do morador em relação ao responsável familiar.": "passos/g4_step4.mp3",
  "Salvar Morador. Confirme as informações e salve para concluir a inclusão do morador.": "passos/g4_step5.mp3",

  // * G5 - Cadastrar Morador sem CPF ou CNS
  "Prosseguir sem Documento. Sim, é possível realizar o cadastro no e-SUS mesmo sem o CPF ou CNS do morador.": "passos/g5_step1.mp3",
  "Usar CNS se Houver. Se a pessoa não tiver CPF, verifique se ela possui o Cartão Nacional do SUS.": "passos/g5_step2.mp3",
  "Preencher Nome e Nascimento. Se não houver nenhum documento, registre com precisão o nome completo e a data de nascimento.": "passos/g5_step3.mp3",
  "Solicitar Atualização Posterior. Oriente a família a providenciar o documento e levar à unidade para atualizar depois.": "passos/g5_step4.mp3",

  // * G6 - Verificar Duplicação de Cidadão
  "Buscar por CPF ou CNS. Utilize o campo de busca digitando o CPF ou o número do Cartão SUS da pessoa.": "passos/g6_step1.mp3",
  "Buscar por Nome e Nascimento. Se não tiver o documento, busque pelo nome completo e data de nascimento.": "passos/g6_step2.mp3",
  "Conferir Nome da Mãe. Compare o nome da mãe no cadastro encontrado para confirmar se é a mesma pessoa.": "passos/g6_step3.mp3",
  "Vincular Cadastro Existente. Se o cadastro for encontrado, apenas vincule a pessoa ao domicílio atual.": "passos/g6_step4.mp3",

  // * G7 - Cadastrar Recém-Nascido
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

  // * G9 - Atualizar Novo Morador na Família
  "Localizar a Residência. Abra a ficha da casa onde o novo morador passou a residir.": "passos/g9_step1.mp3",
  "Verificar se já tem Cadastro. Pesquise se a pessoa veio de outro bairro e já possui registro no sistema.": "passos/g9_step2.mp3",
  "Adicionar ou Transferir. Se já tiver cadastro, faça a transferência de endereço; se não tiver, crie um novo.": "passos/g9_step3.mp3",
  "Atualizar Relação Familiar. Ajuste o grau de parentesco e salve a nova formação da família.": "passos/g9_step4.mp3",

  // * G10 - Registrar Óbito no Sistema
  "Localizar Ficha do Cidadão. Busque pelo nome ou CPF da pessoa falecida no aplicativo.": "passos/g10_step1.mp3",
  "Editar Cadastro Individual. Toque no ícone de lápis para alterar os dados da ficha.": "passos/g10_step2.mp3",
  "Marcar Opção Óbito. Selecione o campo de saída por 'Óbito' e informe a data do falecimento se solicitada.": "passos/g10_step3.mp3",
  "Salvar e Notificar Equipe. Salve a ficha e comunique a equipe de saúde para encerramento de acompanhamentos.": "passos/g10_step4.mp3",

  // G11 - Registrar Visita Domiciliar
  "Localizar Cidadão ou Família. Busque a pessoa ou a casa na sua lista de microárea.": "passos/g11_step1.mp3",
  "Iniciar Ficha de Visita. Toque no botão 'Registrar Visita' no perfil do cidadão.": "passos/g11_step2.mp3",
  "Marcar Motivos e Ações. Selecione os motivos da visita e ações realizadas no momento.": "passos/g11_step3.mp3",
  "Salvar Visita. Confirme o desfecho como 'Visita Realizada' e toque em Salvar.": "passos/g11_step4.mp3",

  // * G12 - Selecionar Motivo da Visita Domiciliar
  "Cadastramento e Atualização. Marque 'Cadastramento/Atualização' quando o foco for coletar dados cadastrais.": "passos/g12_step1.mp3",
  "Acompanhamento Continuado. Marque 'Gestante', 'Hipertensão', 'Diabetes' ou 'Criança' conforme o público atendido.": "passos/g12_step2.mp3",
  "Busca Ativa e Convites. Marque 'Busca Ativa' para vacinas atrasadas, consultas faltosas ou exames pendentes.": "passos/g12_step3.mp3",
  "Controle Ambiental. Marque 'Controle de Vetores' ao realizar inspeções de dengue e saneamento.": "passos/g12_step4.mp3",

  // * G13 - Registrar Visita com Morador Ausente ou Recusada
  "Sim, Deve Registrar. É essencial registrar no sistema mesmo quando não encontrar ninguém em casa.": "passos/g13_step1.mp3",
  "Abrir Ficha de Visita. Selecione o domicílio ou o cidadão que tentou visitar.": "passos/g13_step2.mp3",
  "Selecionar Desfecho Ausente. No campo Desfecho, escolha a opção 'Ausente' se o imóvel estiver fechado.": "passos/g13_step3.mp3",
  "Selecionar Desfecho Recusada. Se o morador não quiser atender, escolha a opção 'Recusada' e salve.": "passos/g13_step4.mp3",

  // * G14 - Mensagem de Cadastro Duplicado
  "Compreender o Alerta. Esta mensagem indica que o CPF ou CNS digitado já existe na base de dados da UBS.": "passos/g14_step1.mp3",
  "Não Criar Novo Cadastro. Não tente forçar um novo cadastro alterando letras do nome ou números.": "passos/g14_step2.mp3",
  "Buscar Cadastro Existente. Volte à tela de busca e pesquise pelo CPF para carregar a ficha oficial.": "passos/g14_step3.mp3",
  "Vincular à Família. Abra a ficha encontrada e apenas atualize o endereço para o domicílio atual.": "passos/g14_step4.mp3",

  // * G15 - Diferenciar Pessoas com Mesmo Nome (Homônimos)
  "Verificar Data de Nascimento. Compare a data de nascimento exata dos dois cadastros para conferir se são pessoas diferentes.": "passos/g15_step1.mp3",
  "Conferir Nome da Mãe. Examine o nome completo da mãe registrado em cada uma das fichas.": "passos/g15_step2.mp3",
  "Checar Número de CPF e CNS. Verifique o número do CPF ou do Cartão do SUS de cada cidadão.": "passos/g15_step3.mp3",
  "Confirmar Endereço do Imóvel. Certifique-se em qual casa e microárea cada um dos homônimos reside.": "passos/g15_step4.mp3",

  // * G16 - Escolher Logradouro em Ruas Semelhantes
  "Evitar Abreviações. Procure o nome por extenso na lista de logradouros em vez de usar siglas incomuns.": "passos/g16_step1.mp3",
  "Conferir o Bairro. Verifique a qual bairro a rua pertence na lista de opções exibida.": "passos/g16_step2.mp3",
  "Padronizar com a Equipe. Consulte os colegas ACS da mesma microárea para usar o mesmo padrão de rua.": "passos/g16_step3.mp3",
  "Selecionar Código de Logradouro. Escolha a rua que possui o código CEP oficial cadastrado na UBS.": "passos/g16_step4.mp3",

  // * G17 - Entender Inconsistência no Sistema
  "O que é Inconsistência?. Inconsistência ocorre quando faltam dados obrigatórios ou há dados conflitantes na ficha.": "passos/g17_step1.mp3",
  "Exemplos Comuns. CPF inválido, responsável familiar não indicado ou ausência de vínculo de parentesco.": "passos/g17_step2.mp3",
  "Impacto no Trabalho. Fichas com inconsistência não são validadas pelo Ministério da Saúde até serem corrigidas.": "passos/g17_step3.mp3",
  "Como Identificar. O aplicativo exibe um alerta amarelo ou vermelho indicando a ficha com pendência.": "passos/g17_step4.mp3",

  // * G18 - Corrigir Erro Pós-Sincronização
  "Verificar Relatório de Sincronização. Após sincronizar, abra a aba Sincronização e veja a lista de fichas rejeitadas.": "passos/g18_step1.mp3",
  "Ler a Mensagem do Erro. Toque na ficha rejeitada para ler exatamente qual campo precisa de correção.": "passos/g18_step2.mp3",
  "Editar os Campos Indicados. Abra a ficha do cidadão ou domicílio e corrija a informação incorreta.": "passos/g18_step3.mp3",
  "Sincronizar Novamente. Após salvar as correções, faça uma nova sincronização para reenviar as fichas.": "passos/g18_step4.mp3",

  // * G19 - Cadastros Ausentes no Sistema da Unidade
  "Verificar Fichas Pendentes. Abra o menu Sincronização no tablet e confira se há fichas acumuladas sem enviar.": "passos/g19_step1.mp3",
  "Checar Conexão Wi-Fi da UBS. Certifique-se de que o tablet está conectado à rede de internet oficial da UBS.": "passos/g19_step2.mp3",
  "Aguardar Processamento do PEC. O sistema da unidade pode levar alguns minutos para importar o lote recebido.": "passos/g19_step3.mp3",
  "Solicitar Reimportação. Se as fichas foram enviadas mas não aparecem, peça ao digitador ou enfermeiro para checar o lote no PEC.": "passos/g19_step4.mp3",

  // * G20 - Sincronizar Dados do Tablet com a Unidade
  "Conectar ao Wi-Fi da UBS. Ao chegar na Unidade de Saúde, ligue o Wi-Fi do tablet e conecte à rede autorizada.": "passos/g20_step1.mp3",
  "Abrir o Menu Sincronização. Abra o aplicativo e-SUS Território e toque no menu lateral na opção 'Sincronizar'.": "passos/g20_step2.mp3",
  "Iniciar o Envio de Fichas. Toque no botão 'Enviar Dados' e aguarde a barra de progresso ser concluída.": "passos/g20_step3.mp3",
  "Receber Atualizações da Base. Após enviar, toque em 'Receber Dados' para baixar novidades do PEC no seu tablet.": "passos/g20_step4.mp3",
  "Confirmar Mensagem de Sucesso. Certifique-se de que a mensagem 'Sincronização realizada com sucesso' foi exibida.": "passos/g20_step5.mp3",

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

  // * G28 - Vacinação em Atraso
  "Conferir Caderneta. Compare as vacinas tomadas com o calendário nacional vigente.": "passos/g28_step1.mp3",
  "Identificar Faltosas. Anote quais doses estão atrasadas (Ex: Penta, VIP/VOP, SCR).": "passos/g28_step2.mp3",
  "Orientar Família. Explique a importância da proteção e os riscos das doenças.": "passos/g28_step3.mp3",
  "Encaminhamento. Direcione a família imediatamente à sala de vacina da UBS de referência.": "passos/g28_step4.mp3",

  // * G29 - Planejamento Familiar
  "Abordagem. Inicie a conversa sobre o desejo de ter filhos ou evitar gravidez no momento.": "passos/g29_step1.mp3",
  "Métodos Disponíveis. Informe sobre camisinha, pílula, injetável, DIU e métodos definitivos no SUS.": "passos/g29_step2.mp3",
  "Grupo de Apoio. Convide o casal para as reuniões de planejamento familiar na unidade.": "passos/g29_step3.mp3",
  "Distribuição. Lembre que preservativos podem ser retirados livremente na UBS.": "passos/g29_step4.mp3",

  // * G30 - Cuidados no Puerpério
  "Sinais de Infecção. Observe febre, dor intensa ou sangramento com odor forte (loquiação).": "passos/g30_step1.mp3",
  "Saúde Mental. Identifique sinais de tristeza profunda ou desinteresse pelo bebê (Depressão Pós-parto).": "passos/g30_step2.mp3",
  "Exame Ginecológico. Garanta que a consulta de revisão (42 dias) esteja agendada.": "passos/g30_step3.mp3",
  "Amamentação. Avalie a saúde das mamas (fissuras ou mastite) e apoie a puérpera.": "passos/g30_step4.mp3",

  // * G31 - Sintomáticos Respiratórios e Pele
  "Identificar Tosse. Questione sobre tosse por 3 semanas ou mais (Tuberculose).": "passos/g31_step1.mp3",
  "Manchas na Pele. Observe manchas claras ou avermelhadas com perda de sensibilidade (Hanseníase).": "passos/g31_step2.mp3",
  "Contatos Próximos. Identifique se familiares de casos confirmados estão sendo avaliados.": "passos/g31_step3.mp3",
  "Encaminhamento. Direcione para coleta de escarro ou avaliação médica na UBS.": "passos/g31_step4.mp3",

  // * G32 - Orientações de Saúde Bucal
  "Higiene Diária. Oriente sobre escovação após as refeições e uso do fio dental.": "passos/g32_step1.mp3",
  "Bebês e Crianças. Explique que a limpeza deve começar antes mesmo dos primeiros dentes.": "passos/g32_step2.mp3",
  "Lesões Suspeitas. Observe feridas na boca que não cicatrizam em 15 dias (risco de câncer).": "passos/g32_step3.mp3",
  "Próteses. Oriente idosos sobre a limpeza correta e retirada da dentadura para dormir.": "passos/g32_step4.mp3",

  // * G33 - Identificação de Violência
  "Sinais Físicos. Observe hematomas em locais incomuns ou marcas de queimadura.": "passos/g33_step1.mp3",
  "Comportamento. Note isolamento repentino, medo excessivo ou regressão no desenvolvimento.": "passos/g33_step2.mp3",
  "Escuta Protegida. Não force o relato; acolha o que for dito voluntariamente.": "passos/g33_step3.mp3",
  "Notificação. Informe imediatamente à sua enfermeira supervisora para conduta sigilosa.": "passos/g33_step4.mp3",

  // * G34 - Saneamento e Meio Ambiente
  "Água e Esgoto. Verifique a origem da água e o destino dos dejetos (fossa ou rede).": "passos/g34_step1.mp3",
  "Lixo e Entulho. Oriente sobre o descarte correto para evitar ratos e escorpiões.": "passos/g34_step2.mp3",
  "Animais Sinantrópicos. Observe presença de morcegos, barbeiros ou caramujos africanos.": "passos/g34_step3.mp3",
  "Manejo Ambiental. Sugira soluções simples como telar ralos e manter quintais limpos.": "passos/g34_step4.mp3",

  // * G35 - Apoio em Cuidados Paliativos
  "Conforto e Dor. Pergunte sobre a intensidade da dor e se a medicação está aliviando.": "passos/g35_step1.mp3",
  "Prevenção de Lesões. Oriente a família sobre a mudança de decúbito (virar o paciente) a cada 2h.": "passos/g35_step2.mp3",
  "Higiene e Nutrição. Auxilie com dicas para banho no leito e alimentação pastosa/líquida.": "passos/g35_step3.mp3",
  "Apoio ao Cuidador. Observe se o cuidador está exausto e ofereça escuta emocional.": "passos/g35_step4.mp3",

  // * G36 - Mordedura e Raiva Humana
  "Lavagem Imediata. Oriente lavar o ferimento abundantemente com água e sabão.": "passos/g36_step1.mp3",
  "Dados do Animal. Identifique se o animal é conhecido e pode ser observado por 10 dias.": "passos/g36_step2.mp3",
  "Encaminhamento Rápido. Envie o paciente à UBS para avaliar a necessidade de vacina ou soro.": "passos/g36_step3.mp3",
  "Notificação. Registre o caso de agressão por animal no sistema de vigilância.": "passos/g36_step4.mp3",

  // * G37 - Saúde do Homem
  "Rastreamento. Oriente sobre a importância dos exames de rotina (PA, glicemia, colesterol).": "passos/g37_step1.mp3",
  "Prevenção de Câncer. Fale sobre o câncer de próstata e pênis (higiene e sinais de alerta).": "passos/g37_step2.mp3",
  "Saúde Sexual. Aborde o uso de preservativos e o teste rápido para ISTs.": "passos/g37_step3.mp3",
  "Acesso à UBS. Estimule o comparecimento à unidade, mesmo sem sintomas agudos.": "passos/g37_step4.mp3",

  // * G38 - Álcool e Drogas (Redução de Danos)
  "Vínculo e Escuta. Aproxime-se sem julgamentos para entender o padrão de uso.": "passos/g38_step1.mp3",
  "Hidratação e Alimentação. Oriente sobre cuidados básicos para diminuir o impacto físico.": "passos/g38_step2.mp3",
  "Rede de Cuidado. Informe sobre o CAPS AD e grupos de apoio na comunidade.": "passos/g38_step3.mp3",
  "Segurança. Em caso de overdose ou abstinência grave, saiba como acionar o SAMU.": "passos/g38_step4.mp3",

  // * G39 - Prevenção de Câncer Feminino
  "Autoexame. Ensine a mulher a observar as mamas e identificar alterações.": "passos/g39_step1.mp3",
  "Preventivo. Verifique se o Papanicolau está em dia (recomendado a cada 1 a 3 anos).": "passos/g39_step2.mp3",
  "Critérios de Idade. Oriente sobre a mamografia para mulheres entre 50 e 69 anos.": "passos/g39_step3.mp3",
  "Encaminhamento. Agende ou direcione para a coleta na Unidade de Saúde.": "passos/g39_step4.mp3",

  // * G40 - Sintomas Gripais e COVID
  "Isolamento. Oriente o afastamento de outras pessoas e o uso de máscara em casa.": "passos/g40_step1.mp3",
  "Sinais de Gravidade. Monitore se há falta de ar, cansaço extremo ou febre persistente.": "passos/g40_step2.mp3",
  "Testagem. Informe sobre onde e quando realizar o teste (COVID ou Influenza).": "passos/g40_step3.mp3",
  "Notificação. Registre o caso como suspeito na planilha de monitoramento da equipe.": "passos/g40_step4.mp3",

  // * G41 - Desenvolvimento Infantil
  "Puericultura. Verifique se as consultas de rotina no médico/enfermeiro estão em dia.": "passos/g41_step1.mp3",
  "Marcos Motores. Observe se a criança já senta, engatinha ou anda conforme a idade.": "passos/g41_step2.mp3",
  "Linguagem. Note se a criança interage, balbucia ou já fala palavras simples.": "passos/g41_step3.mp3",
  "Estímulos. Oriente os pais sobre a importância de brincar e conversar com o bebê.": "passos/g41_step4.mp3",

  // * G42 - Aplicação do IVCF-20 (Saúde da Pessoa Idosa)
  "Acessar o Questionário no e-SUS. Na ficha individual do morador idoso (60 anos ou mais), abra a aba de questionários e selecione 'Avaliação da Pessoa Idosa - IVCF-20'.": "passos/g42_step1.mp3",
  "Envolver Familiar ou Cuidador. Convide um familiar ou o cuidador principal para acompanhar a conversa, ajudando a validar as informações sobre uso de remédios, histórico de quedas e dificuldades na rotina.": "passos/g42_step2.mp3",
  "Compreender o Impacto do seu Papel. ACS, ao preencher o IVCF-20 você é os olhos do SUS dentro da casa: muitas famílias não percebem a tempo o risco de quedas, esquecimentos ou sobrecarga de quem cuida. Seu preenchimento garante que a equipe de saúde chegue antes de uma internação grave e dá à família a certeza de que não está desamparada.": "passos/g42_step3.mp3",
  "Avaliar as 8 Dimensões Clínicas. Faça as perguntas diretamente ao idoso com calma sobre: autopercepção da saúde, atividades diárias (AVDs), cognição/memória, humor, mobilidade, visão/audição e comorbidades.": "passos/g42_step4.mp3",
  "Interpretar o Escore (0 a 40 pontos). O e-SUS calcula a pontuação: 0 a 6 pontos (Idoso Robusto), 7 a 14 pontos (Risco de Fragilização) e 15 ou mais pontos (Idoso Frágil).": "passos/g42_step5.mp3",
  "Notificar a Equipe de Saúde da Família. Salve a avaliação e comunique imediatamente à enfermeira ou médico da UBS os idosos com escore ≥ 7 para elaboração do plano de cuidados prioritário.": "passos/g42_step6.mp3",

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
