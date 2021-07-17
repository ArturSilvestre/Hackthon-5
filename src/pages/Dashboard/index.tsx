import { Container, Main, Content, Article, ContainerArticle } from './styles';

import Menu from '../../components/Menu';
import Header from '../../components/Header';

export default function Dashboard(): JSX.Element {
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
        </Content>
      </Container>
    </Main>
  );
}
