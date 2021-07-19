import { useMemo } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { Container, Content } from './styles';

export default function Header(): JSX.Element {
  const { user } = useAuth();
  const { pathname } = useLocation();

  const title = useMemo(() => {
    switch (pathname) {
      case '/cadastrar':
        return 'Cadastrar nova conta';

      default:
        return 'Página inicial';
    }
  }, [pathname]);

  return (
    <Container>
      <Content>
        <h1>{title}</h1>

        <span>
          {`${user.first_name} ${user.last_name}`} <FaUserAlt size={24} />
        </span>
      </Content>
    </Container>
  );
}
