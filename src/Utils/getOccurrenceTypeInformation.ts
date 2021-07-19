import {
  FaDog,
  FaDumpster,
  FaExclamationTriangle,
  FaHorse,
  FaHouseDamage,
  FaTree,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import OccurrenceTypes from '../enums/OccurrenceTypes';

interface IInformation {
  title: string;
  icon: IconType;
}

const getOccurrenceTypeInformation = (type: OccurrenceTypes): IInformation => {
  switch (type) {
    case OccurrenceTypes.DescarteIrregularDeResiduos:
      return { title: 'Descarte irregular de resíduos', icon: FaDumpster };
    case OccurrenceTypes.Desmatamento:
      return { title: 'Desmatamento', icon: FaTree };
    case OccurrenceTypes.LoteamentoIrregular:
      return { title: 'Loteamento irregular', icon: FaHouseDamage };
    case OccurrenceTypes.UsoIndevidoDeAreaPublica:
      return {
        title: 'Uso indevido de área pública',
        icon: FaExclamationTriangle,
      };
    case OccurrenceTypes.MausTratosContraAnimais:
      return { title: 'Maus tratos contra animais', icon: FaDog };
    case OccurrenceTypes.AbandonoDeAnimais:
      return { title: 'Abandono de animais', icon: FaHorse };
  }
};

export default getOccurrenceTypeInformation;
