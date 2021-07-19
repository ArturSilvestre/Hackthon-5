import styled from 'styled-components';
import { lighten } from 'polished';
import Colors from '../../styles/Colors';

export const Container = styled.aside`
  display: flex;
  width: 80px;
  height: 100vh;
  background-color: ${Colors.black};
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
