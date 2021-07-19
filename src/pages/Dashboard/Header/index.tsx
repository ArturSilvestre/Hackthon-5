import { useRef, useCallback, useState } from 'react';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../../hooks/ToastContext';
import api from '../../../services/api';
import {
  Container,
  GoToOccurrenceContainer,
  SearchContainer,
  SelectTypeContainer,
} from './styles';

interface IProps {
  selectedType: 'read' | 'unread';
  setSelectedType: (value: 'read' | 'unread') => void;
  search: (value: string) => void;
}

const Header = ({
  selectedType,
  setSelectedType,
  search,
}: IProps): JSX.Element => {
  const history = useHistory();
  const { addToast } = useToast();

  const searchInputRef = useRef<HTMLInputElement>(null);
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
        type: 'error',
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

        <SearchContainer>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Pesquise por endereço ou nome do solicitante"
          />

          <button
            type="button"
            onClick={() =>
              searchInputRef.current?.value &&
              search(searchInputRef.current?.value)
            }
          >
            Buscar
          </button>
        </SearchContainer>
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
