import { useRef, useCallback, useState } from 'react';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../../hooks/ToastContext';
import api from '../../../services/api';
import {
  Container,
  GoToOccurrenceContainer,
  SearchInput,
  SelectTypeContainer,
} from './styles';

interface IProps {
  selectedType: 'read' | 'unread';
  setSelectedType: (value: 'read' | 'unread') => void;
}

const Header = ({ selectedType, setSelectedType }: IProps): JSX.Element => {
  const history = useHistory();
  const { addToast } = useToast();

  const goToOccurenceInputRef = useRef<HTMLInputElement>(null);

  const [isLoadingOccurrence, setIsLoadingOccurrence] = useState(false);

  const goToOccurrence = useCallback(async () => {
    setIsLoadingOccurrence(true);

    const response = await api.get(
      `/occurrence/employee/number/${goToOccurenceInputRef.current?.value}`,
    );

    if (response.status === 200) {
      history.push(`/occurrence/${response.data.id}`);
    } else if (response.status === 404) {
      addToast({
        title: 'Ocorrência não encontrada',
      });
    }

    setIsLoadingOccurrence(false);
  }, [addToast, history]);

  return (
    <Container>
      <div>
        <SelectTypeContainer>
          <button
            type="button"
            className={selectedType === 'unread' ? 'selected' : 'not-selected'}
            onClick={() => setSelectedType('unread')}
          >
            Não lidas
          </button>
          <button
            type="button"
            className={selectedType === 'read' ? 'selected' : 'not-selected'}
            onClick={() => setSelectedType('read')}
          >
            Lidas
          </button>
        </SelectTypeContainer>

        <SearchInput
          type="text"
          placeholder="Pesquise por endereço ou nome do solicitante"
        />
      </div>

      <div>
        <GoToOccurrenceContainer>
          <h4>Ir para ocorrência</h4>

          <div>
            <input
              ref={goToOccurenceInputRef}
              type="text"
              placeholder="Nº da ocorrência"
              disabled={isLoadingOccurrence}
            />

            <button
              type="button"
              disabled={isLoadingOccurrence}
              onClick={goToOccurrence}
            >
              <FaLongArrowAltRight />
            </button>
          </div>
        </GoToOccurrenceContainer>
      </div>
    </Container>
  );
};

export default Header;
