import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 24px;
`;

export const LoaderContainer = styled.div`
  margin: 16px auto;

  svg {
    width: 60px;
    height: 15px;

    fill: ${Colors.teal};
  }
`;
