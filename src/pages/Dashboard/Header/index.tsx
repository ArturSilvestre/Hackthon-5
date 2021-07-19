import { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import {
  Container,
  GoToOccurrenceContainer,
  SearchInput,
  SelectTypeContainer,
} from './styles';

const Header = (): JSX.Element => {
  const [selectedType, setSelectedType] = useState<'read' | 'not-read'>(
    'not-read',
  );

  return (
    <Container>
      <div>
        <SelectTypeContainer>
          <button
            type="button"
            className={
              selectedType === 'not-read' ? 'selected' : 'not-selected'
            }
            onClick={() => setSelectedType('not-read')}
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
            <input type="text" placeholder="Nº da ocorrência" />

            <button type="button">
              <FaLongArrowAltRight />
            </button>
          </div>
        </GoToOccurrenceContainer>
      </div>
    </Container>
  );
};

export default Header;
