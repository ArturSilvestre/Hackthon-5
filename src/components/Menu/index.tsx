import { FiUser, FiHome, FiArchive } from 'react-icons/fi';
import { Container } from './styles';

export default function Menu(): JSX.Element {
  return (
    <Container>
      <nav>
        <ul>
          <a href="home">
            <li>
              <FiHome size={20} />
            </li>
          </a>
          <a href="current">
            <li>
              <FiArchive size={20} />
            </li>
          </a>
          <a href="user">
            <li>
              <FiUser size={20} />
            </li>
          </a>
        </ul>
      </nav>
    </Container>
  );
}
