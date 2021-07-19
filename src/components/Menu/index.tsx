import { FiUser, FiHome, FiArchive } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Menu(): JSX.Element {
  return (
    <Container>
      <nav>
        <ul>
          <Link to="/">
            <li>
              <FiHome size={20} />
            </li>
          </Link>
          <Link to="/recuperar">
            <li>
              <FiArchive size={20} />
            </li>
          </Link>
          <Link to="/cadastrar">
            <li>
              <FiUser size={20} />
            </li>
          </Link>
        </ul>
      </nav>
    </Container>
  );
}