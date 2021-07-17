import { FaUserAlt } from 'react-icons/fa';
import { Container, Content } from './styles';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Content>
        <h1>Página Inicial</h1>

        <span>
          Pedro Lima Reis <FaUserAlt size={24} />
        </span>
      </Content>
    </Container>
  );
}
