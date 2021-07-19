import { FaUserAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/AuthContext';
import { Container, Content } from './styles';

export default function Header(): JSX.Element {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <h1>Página Inicial</h1>

        <span>
          {`${user.first_name} ${user.last_name}`} <FaUserAlt size={24} />
        </span>
      </Content>
    </Container>
  );
}
