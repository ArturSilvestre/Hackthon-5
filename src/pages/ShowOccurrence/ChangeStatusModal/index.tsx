import { transparentize } from 'polished';
import { useCallback, useState, useRef, useMemo } from 'react';

import Modal from 'react-modal';
import Loader from 'react-loader-spinner';
import OccurrenceStatus from '../../../enums/OccurrenceStatus';
import api from '../../../services/api';
import Colors from '../../../styles/Colors';
import getOccurrenceStatusInformation from '../../../utilsFunctions/getOccurrenceStatusInformation';
import { Container } from './styles';

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  currentStatus: OccurrenceStatus;
  occurrenceId: string;
  reload: () => void;
}

const customModalStyle: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: transparentize(0.1, Colors.black),
  },
};

const statusOptions = [
  OccurrenceStatus.RegistroNumeroDeOcorrencia,
  OccurrenceStatus.RegistroAutoInfracao,
  OccurrenceStatus.Encaminhamento2Promotoria,
  OccurrenceStatus.Encaminhamento7Promotoria,
  OccurrenceStatus.EncaminhamentoPoliciaCivil,
  OccurrenceStatus.EncaminhamentoPoliciaMilitarAmbiental,
  OccurrenceStatus.EncaminhamentoCETESB,
  OccurrenceStatus.NaoProcede,
];

const ChangeStatusModal = ({
  isOpen,
  setIsOpen,
  currentStatus,
  occurrenceId,
  reload,
}: IProps): JSX.Element => {
  const statusRef = useRef<HTMLSelectElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const changeStatus = useCallback(async () => {
    if (!statusRef.current?.value) return;

    setIsLoading(true);

    const body = {
      status: statusRef.current?.value,
      comment: commentRef.current?.value,
    };

    const response = await api.put(`/occurrence/${occurrenceId}`, body);

    if (response.status === 204) {
      reload();
      setIsOpen(false);
    }

    setIsLoading(false);
  }, [occurrenceId, reload, setIsOpen]);

  const mappedStatusOptions = useMemo(
    () =>
      statusOptions
        .filter(option => option !== currentStatus)
        .map(status => ({
          name: getOccurrenceStatusInformation(status).title,
          value: status,
        })),
    [currentStatus],
  );

  const currentStatusTitle =
    getOccurrenceStatusInformation(currentStatus).title;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customModalStyle}
      ariaHideApp={false}
    >
      <Container>
        <h4>Alterar status da solicitação</h4>

        <p>
          Status atual: <span>{currentStatusTitle}</span>
        </p>

        <select
          ref={statusRef}
          id="status-select"
          disabled={isLoading}
          defaultValue=""
        >
          <option disabled value="">
            Selecione o novo status
          </option>
          {mappedStatusOptions.map(status => (
            <option key={status.value} value={status.value}>
              {status.name}
            </option>
          ))}
        </select>

        <textarea
          ref={commentRef}
          placeholder="Comentário (opcional)"
          disabled={isLoading}
        />

        {isLoading ? (
          <Loader type="ThreeDots" />
        ) : (
          <>
            <button type="button" disabled={isLoading} onClick={changeStatus}>
              Alterar status
            </button>
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </button>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ChangeStatusModal;
