import { Container } from './styles';

const Filters = (): JSX.Element => {
  return (
    <Container>
      <h3>Filtros</h3>

      <span>Tipos de ocorrĂȘncia</span>

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
    </Container>
  );
};

export default Filters;
