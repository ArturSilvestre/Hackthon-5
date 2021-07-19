import { transparentize } from 'polished';
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

export const Container = styled.div`
  h5 {
    margin-bottom: 8px;

    font-family: 'Inter';
    font-size: 1.4rem;
    font-weight: 600;

    color: ${Colors.black};
  }

  > div {
    display: flex;

    input {
      padding: 12px;
      min-width: 220px;

      border: 0;
      border-radius: 4px 0 0 4px;

      background-color: ${transparentize(0.95, Colors.black)};

      font-family: 'Inter', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${Colors.black};
    }

    button {
      display: block;

      cursor: pointer;

      border-radius: 0 4px 4px 0;
      border: 0;

      font-family: 'Inter';
      text-align: center;

      padding: 8px 16px;

      background-color: ${Colors.teal};

      font-size: 1.6rem;
      font-weight: 500;

      color: ${Colors.white};
    }
  }
`;
