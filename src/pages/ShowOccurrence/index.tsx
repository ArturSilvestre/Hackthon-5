import { format } from 'date-fns';
import { useEffect, useCallback, useState } from 'react';
import { FaClock } from 'react-icons/fa';

import Loader from 'react-loader-spinner';

import { useParams } from 'react-router-dom';
import OccurrenceStatus from '../../enums/OccurrenceStatus';
import OccurrenceTypes from '../../enums/OccurrenceTypes';
import { useToast } from '../../hooks/ToastContext';
import api from '../../services/api';
import getOccurrenceStatusInformation from '../../utilsFunctions/getOccurrenceStatusInformation';
import getOccurrenceTypeInformation from '../../utilsFunctions/getOccurrenceTypeInformation';
import ChangeStatusModal from './ChangeStatusModal';
import SetInformation from './SetInformation';
import {
  ChangeStatusButton,
  Container,
  DatetimeContainer,
  LoaderContainer,
  PartialLoadingContainer,
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
  const { addToast } = useToast();

  const [occurrence, setOccurrence] = useState<IFullOccurrence>();
  const [isLoading, setIsLoading] = useState(false);
  const [isPartialLoading, setIsPartialLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getOccurrence = useCallback(async () => {
    const currentSetIsLoading = occurrence ? setIsPartialLoading : setIsLoading;

    currentSetIsLoading(true);

    const response = await api.get(`/occurrence/employee/${id}`);

    setOccurrence(response.data);

    currentSetIsLoading(false);
  }, [id, occurrence]);

  const deletePhotos = useCallback(async () => {
    const response = await api.patch(`/occurrence/${id}/delete-photos`);

    if (response.status === 204) {
      addToast({ title: 'As fotos foram marcadas para exclus??o 00:00' });
    }
  }, [addToast, id]);

  const defineOccurrenceNumber = useCallback(
    async (occurrenceNumber: string) => {
      setIsPartialLoading(true);

      const body = {
        status: OccurrenceStatus.RegistroNumeroDeOcorrencia,
        occurrenceNumber,
      };

      const response = await api.put(`/occurrence/${id}`, body);

      if (response.status === 204) {
        getOccurrence();
      }

      setIsPartialLoading(false);
    },
    [getOccurrence, id],
  );

  const defineViolationNumber = useCallback(
    async (violationNumber: string) => {
      setIsPartialLoading(true);

      const body = {
        status: OccurrenceStatus.RegistroAutoInfracao,
        violationNumber,
      };

      const response = await api.put(`/occurrence/${id}`, body);

      if (response.status === 204) {
        getOccurrence();
      }

      setIsPartialLoading(false);
    },
    [getOccurrence, id],
  );

  useEffect(() => {
    getOccurrence();
  }, []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader type="ThreeDots" />
        <p>Carregando ocorr??ncia</p>
      </LoaderContainer>
    );
  }

  if (!occurrence) return null;

  const datetime = new Date(occurrence.occurrenceDate);

  const occurrenceType = getOccurrenceTypeInformation(occurrence.category);
  const occurrenceStatus = getOccurrenceStatusInformation(occurrence.status);

  return (
    <Container>
      <SectionTitle>
        Ocorr??ncia{' '}
        {occurrence.occurrenceNumber
          ? `n?? ${occurrence.occurrenceNumber}`
          : ' sem identificador'}
        <DatetimeContainer>
          <FaClock />
          <p>
            {format(datetime, 'HH:mm')} de {format(datetime, 'dd/MM/yy')}
          </p>
        </DatetimeContainer>
        {isPartialLoading && (
          <PartialLoadingContainer>
            <Loader type="ThreeDots" />
          </PartialLoadingContainer>
        )}
      </SectionTitle>

      <SectionContainer>
        <div>
          <div>
            <span>Tipo de ocorr??ncia</span>
            <p>
              {occurrenceType.title} {occurrenceType.icon({})}
            </p>
          </div>

          {occurrence.occurrenceNumber ? (
            <div>
              <span>N?? da ocorr??ncia</span>
              <p>{occurrence.occurrenceNumber}</p>
            </div>
          ) : (
            <SetInformation
              title="Definir n?? da ocorr??ncia"
              placeholder="N?? da ocorr??ncia"
              onSubmit={defineOccurrenceNumber}
              isLoading={isPartialLoading}
            />
          )}

          {occurrence.violationNumber ? (
            <div>
              <span>N?? do auto da infra????o</span>
              <p>{occurrence.violationNumber}</p>
            </div>
          ) : (
            <SetInformation
              title="Definir n?? do auto da infra????o"
              placeholder="N?? do auto da infra????o"
              onSubmit={defineViolationNumber}
              isLoading={isPartialLoading}
            />
          )}

          <div>
            <span>Status atual</span>
            <p>{occurrenceStatus.title}</p>

            <ChangeStatusButton onClick={() => setIsModalOpen(true)}>
              Alterar Status
            </ChangeStatusButton>
          </div>
        </div>

        <div>
          {!!occurrence.address.latitude && !!occurrence.address.longitude && (
            <div>
              <span>Endere??o</span>
              <iframe
                title="map"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${occurrence.address.latitude},${occurrence.address.longitude}`}
              />
            </div>
          )}

          {!!occurrence.address.district && (
            <div>
              <span>Bairro</span>
              <p>{occurrence.address.district}</p>
            </div>
          )}

          {!!occurrence.address.address && (
            <div>
              <span>Logradouro</span>
              <p>{occurrence.address.address}</p>
            </div>
          )}

          {!!occurrence.address.number && (
            <div>
              <span>N??mero</span>
              <p>{occurrence.address.number}</p>
            </div>
          )}

          {!!occurrence.address.reference && (
            <div>
              <span>Refer??ncia</span>
              <p>{occurrence.address.reference}</p>
            </div>
          )}

          <div>
            <span>Observa????es</span>
            <p>{occurrence.description}</p>
          </div>
        </div>

        <div>
          <div>
            <span>Nome do cidad??o</span>
            <p>
              {occurrence.citizen.first_name} {occurrence.citizen.last_name}
            </p>
          </div>

          <div>
            <span>E-mail do cidad??o</span>
            <p>{occurrence.citizen.email}</p>
          </div>

          <div>
            <span>WhatsApp do cidad??o</span>
            <p>{occurrence.citizen.phone_number}</p>
          </div>
        </div>
      </SectionContainer>

      {occurrence.photos.length > 0 && (
        <>
          <SectionTitle>
            Fotos da ocorr??ncia{' '}
            <button
              type="button"
              className="delete-photos"
              onClick={deletePhotos}
            >
              Apagar fotos
            </button>
          </SectionTitle>

          <PhotosContainer>
            {occurrence.photos.map((photo, i) => (
              <img
                key={photo}
                src={photo}
                alt={`Foto da occor??ncia de n??mero ${i}`}
              />
            ))}
          </PhotosContainer>
        </>
      )}

      <SectionTitle>Informa????es do infrator</SectionTitle>

      <SectionContainer>
        <div>
          <div>
            <span>Nome</span>
            <p>{occurrence.violator.name ?? '-'}</p>
          </div>

          <div>
            <span>Informa????es do ve??culo</span>
            <p>{occurrence.violator.vehicle ?? '-'}</p>
          </div>
        </div>

        <div>
          <div>
            <span>Informa????es de endere??o</span>
            <p>{occurrence.violator.address ?? '-'}</p>
          </div>

          <div>
            <span>Outras informa????es</span>
            <p>{occurrence.violator.otherInformation ?? '-'}</p>
          </div>
        </div>
      </SectionContainer>

      <ChangeStatusModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        occurrenceId={id}
        currentStatus={occurrence.status}
        reload={getOccurrence}
      />
    </Container>
  );
};

export default ShowOccurrence;
