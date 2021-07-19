import { transparentize } from 'polished';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.a`
  display: flex;
  flex-direction: column;

  padding: 12px 24px;
  border-radius: 4px;

  background-color: ${transparentize(0.85, Colors.black)};

  cursor: pointer;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 16px;

    > div {
      display: flex;
      align-items: center;

      &.right {
        justify-content: flex-end;
      }

      &.column {
        flex-direction: column;
        align-items: flex-start;

        &.right {
          align-items: flex-end;
        }
      }
    }

    span {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 1rem;
    }

    p {
      display: flex;
      align-items: center;

      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 1.4rem;

      &.time {
        font-size: 1.2rem;
        margin-left: 8px;
      }
    }
  }

  .notification {
    width: 16px;
    height: 16px;

    margin-left: 8px;

    border-radius: 50%;

    &.red {
      background-color: ${Colors.red};
    }

    &.yellow {
      background-color: ${Colors.yellow};
    }

    &.green {
      background-color: ${Colors.green};
    }
  }

  .type-icon {
    font-size: 2rem;

    color: ${Colors.teal};
  }
`;
