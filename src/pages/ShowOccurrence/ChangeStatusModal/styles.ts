import { transparentize } from 'polished';
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 500px;
  max-width: 100%;

  h4 {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    color: ${Colors.black};

    margin-bottom: 16px;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    color: ${Colors.black};

    margin-bottom: 16px;

    span {
      color: ${Colors.teal};

      font-weight: 600;
    }
  }

  select {
    padding: 12px;
    margin-bottom: 16px;
    width: 100%;

    border: 0;
    border-radius: 4px;

    background-color: ${transparentize(0.95, Colors.black)};

    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${Colors.black};
  }

  textarea {
    padding: 12px;
    margin-bottom: 16px;
    width: 100%;
    min-width: 100%;
    min-height: 80px;

    border: 0;
    border-radius: 4px;

    background-color: ${transparentize(0.95, Colors.black)};

    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${Colors.black};
  }

  svg {
    fill: ${Colors.teal};

    width: 80px;
    height: 20px;

    display: block;

    margin: 0 auto 16px;
  }

  button {
    display: block;

    cursor: pointer;

    border-radius: 4px;
    border: 0;

    font-family: 'Inter';
    text-align: center;

    padding: 12px 16px;

    background-color: ${Colors.teal};

    font-size: 1.4rem;
    font-weight: 600;

    color: ${Colors.white};

    &:first-of-type {
      margin-bottom: 8px;
    }

    &:last-of-type {
      background-color: ${Colors.lightTeal};
      color: ${Colors.black};
    }
  }
`;
