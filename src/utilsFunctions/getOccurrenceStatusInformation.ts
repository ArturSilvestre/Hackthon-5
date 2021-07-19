import OccurrenceStatus from '../enums/OccurrenceStatus';

interface IInformation {
  title: string;
}

const getOccurrenceStatusInformation = (
  type: OccurrenceStatus,
): IInformation => {
  switch (type) {
    case OccurrenceStatus.SolicitacaoCriada:
      return { title: 'Solicitação criada' };
    case OccurrenceStatus.RegistroNumeroDeOcorrencia:
      return { title: 'Registro do número de ocorrência' };
    case OccurrenceStatus.RegistroAutoInfracao:
      return { title: 'Registro do auto de infração - AI' };
    case OccurrenceStatus.Encaminhamento2Promotoria:
      return { title: 'Encaminhamento do AI à 2ª. Promotoria de Justiça' };
    case OccurrenceStatus.Encaminhamento7Promotoria:
      return { title: 'Encaminhamento do AI à 7ª. Promotoria de Justiça' };
    case OccurrenceStatus.EncaminhamentoPoliciaCivil:
      return { title: 'Encaminhamento do AI à Polícia Civil' };
    case OccurrenceStatus.EncaminhamentoPoliciaMilitarAmbiental:
      return { title: 'Encaminhamento do AI à Polícia Militar Ambiental' };
    case OccurrenceStatus.EncaminhamentoCETESB:
      return { title: 'Encaminhamento do AI à CETESB' };
    case OccurrenceStatus.NaoProcede:
      return { title: 'Não procede' };
  }
};

export default getOccurrenceStatusInformation;
