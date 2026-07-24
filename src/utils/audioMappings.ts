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

  // === CONFIRMAÇÃO - Confirmação de Intenção (baseado em INTENTS) ===
  "\"Entendi. Você quer saber como cadastrar família. Posso continuar para o guia?\"":
    "confirmacao/cadastro-familia.mp3",
  "\"Entendi. Você quer saber como registrar visita. Posso continuar para o guia?\"":
    "confirmacao/visita-domiciliar.mp3",
  "\"Entendi. Você quer saber como resolver erro no e-SUS. Posso continuar para o guia?\"":
    "confirmacao/e-sus-problemas.mp3",
  "\"Entendi. Você quer saber sobre o pré-natal. Posso continuar para o guia?\"":
    "confirmacao/pre-natal.mp3",
  "\"Entendi. Você quer saber sobre o Hiperdia. Posso continuar para o guia?\"":
    "confirmacao/hiperdia.mp3",
  "\"Entendi. Você quer saber sobre o Bolsa Família. Posso continuar para o guia?\"":
    "confirmacao/bolsa-familia.mp3",
  "\"Entendi. Você quer saber sobre a visita ao recém-nascido. Posso continuar para o guia?\"":
    "confirmacao/visita-recem-nascido.mp3",
  "\"Entendi. Você quer saber sobre dengue e focos. Posso continuar para o guia?\"":
    "confirmacao/combate-dengue.mp3",
  "\"Entendi. Você quer saber sobre saúde mental. Posso continuar para o guia?\"":
    "confirmacao/saude-mental.mp3",
  "\"Entendi. Você quer saber como atualizar cadastro. Posso continuar para o guia?\"":
    "confirmacao/atualizar-cadastro.mp3",
  "\"Entendi. Você quer saber sobre a saúde do idoso. Posso continuar para o guia?\"":
    "confirmacao/saude-idoso.mp3",
  "\"Entendi. Você quer saber sobre vacina atrasada. Posso continuar para o guia?\"":
    "confirmacao/vacinacao-atraso.mp3",
  "\"Entendi. Você quer saber sobre planejamento familiar. Posso continuar para o guia?\"":
    "confirmacao/planejamento-familiar.mp3",
  "\"Entendi. Você quer saber sobre pós-parto e puerpério. Posso continuar para o guia?\"":
    "confirmacao/puerperio.mp3",
  "\"Entendi. Você quer saber sobre tuberculose e hanseníase. Posso continuar para o guia?\"":
    "confirmacao/busca-ativa-tb-hanseniase.mp3",
  "\"Entendi. Você quer saber sobre saúde bucal. Posso continuar para o guia?\"":
    "confirmacao/saude-bucal.mp3",
  "\"Entendi. Você quer saber sobre identificação de violência. Posso continuar para o guia?\"":
    "confirmacao/identificar-violencia.mp3",
  "\"Entendi. Você quer saber sobre riscos ambientais. Posso continuar para o guia?\"":
    "confirmacao/riscos-ambientais.mp3",
  "\"Entendi. Você quer saber sobre cuidados paliativos. Posso continuar para o guia?\"":
    "confirmacao/cuidados-paliativos.mp3",
  "\"Entendi. Você quer saber sobre mordida de animal. Posso continuar para o guia?\"":
    "confirmacao/mordedura-animais.mp3",
  "\"Entendi. Você quer saber sobre a saúde do homem. Posso continuar para o guia?\"":
    "confirmacao/saude-homem.mp3",
  "\"Entendi. Você quer saber sobre drogas e álcool. Posso continuar para o guia?\"":
    "confirmacao/reducao-danos.mp3",
  "\"Entendi. Você quer saber sobre prevenção de câncer. Posso continuar para o guia?\"":
    "confirmacao/prevencao-cancer.mp3",
  "\"Entendi. Você quer saber sobre gripe e COVID. Posso continuar para o guia?\"":
    "confirmacao/sintomas-gripais.mp3",
  "\"Entendi. Você quer saber sobre puericultura. Posso continuar para o guia?\"":
    "confirmacao/desenvolvimento-infantil.mp3",







  // === GUIAS - Títulos e Resumos ===
  "Cadastrar Nova Família": "guias/g1_title.mp3",
  "\"Cadastrar Nova Família\"": "guias/g1_title.mp3",
  "Guia passo a passo para realizar o cadastro completo de uma nova família no e-SUS Território.": "guias/g1_summary.mp3",
  "\"Guia passo a passo para realizar o cadastro completo de uma nova família no e-SUS Território.\"": "guias/g1_summary.mp3",
  
  "Registrar Visita Domiciliar": "guias/g2_title.mp3",
  "\"Registrar Visita Domiciliar\"": "guias/g2_title.mp3",
  "Como registrar corretamente uma visita de rotina ou busca ativa.": "guias/g2_summary.mp3",
  "\"Como registrar corretamente uma visita de rotina ou busca ativa.\"": "guias/g2_summary.mp3",
  
  "Problemas no e-SUS": "guias/g3_title.mp3",
  "\"Problemas no e-SUS\"": "guias/g3_title.mp3",
  "Resolução de erros comuns de sincronização e login.": "guias/g3_summary.mp3",
  "\"Resolução de erros comuns de sincronização e login.\"": "guias/g3_summary.mp3",
  
  "Acompanhamento de Pré-natal": "guias/g4_title.mp3",
  "\"Acompanhamento de Pré-natal\"": "guias/g4_title.mp3",
  "Rotina de captação e acompanhamento de gestantes na comunidade.": "guias/g4_summary.mp3",
  "\"Rotina de captação e acompanhamento de gestantes na comunidade.\"": "guias/g4_summary.mp3",
  
  "Acompanhamento Hiperdia": "guias/g5_title.mp3",
  "\"Acompanhamento Hiperdia\"": "guias/g5_title.mp3",
  "Monitoramento de hipertensos e diabéticos durante as visitas.": "guias/g5_summary.mp3",
  "\"Monitoramento de hipertensos e diabéticos durante as visitas.\"": "guias/g5_summary.mp3",
  
  "Acompanhamento Bolsa Família": "guias/g6_title.mp3",
  "\"Acompanhamento Bolsa Família\"": "guias/g6_title.mp3",
  "Cumprimento das condicionalidades de saúde do programa.": "guias/g6_summary.mp3",
  "\"Cumprimento das condicionalidades de saúde do programa.\"": "guias/g6_summary.mp3",
  
  "Visita ao Recém-nascido": "guias/g7_title.mp3",
  "\"Visita ao Recém-nascido\"": "guias/g7_title.mp3",
  "Primeira visita após o nascimento (até o 5º dia de vida).": "guias/g7_summary.mp3",
  "\"Primeira visita após o nascimento (até o 5º dia de vida).\"": "guias/g7_summary.mp3",
  
  "Prevenção de Arboviroses": "guias/g8_title.mp3",
  "\"Prevenção de Arboviroses\"": "guias/g8_title.mp3",
  "Ações de campo para controle de Dengue, Zika e Chikungunya.": "guias/g8_summary.mp3",
  "\"Ações de campo para controle de Dengue, Zika e Chikungunya.\"": "guias/g8_summary.mp3",
  
  "Saúde Mental na Comunidade": "guias/g9_title.mp3",
  "\"Saúde Mental na Comunidade\"": "guias/g9_title.mp3",
  "Apoio e identificação de sofrimento psíquico.": "guias/g9_summary.mp3",
  "\"Apoio e identificação de sofrimento psíquico.\"": "guias/g9_summary.mp3",
  
  "Atualizar Dados Cadastrais": "guias/g10_title.mp3",
  "\"Atualizar Dados Cadastrais\"": "guias/g10_title.mp3",
  "Como proceder quando o cidadão muda de endereço ou telefone.": "guias/g10_summary.mp3",
  "\"Como proceder quando o cidadão muda de endereço ou telefone.\"": "guias/g10_summary.mp3",
  
  "Saúde do Idoso": "guias/g11_title.mp3",
  "\"Saúde do Idoso\"": "guias/g11_title.mp3",
  "Avaliação de fragilidade e riscos no domicílio do idoso.": "guias/g11_summary.mp3",
  "\"Avaliação de fragilidade e riscos no domicílio do idoso.\"": "guias/g11_summary.mp3",
  
  "Vacinação em Atraso": "guias/g12_title.mp3",
  "\"Vacinação em Atraso\"": "guias/g12_title.mp3",
  "Como proceder ao identificar crianças com vacinas pendentes.": "guias/g12_summary.mp3",
  "\"Como proceder ao identificar crianças com vacinas pendentes.\"": "guias/g12_summary.mp3",
  
  "Planejamento Familiar": "guias/g13_title.mp3",
  "\"Planejamento Familiar\"": "guias/g13_title.mp3",
  "Orientações sobre métodos contraceptivos e saúde reprodutiva.": "guias/g13_summary.mp3",
  "\"Orientações sobre métodos contraceptivos e saúde reprodutiva.\"": "guias/g13_summary.mp3",
  
  "Cuidados no Puerpério": "guias/g14_title.mp3",
  "\"Cuidados no Puerpério\"": "guias/g14_title.mp3",
  "Acompanhamento da saúde da mulher após o parto.": "guias/g14_summary.mp3",
  "\"Acompanhamento da saúde da mulher após o parto.\"": "guias/g14_summary.mp3",
  
  "Sintomáticos Respiratórios e Pele": "guias/g15_title.mp3",
  "\"Sintomáticos Respiratórios e Pele\"": "guias/g15_title.mp3",
  "Busca ativa de Tuberculose e Hanseníase no território.": "guias/g15_summary.mp3",
  "\"Busca ativa de Tuberculose e Hanseníase no território.\"": "guias/g15_summary.mp3",
  
  "Orientações de Saúde Bucal": "guias/g16_title.mp3",
  "\"Orientações de Saúde Bucal\"": "guias/g16_title.mp3",
  "Promoção da higiene oral e identificação de lesões.": "guias/g16_summary.mp3",
  "\"Promoção da higiene oral e identificação de lesões.\"": "guias/g16_summary.mp3",
  
  "Identificação de Violência": "guias/g17_title.mp3",
  "\"Identificação de Violência\"": "guias/g17_title.mp3",
  "Como agir em casos suspeitos de violência doméstica ou infantil.": "guias/g17_summary.mp3",
  "\"Como agir em casos suspeitos de violência doméstica ou infantil.\"": "guias/g17_summary.mp3",
  
  "Saneamento e Meio Ambiente": "guias/g18_title.mp3",
  "\"Saneamento e Meio Ambiente\"": "guias/g18_title.mp3",
  "Vigilância de riscos no entorno do domicílio.": "guias/g18_summary.mp3",
  "\"Vigilância de riscos no entorno do domicílio.\"": "guias/g18_summary.mp3",
  
  "Apoio em Cuidados Paliativos": "guias/g19_title.mp3",
  "\"Apoio em Cuidados Paliativos\"": "guias/g19_title.mp3",
  "Acompanhamento de pacientes com doenças graves em terminalidade.": "guias/g19_summary.mp3",
  "\"Acompanhamento de pacientes com doenças graves em terminalidade.\"": "guias/g19_summary.mp3",
  
  "Mordedura e Raiva Humana": "guias/g20_title.mp3",
  "\"Mordedura e Raiva Humana\"": "guias/g20_title.mp3",
  "Primeiros cuidados após ataques de animais.": "guias/g20_summary.mp3",
  "\"Primeiros cuidados após ataques de animais.\"": "guias/g20_summary.mp3",
  
  "Saúde do Homem": "guias/g21_title.mp3",
  "\"Saúde do Homem\"": "guias/g21_title.mp3",
  "Ações de prevenção e rastreamento para a população masculina.": "guias/g21_summary.mp3",
  "\"Ações de prevenção e rastreamento para a população masculina.\"": "guias/g21_summary.mp3",
  
  "Álcool e Drogas (Redução de Danos)": "guias/g22_title.mp3",
  "\"Álcool e Drogas (Redução de Danos)\"": "guias/g22_title.mp3",
  "Apoio e orientações para usuários de substâncias.": "guias/g22_summary.mp3",
  "\"Apoio e orientações para usuários de substâncias.\"": "guias/g22_summary.mp3",
  
  "Prevenção de Câncer Feminino": "guias/g23_title.mp3",
  "\"Prevenção de Câncer Feminino\"": "guias/g23_title.mp3",
  "Orientações sobre Papanicolau e Mamografia.": "guias/g23_summary.mp3",
  "\"Orientações sobre Papanicolau e Mamografia.\"": "guias/g23_summary.mp3",
  
  "Sintomas Gripais e COVID": "guias/g24_title.mp3",
  "\"Sintomas Gripais e COVID\"": "guias/g24_title.mp3",
  "Como agir em casos de febre, tosse e falta de ar.": "guias/g24_summary.mp3",
  "\"Como agir em casos de febre, tosse e falta de ar.\"": "guias/g24_summary.mp3",
  
  "Desenvolvimento Infantil": "guias/g25_title.mp3",
  "\"Desenvolvimento Infantil\"": "guias/g25_title.mp3",
  "Marcos de crescimento e aprendizagem da criança.": "guias/g25_summary.mp3",
  "\"Marcos de crescimento e aprendizagem da criança.\"": "guias/g25_summary.mp3",











  // === PASSOS DOS GUIAS ===
  // G1 - Cadastrar Nova Família
  "Acesse o Território. Abra o aplicativo e-SUS Território no seu tablet ou celular.": "passos/g1_step1.mp3",
  "Novo Domicílio. Toque no ícone '+' e selecione 'Adicionar Domicílio'.": "passos/g1_step2.mp3",
  "Dados da Família. Preencha as informações do responsável familiar primeiro.": "passos/g1_step3.mp3",
  "Membros. Adicione os demais membros vinculando-os ao responsável.": "passos/g1_step4.mp3",
  "Sincronizar. Ao finalizar, não esqueça de sincronizar os dados com a base.": "passos/g1_step5.mp3",

  // G2 - Registrar Visita Domiciliar
  "Localizar Família. Busque a família ou indivíduo na sua lista de microárea.": "passos/g2_step1.mp3",
  "Iniciar Visita. Toque no botão 'Registrar Visita' dentro da ficha do cidadão.": "passos/g2_step2.mp3",
  "Motivo da Visita. Selecione o motivo (Ex: Acompanhamento, Egresso de Hospital).": "passos/g2_step3.mp3",
  "Desfecho. Marque se a visita foi realizada, recusada ou se o morador estava ausente.": "passos/g2_step4.mp3",

  // G3 - Problemas no e-SUS
  "Verificar Conexão. Certifique-se de que o Wi-Fi ou dados móveis estão ativos.": "passos/g3_step1.mp3",
  "Limpar Cache. Vá nas configurações do Android > Apps > e-SUS > Limpar Cache.": "passos/g3_step2.mp3",
  "Versão do App. Verifique na Play Store se há atualizações pendentes.": "passos/g3_step3.mp3",

  // G4 - Acompanhamento de Pré-natal
  "Identificar Gestante. Confirme a suspeita de gravidez e a data da última menstruação (DUM).": "passos/g4_step1.mp3",
  "Ficha de Cadastro. Atualize a ficha individual marcando a opção 'Gestante'.": "passos/g4_step2.mp3",
  "Agendar Consulta. Encaminhe para a primeira consulta de pré-natal na UBS.": "passos/g4_step3.mp3",
  "Caderneta. Verifique se a gestante já possui e está utilizando a Caderneta da Gestante.": "passos/g4_step4.mp3",

  // G5 - Acompanhamento Hiperdia
  "Aferição. Se habilitado, auxilie na aferição de PA ou acompanhe o relato dos valores.": "passos/g5_step1.mp3",
  "Medicação. Questione sobre o uso regular dos medicamentos prescritos.": "passos/g5_step2.mp3",
  "Sinais de Alerta. Observe edemas, tonturas ou feridas que não cicatrizam (em diabéticos).": "passos/g5_step3.mp3",
  "Registro e-SUS. Marque o acompanhamento de 'Hipertensão' ou 'Diabetes' na ficha de visita.": "passos/g5_step4.mp3",

  // G6 - Acompanhamento Bolsa Família
  "Identificar Beneficiário. Localize as famílias que recebem o benefício na sua lista.": "passos/g6_step1.mp3",
  "Pesagem e Estatura. Realize ou encaminhe para a coleta de medidas antropométricas.": "passos/g6_step2.mp3",
  "Vacinação. Verifique se o calendário vacinal das crianças está em dia.": "passos/g6_step3.mp3",
  "Mapa de Acompanhamento. Lance os dados no sistema ou preencha o mapa físico do Bolsa Família.": "passos/g6_step4.mp3",

  // G7 - Visita ao Recém-nascido
  "Teste do Pezinho. Verifique se o teste foi realizado entre o 3º e o 5º dia.": "passos/g7_step1.mp3",
  "Coto Umbilical. Oriente sobre a limpeza com álcool 70% e observe sinais de infecção.": "passos/g7_step2.mp3",
  "Amamentação. Observe a pega e oriente sobre o aleitamento materno exclusivo.": "passos/g7_step3.mp3",
  "Agendamento. Garanta que a primeira consulta de puericultura esteja marcada na UBS.": "passos/g7_step4.mp3",

  // G8 - Prevenção de Arboviroses
  "Inspeção de Quintal. Procure por recipientes que acumulem água parada.": "passos/g8_step1.mp3",
  "Vedação de Caixas. Verifique se as caixas d'água estão devidamente tampadas.": "passos/g8_step2.mp3",
  "Sinais e Sintomas. Oriente a família sobre febre alta, dores no corpo e manchas vermelhas.": "passos/g8_step3.mp3",
  "Registro de Foco. Caso encontre larvas, notifique imediatamente a equipe de endemias.": "passos/g8_step4.mp3",

  // G9 - Saúde Mental na Comunidade
  "Escuta Qualificada. Dê espaço para o cidadão falar sobre seus sentimentos sem julgamentos.": "passos/g9_step1.mp3",
  "Identificar Crise. Observe sinais de isolamento, choro frequente ou ideação suicida.": "passos/g9_step2.mp3",
  "Rede de Apoio. Verifique se o paciente frequenta o CAPS ou se tem acompanhamento médico.": "passos/g9_step3.mp3",
  "Vínculo Familiar. Oriente a família sobre a importância do acolhimento no ambiente doméstico.": "passos/g9_step4.mp3",

  // G10 - Atualizar Dados Cadastrais
  "Localizar Cadastro. Busque pelo CPF ou CNS no e-SUS Território.": "passos/g10_step1.mp3",
  "Editar Ficha. Toque no ícone de lápis para abrir a edição da ficha individual.": "passos/g10_step2.mp3",
  "Campos Críticos. Atualize telefone, endereço e a composição familiar (quem saiu/entrou).": "passos/g10_step3.mp3",
  "Finalizar. Salve e sincronize para que a UBS receba os dados atualizados.": "passos/g10_step4.mp3",

  // G11 - Saúde do Idoso
  "Risco de Queda. Observe tapetes soltos, falta de corrimão e iluminação precária.": "passos/g11_step1.mp3",
  "Polifarmácia. Verifique se o idoso toma mais de 5 medicamentos e se há confusão nas doses.": "passos/g11_step2.mp3",
  "Caderneta do Idoso. Atualize os dados de saúde na Caderneta da Pessoa Idosa.": "passos/g11_step3.mp3",
  "Atividades Diárias. Avalie se o idoso consegue comer, tomar banho e se vestir sozinho.": "passos/g11_step4.mp3",

  // G12 - Vacinação em Atraso
  "Conferir Caderneta. Compare as vacinas tomadas com o calendário nacional vigente.": "passos/g12_step1.mp3",
  "Identificar Faltosas. Anote quais doses estão atrasadas (Ex: Penta, VIP/VOP, SCR).": "passos/g12_step2.mp3",
  "Orientar Família. Explique a importância da proteção e os riscos das doenças.": "passos/g12_step3.mp3",
  "Encaminhamento. Direcione a família imediatamente à sala de vacina da UBS de referência.": "passos/g12_step4.mp3",

  // G13 - Planejamento Familiar
  "Abordagem. Inicie a conversa sobre o desejo de ter filhos ou evitar gravidez no momento.": "passos/g13_step1.mp3",
  "Métodos Disponíveis. Informe sobre camisinha, pílula, injetável, DIU e métodos definitivos no SUS.": "passos/g13_step2.mp3",
  "Grupo de Apoio. Convide o casal para as reuniões de planejamento familiar na unidade.": "passos/g13_step3.mp3",
  "Distribuição. Lembre que preservativos podem ser retirados livremente na UBS.": "passos/g13_step4.mp3",

  // G14 - Cuidados no Puerpério
  "Sinais de Infecção. Observe febre, dor intensa ou sangramento com odor forte (loquiação).": "passos/g14_step1.mp3",
  "Saúde Mental. Identifique sinais de tristeza profunda ou desinteresse pelo bebê (Depressão Pós-parto).": "passos/g14_step2.mp3",
  "Exame Ginecológico. Garanta que a consulta de revisão (42 dias) esteja agendada.": "passos/g14_step3.mp3",
  "Amamentação. Avalie a saúde das mamas (fissuras ou mastite) e apoie a puérpera.": "passos/g14_step4.mp3",

  // G15 - Sintomáticos Respiratórios e Pele
  "Identificar Tosse. Questione sobre tosse por 3 semanas ou mais (Tuberculose).": "passos/g15_step1.mp3",
  "Manchas na Pele. Observe manchas claras ou avermelhadas com perda de sensibilidade (Hanseníase).": "passos/g15_step2.mp3",
  "Contatos Próximos. Identifique se familiares de casos confirmados estão sendo avaliados.": "passos/g15_step3.mp3",
  "Encaminhamento. Direcione para coleta de escarro ou avaliação médica na UBS.": "passos/g15_step4.mp3",

  // G16 - Orientações de Saúde Bucal
  "Higiene Diária. Oriente sobre escovação após as refeições e uso do fio dental.": "passos/g16_step1.mp3",
  "Bebês e Crianças. Explique que a limpeza deve começar antes mesmo dos primeiros dentes.": "passos/g16_step2.mp3",
  "Lesões Suspeitas. Observe feridas na boca que não cicatrizam em 15 dias (risco de câncer).": "passos/g16_step3.mp3",
  "Próteses. Oriente idosos sobre a limpeza correta e retirada da dentadura para dormir.": "passos/g16_step4.mp3",

  // G17 - Identificação de Violência
  "Sinais Físicos. Observe hematomas em locais incomuns ou marcas de queimadura.": "passos/g17_step1.mp3",
  "Comportamento. Note isolamento repentino, medo excessivo ou regressão no desenvolvimento.": "passos/g17_step2.mp3",
  "Escuta Protegida. Não force o relato; acolha o que for dito voluntariamente.": "passos/g17_step3.mp3",
  "Notificação. Informe imediatamente à sua enfermeira supervisora para conduta sigilosa.": "passos/g17_step4.mp3",

  // G18 - Saneamento e Meio Ambiente
  "Água e Esgoto. Verifique a origem da água e o destino dos dejetos (fossa ou rede).": "passos/g18_step1.mp3",
  "Lixo e Entulho. Oriente sobre o descarte correto para evitar ratos e escorpiões.": "passos/g18_step2.mp3",
  "Animais Sinantrópicos. Observe presença de morcegos, barbeiros ou caramujos africanos.": "passos/g18_step3.mp3",
  "Manejo Ambiental. Sugira soluções simples como telar ralos e manter quintais limpos.": "passos/g18_step4.mp3",

  // G19 - Apoio em Cuidados Paliativos
  "Conforto e Dor. Pergunte sobre a intensidade da dor e se a medicação está aliviando.": "passos/g19_step1.mp3",
  "Prevenção de Lesões. Oriente a família sobre a mudança de decúbito (virar o paciente) a cada 2h.": "passos/g19_step2.mp3",
  "Higiene e Nutrição. Auxilie com dicas para banho no leito e alimentação pastosa/líquida.": "passos/g19_step3.mp3",
  "Apoio ao Cuidador. Observe se o cuidador está exausto e ofereça escuta emocional.": "passos/g19_step4.mp3",

  // G20 - Mordedura e Raiva Humana
  "Lavagem Imediata. Oriente lavar o ferimento abundantemente com água e sabão.": "passos/g20_step1.mp3",
  "Dados do Animal. Identifique se o animal é conhecido e pode ser observado por 10 dias.": "passos/g20_step2.mp3",
  "Encaminhamento Rápido. Envie o paciente à UBS para avaliar a necessidade de vacina ou soro.": "passos/g20_step3.mp3",
  "Notificação. Registre o caso de agressão por animal no sistema de vigilância.": "passos/g20_step4.mp3",

  // G21 - Saúde do Homem
  "Rastreamento. Oriente sobre a importância dos exames de rotina (PA, glicemia, colesterol).": "passos/g21_step1.mp3",
  "Prevenção de Câncer. Fale sobre o câncer de próstata e pênis (higiene e sinais de alerta).": "passos/g21_step2.mp3",
  "Saúde Sexual. Aborde o uso de preservativos e o teste rápido para ISTs.": "passos/g21_step3.mp3",
  "Acesso à UBS. Estimule o comparecimento à unidade, mesmo sem sintomas agudos.": "passos/g21_step4.mp3",

  // G22 - Álcool e Drogas (Redução de Danos)
  "Vínculo e Escuta. Aproxime-se sem julgamentos para entender o padrão de uso.": "passos/g22_step1.mp3",
  "Hidratação e Alimentação. Oriente sobre cuidados básicos para diminuir o impacto físico.": "passos/g22_step2.mp3",
  "Rede de Cuidado. Informe sobre o CAPS AD e grupos de apoio na comunidade.": "passos/g22_step3.mp3",
  "Segurança. Em caso de overdose ou abstinência grave, saiba como acionar o SAMU.": "passos/g22_step4.mp3",

  // G23 - Prevenção de Câncer Feminino
  "Autoexame. Ensine a mulher a observar as mamas e identificar alterações.": "passos/g23_step1.mp3",
  "Preventivo. Verifique se o Papanicolau está em dia (recomendado a cada 1 a 3 anos).": "passos/g23_step2.mp3",
  "Critérios de Idade. Oriente sobre a mamografia para mulheres entre 50 e 69 anos.": "passos/g23_step3.mp3",
  "Encaminhamento. Agende ou direcione para a coleta na Unidade de Saúde.": "passos/g23_step4.mp3",

  // G24 - Sintomas Gripais e COVID
  "Isolamento. Oriente o afastamento de outras pessoas e o uso de máscara em casa.": "passos/g24_step1.mp3",
  "Sinais de Gravidade. Monitore se há falta de ar, cansaço extremo ou febre persistente.": "passos/g24_step2.mp3",
  "Testagem. Informe sobre onde e quando realizar o teste (COVID ou Influenza).": "passos/g24_step3.mp3",
  "Notificação. Registre o caso como suspeito na planilha de monitoramento da equipe.": "passos/g24_step4.mp3",

  // G25 - Desenvolvimento Infantil
  "Puericultura. Verifique se as consultas de rotina no médico/enfermeiro estão em dia.": "passos/g25_step1.mp3",
  "Marcos Motores. Observe se a criança já senta, engatinha ou anda conforme a idade.": "passos/g25_step2.mp3",
  "Linguagem. Note se a criança interage, balbucia ou já fala palavras simples.": "passos/g25_step3.mp3",
  "Estímulos. Oriente os pais sobre a importância de brincar e conversar com o bebê.": "passos/g25_step4.mp3",




  
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
