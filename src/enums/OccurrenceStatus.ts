enum OccurrenceStatus {
  SolicitacaoCriada = 'SolicitacaoCriada', // Solicitação criada
  RegistroNumeroDeOcorrencia = 'RegistroNumeroDeOcorrencia', // Registro do número de ocorrência
  RegistroAutoInfracao = 'RegistroAutoInfracao', // Registro do auto de infração - AI
  Encaminhamento2Promotoria = 'Encaminhamento2Promotoria', // Encaminhamento do AI à 2ª. Promotoria de Justiça
  Encaminhamento7Promotoria = 'Encaminhamento7Promotoria', // Encaminhamento do AI à 7ª. Promotoria de Justiça
  EncaminhamentoPoliciaCivil = 'EncaminhamentoPoliciaCivil', // Encaminhamento do AI à Polícia Civil
  EncaminhamentoPoliciaMilitarAmbiental = 'EncaminhamentoPoliciaMilitarAmbiental', // Encaminhamento do AI à Polícia Militar Ambiental
  EncaminhamentoCETESB = 'EncaminhamentoCETESB', // Encaminhamento do AI à CETESB
  NaoProcede = 'NaoProcede', // Não procede
}

export default OccurrenceStatus;
