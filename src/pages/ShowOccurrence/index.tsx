import { format } from 'date-fns';
import { useEffect, useCallback, useState, useMemo } from 'react';
import { FaClock } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import OccurrenceStatus from '../../enums/OccurrenceStatus';
import OccurrenceTypes from '../../enums/OccurrenceTypes';
import api from '../../services/api';
import getOccurrenceStatusInformation from '../../utils/getOccurrenceStatusInformation';
import getOccurrenceTypeInformation from '../../utils/getOccurrenceTypeInformation';
import {
  ChangeStatusButton,
  Container,
  DatetimeContainer,
  PhotosContainer,
  SectionContainer,
  SectionTitle,
} from './styles';

interface IFullOccurrence {
  category: OccurrenceTypes;
  status: OccurrenceStatus;
  description: string;
  occurrenceDate: string;
  newNotification: boolean;
  occurrenceNumber: string | null;
  violationNumber: string | null;
  address: {
    address: string;
    number: string;
    district: string;
    reference: string | null;
    latitude: null;
    longitude: null;
  };
  citizen: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
  };
  histories: {
    title: OccurrenceStatus;
    description?: string;
    historyDate: string;
  }[];
  photos: string[];
  violator: {
    name?: string;
    vehicle?: string;
    address?: string;
    otherInformation?: string;
  };
  internalComments: [];
}

const ShowOccurrence = (): JSX.Element | null => {
  const { id } = useParams<{ id: string }>();

  const [occurrence, setOccurrence] = useState<IFullOccurrence>();
  const [isLoading, setIsLoading] = useState(false);

  const getOccurrence = useCallback(async () => {
    setIsLoading(true);

    const response = await api.get(`/occurrence/employee/${id}`);

    setOccurrence(response.data);

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getOccurrence();
  }, [getOccurrence]);

  if (!occurrence) return null;

  const datetime = new Date(occurrence.occurrenceDate);

  const occurrenceType = getOccurrenceTypeInformation(occurrence.category);
  const occurrenceStatus = getOccurrenceStatusInformation(occurrence.status);

  return (
    <Container>
      <SectionTitle>
        Ocorrência{' '}
        {occurrence.occurrenceNumber
          ? `nº ${occurrence.occurrenceNumber}`
          : ' sem identificador'}
        <DatetimeContainer>
          <FaClock />
          <p>
            {format(datetime, 'HH:mm')} de {format(datetime, 'dd/MM/yy')}
          </p>
        </DatetimeContainer>
      </SectionTitle>

      <SectionContainer>
        <div>
          <div>
            <span>Tipo de ocorrência</span>
            <p>
              {occurrenceType.title} {occurrenceType.icon({})}
            </p>
          </div>

          {occurrence.occurrenceNumber ? (
            <div>
              <span>Nº da ocorrência</span>
              <p>{occurrence.occurrenceNumber}</p>
            </div>
          ) : (
            <></>
          )}

          {occurrence.violationNumber ? (
            <div>
              <span>Nº do auto da infração</span>
              <p>{occurrence.violationNumber}</p>
            </div>
          ) : (
            <></>
          )}

          <div>
            <span>Status atual</span>
            <p>{occurrenceStatus.title}</p>

            <ChangeStatusButton>Alterar Status</ChangeStatusButton>
          </div>
        </div>

        <div>
          <div>
            <span>Bairro</span>
            <p>{occurrence.address.district}</p>
          </div>

          <div>
            <span>Logradouro</span>
            <p>{occurrence.address.address}</p>
          </div>

          <div>
            <span>Número</span>
            <p>{occurrence.address.number}</p>
          </div>

          <div>
            <span>Referência</span>
            <p>{occurrence.address.reference}</p>
          </div>

          <div>
            <span>Observações</span>
            <p>{occurrence.description}</p>
          </div>
        </div>

        <div>
          <div>
            <span>Nome do cidadão</span>
            <p>
              {occurrence.citizen.first_name} {occurrence.citizen.last_name}
            </p>
          </div>

          <div>
            <span>E-mail do cidadão</span>
            <p>{occurrence.citizen.email}</p>
          </div>

          <div>
            <span>WhatsApp do cidadão</span>
            <p>{occurrence.citizen.phone_number}</p>
          </div>
        </div>
      </SectionContainer>

      {occurrence.photos.length > 0 && (
        <>
          <SectionTitle>Fotos da ocorrência</SectionTitle>

          <PhotosContainer>
            {occurrence.photos.map((photo, i) => (
              <img
                key={photo}
                src={photo}
                alt={`Foto da occorência de número ${i}`}
              />
            ))}
          </PhotosContainer>
        </>
      )}

      <SectionTitle>Informações do infrator</SectionTitle>

      <SectionContainer>
        <div>
          <div>
            <span>Nome</span>
            <p>{occurrence.violator.name ?? '-'}</p>
          </div>

          <div>
            <span>Informações do veículo</span>
            <p>{occurrence.violator.vehicle ?? '-'}</p>
          </div>
        </div>

        <div>
          <div>
            <span>Informações de endereço</span>
            <p>{occurrence.violator.address ?? '-'}</p>
          </div>

          <div>
            <span>Outras informações</span>
            <p>{occurrence.violator.otherInformation ?? '-'}</p>
          </div>
        </div>
      </SectionContainer>
    </Container>
  );
};

export default ShowOccurrence;
