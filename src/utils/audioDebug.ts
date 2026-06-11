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
    // Adicione aqui textos comuns do seu app para auditar
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
    
    // Confirmações (25 intents)
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
    
    // Guias (25 guias × 2 = 50 arquivos)
    'audios/guias/g1_title.mp3',
    'audios/guias/g1_summary.mp3',
    'audios/guias/g2_title.mp3',
    'audios/guias/g2_summary.mp3',
    // ... adicione os 46 restantes
    
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
    // Verificar se o arquivo existe (será 404 se não existir)
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
  
  // Verificar audioManager
  try {
    import('./audioManager').then(() => {
      console.log('✅ audioManager.ts: OK');
    });
  } catch (e) {
    console.error('❌ audioManager.ts: ERRO', e);
  }

  // Verificar audioMappings
  const mappingCount = Object.keys(audioMappings).length;
  console.log(`✅ audioMappings.ts: ${mappingCount} mapeamentos encontrados`);

  // Verificar speech.ts
  try {
    import('./speech').then(() => {
      console.log('✅ speech.ts: OK');
    });
  } catch (e) {
    console.error('❌ speech.ts: ERRO', e);
  }

  console.groupEnd();
};

// Exportar para uso no console durante desenvolvimento
if (typeof window !== 'undefined') {
  (window as any).__AUDIO_DEBUG__ = {
    printAuditReport: printAudioAuditReport,
    checkSystem: checkAudioSystem,
    getMissing: getMissingAudioFiles,
    mappings: audioMappings,
  };
}
