/**
 * Utilitário de Desenvolvimento - Auditoria de Áudio
 * Ajuda a identificar áudios faltantes e gerenciar mapeamentos
 */

import { audioMappings, getAudioPath } from './audioMappings';

/**
 * Gera relatório de áudios mapeados vs não mapeados
 */
export const auditAudioMappings = (): {
  total: number;
  mapped: number;
  notMapped: string[];
} => {
  const commonTexts = [
    "Cadastrar Casa Nova no Sistema",
    "Corrigir Erro de Endereço ou CEP",
    "Registrar Mudança de Morador (Saída)",
    "Registrar Visita Domiciliar",
    "Acompanhamento de Pré-natal",
    "Acompanhamento Hiperdia",
    "Acompanhamento Bolsa Família",
    "Visita ao Recém-nascido (Cuidados)",
    "Prevenção de Arboviroses",
    "Saúde Mental na Comunidade",
    "Saúde do Idoso",
    "Vacinação em Atraso",
    "Planejamento Familiar",
    "Cuidados no Puerpério",
    "Sintomáticos Respiratórios e Pele",
    "Orientações de Saúde Bucal",
    "Identificação de Violência",
    "Saneamento e Meio Ambiente",
    "Apoio em Cuidados Paliativos",
    "Mordedura e Raiva Humana",
    "Saúde do Homem",
    "Álcool e Drogas (Redução de Danos)",
    "Prevenção de Câncer Feminino",
    "Sintomas Gripais e COVID",
    "Desenvolvimento Infantil"
  ];

  const mapped = Object.keys(audioMappings).length;
  const notMapped: string[] = [];

  commonTexts.forEach(text => {
    if (!getAudioPath(text)) {
      notMapped.push(text);
    }
  });

  return {
    total: commonTexts.length,
    mapped,
    notMapped,
  };
};

/**
 * Lista todos os áudios esperados que estão faltando
 */
export const getMissingAudioFiles = (): string[] => {
  const missing: string[] = [];
  const expectedAudios = [
    // Header
    'audios/header/welcome.mp3',
    
    // Confirmações
    'audios/confirmacao/cadastro-familia.mp3',
    'audios/confirmacao/visita-domiciliar.mp3',
    'audios/confirmacao/e-sus-problemas.mp3',
    'audios/confirmacao/pre-natal.mp3',
    'audios/confirmacao/hiperdia.mp3',
    'audios/confirmacao/bolsa-familia.mp3',
    'audios/confirmacao/visita-recem-nascido.mp3',
    'audios/confirmacao/combate-dengue.mp3',
    'audios/confirmacao/saude-mental.mp3',
    'audios/confirmacao/atualizar-cadastro.mp3',
    'audios/confirmacao/saude-idoso.mp3',
    'audios/confirmacao/vacinacao-atraso.mp3',
    'audios/confirmacao/planejamento-familiar.mp3',
    'audios/confirmacao/puerperio.mp3',
    'audios/confirmacao/busca-ativa-tb-hanseniase.mp3',
    'audios/confirmacao/saude-bucal.mp3',
    'audios/confirmacao/identificar-violencia.mp3',
    'audios/confirmacao/riscos-ambientais.mp3',
    'audios/confirmacao/cuidados-paliativos.mp3',
    'audios/confirmacao/mordedura-animais.mp3',
    'audios/confirmacao/saude-homem.mp3',
    'audios/confirmacao/reducao-danos.mp3',
    'audios/confirmacao/prevencao-cancer.mp3',
    'audios/confirmacao/sintomas-gripais.mp3',
    'audios/confirmacao/desenvolvimento-infantil.mp3',
    
    // Guias principais com MP3 gravados
    'audios/guias/g1_title.mp3',
    'audios/guias/g1_summary.mp3',
    'audios/guias/g3_title.mp3',
    'audios/guias/g3_summary.mp3',
    'audios/guias/g8_title.mp3',
    'audios/guias/g8_summary.mp3',
    'audios/guias/g11_title.mp3',
    'audios/guias/g11_summary.mp3',
    'audios/guias/g21_title.mp3',
    'audios/guias/g21_summary.mp3',
    'audios/guias/g22_title.mp3',
    'audios/guias/g22_summary.mp3',
    'audios/guias/g27_title.mp3',
    'audios/guias/g27_summary.mp3',
    
    // Motivacionais
    'audios/motivacional/missao-cumprida.mp3',
    'audios/motivacional/msg1.mp3',
    'audios/motivacional/msg2.mp3',
    'audios/motivacional/msg3.mp3',
    'audios/motivacional/msg4.mp3',
    'audios/motivacional/msg5.mp3',
    'audios/motivacional/msg6.mp3',
  ];

  expectedAudios.forEach(audioPath => {
    fetch(audioPath, { method: 'HEAD' })
      .catch(() => {
        missing.push(audioPath);
      });
  });

  return missing;
};

/**
 * Imprime relatório amigável no console
 */
export const printAudioAuditReport = () => {
  console.group('🎵 Auditoria de Áudio - Anjo ACS');
  
  const totalMappings = Object.keys(audioMappings).length;
  console.log(`✅ Total de mapeamentos: ${totalMappings}`);
  console.log(`📁 Mapeamentos registrados:`, audioMappings);
  
  console.groupEnd();
};

/**
 * Verifica saúde do sistema de áudio
 */
export const checkAudioSystem = () => {
  console.group('🔍 Verificação do Sistema de Áudio');
  
  try {
    import('./audioManager').then(() => {
      console.log('✅ audioManager.ts: OK');
    });
  } catch (e) {
    console.error('❌ audioManager.ts: ERRO', e);
  }

  const mappingCount = Object.keys(audioMappings).length;
  console.log(`✅ audioMappings.ts: ${mappingCount} mapeamentos encontrados`);

  try {
    import('./speech').then(() => {
      console.log('✅ speech.ts: OK');
    });
  } catch (e) {
    console.error('❌ speech.ts: ERRO', e);
  }

  console.groupEnd();
};

if (typeof window !== 'undefined') {
  (window as any).__AUDIO_DEBUG__ = {
    printAuditReport: printAudioAuditReport,
    checkSystem: checkAudioSystem,
    getMissing: getMissingAudioFiles,
    mappings: audioMappings,
  };
}
