// import { FiMail, FiLock, FiUser, FiUsers } from 'react-icons/fi';
import { Container, Main, Aside, Content, Header } from './styles';

// import LogoSignIn from '../../assets/logo.svg';

// import Input from '../../components/Input';
// import Button from '../../components/Button';

export default function Dashboard(): JSX.Element {
  return (
    <Main>
      <Container>
        <Aside>
          <img src="" alt="" />
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </Aside>
        <Content>
          <Header>
            <h3>Página inicial </h3>

            <span>Pedro Lima Reis </span>
          </Header>

          <div>
            <h4>Filtros</h4>
            <strong>Tipos de ocorrências</strong>
            <input
              type="checkbox"
              name="descarte"
              value="Descarte irregular de residuos"
            />
          </div>
        </Content>
      </Container>
    </Main>
  );
}
