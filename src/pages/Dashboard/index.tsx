import { useEffect, useState } from 'react';
import { Container, Main, Content, Article, ContainerArticle } from './styles';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import OccurrencesContainer from './OccurrencesContainer';
import api from '../../services/api';
import OccurrenceTypes from '../../enums/OccurrenceTypes';
import OccurrenceStatus from '../../enums/OccurrenceStatus';

export interface IOccurrence {
  id: string;
  category: OccurrenceTypes;
  occurrenceDate: string;
  occurrenceNumber: string | null;
  violationNumber: string | null;
  status: OccurrenceStatus;
}

export default function Dashboard(): JSX.Element {
  const [occurrences, setOccurrences] = useState<IOccurrence[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOccurrences = async () => {
    setIsLoading(true);

    const response = await api.get('/occurrence/employee/list');

    console.log(response);
    setOccurrences(response.data.occurrences);

    setIsLoading(false);
  };

  useEffect(() => {
    getOccurrences();
  }, []);

  return (
    <Main>
      <Menu />
      <Container>
        <Content>
          <Header />
          <ContainerArticle>
            <Article>
              <aside>
                <h3>Filtros</h3>
                <span>Tipos de ocorrência</span>
                <ul>
                  <li>
                    <input type="checkbox" />
                    Descarte irrecular de residuos
                  </li>
                  <li>
                    <input type="checkbox" />
                    Descarte irrecular de residuos
                  </li>
                  <li>
                    <input type="checkbox" />
                    Descarte irrecular de residuos
                  </li>
                </ul>
              </aside>
              <article>
                <header>
                  <button type="button">Não lidas</button>
                  <button type="button">Lidas</button>
                </header>
                <input
                  type="text"
                  placeholder="Pesquise por endereço ou nome do solicitante"
                />
                <ul>
                  <span>oi</span>
                  <span>oi</span>
                  <span>oi</span>
                  <span>oi</span>
                </ul>
              </article>
              <div>
                <h3>Ir para ocorrência</h3>
                <input type="text" placeholder="N da ocorrência" />
                <button type="button"> + </button>
              </div>
            </Article>
          </ContainerArticle>
          <OccurrencesContainer occurrences={occurrences} />
        </Content>
      </Container>
    </Main>
  );
}
