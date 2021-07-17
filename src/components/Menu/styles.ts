import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.aside`
  display: flex;
  width: 5%;
  height: 100vh;
  margin: 0 auto;
  background: var(--Black);
  align-items: center;
  text-align: center;

  nav {
    width: 100%;
    padding: 5px;
  }

  ul li {
    width: 100%;
    margin-bottom: 5px;
    padding: 5px;
  }

  svg {
    align-items: center;
    color: ${lighten(0.7, '#393E46')};
  }
`;
