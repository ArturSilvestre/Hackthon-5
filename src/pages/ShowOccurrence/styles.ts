import { transparentize } from 'polished';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const LoaderContainer = styled.div`
  margin: 96px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${Colors.teal};

    width: 80px;
    height: 20px;

    display: block;

    margin-bottom: 24px;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 600;

    color: ${Colors.black};
  }
`;

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

  .delete-photos {
    margin-left: 32px;
    padding: 12px 32px;

    cursor: pointer;

    border: 0;
    border-radius: 4px;

    background-color: ${Colors.red};

    font-family: 'Inter', sans-serif;
    font-family: 1.6rem;
    font-weight: 600;

    color: ${Colors.white};
  }
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

  margin-bottom: 24px;

  > div {
    > div {
      display: flex;
      flex-direction: column;

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

  iframe {
    width: 80%;
    min-height: 260px;

    border: 0;

    margin-bottom: 16px;
  }
`;

export const PartialLoadingContainer = styled.div`
  svg {
    fill: ${Colors.teal};

    width: 40px;
    height: 10px;

    display: block;

    margin-left: 32px;
  }
`;

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  align-items: center;

  margin-bottom: 48px;

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
