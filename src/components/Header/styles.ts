import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 32px;
  border-bottom: 1px solid ${Colors.black};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 600;

    color: ${Colors.black};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-around;

    color: ${Colors.black};

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 1.8rem;
    font-weight: 500;

    svg {
      margin-left: 24px;
    }
  }
`;
