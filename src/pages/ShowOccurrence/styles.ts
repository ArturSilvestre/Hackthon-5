import { transparentize } from 'polished';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.div`
  padding: 24px;
`;

export const SectionTitle = styled.h4`
  display: flex;
  align-items: center;

  margin-bottom: 24px;

  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;

  color: ${Colors.black};
`;

export const DatetimeContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 64px;

  font-size: 1.25rem;
  color: ${Colors.black};

  svg {
    margin-right: 8px;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  > div {
    > div {
      margin-bottom: 24px;

      font-family: 'Inter', sans-serif;
      font-weight: 500;

      span {
        font-size: 1.2rem;
        font-weight: 600;

        color: ${transparentize(0.5, Colors.black)};
      }

      p {
        font-size: 1.6rem;

        color: ${Colors.black};

        > svg {
          margin-left: 16px;

          font-size: 2rem;
          color: ${Colors.teal};
        }
      }
    }
  }
`;

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  align-items: center;

  margin-bottom: 24px;

  img {
    width: 100%;
  }
`;

export const ChangeStatusButton = styled.button`
  margin-top: 16px;
  padding: 16px 48px;

  cursor: pointer;

  border: 0;
  border-radius: 4px;

  background-color: ${Colors.teal};

  font-family: 'Inter', sans-serif;
  font-family: 1.6rem;
  font-weight: 600;

  color: ${Colors.white};
`;
