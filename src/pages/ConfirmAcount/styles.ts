import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    margin: 2rem 1rem 0rem 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 550;
    line-height: 1.3;
    text-align: center;
    max-width: 600px;
    color: var(--Black);

    > span {
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--Blue);
      font-weight: 600;
    }
  }

  span {
    max-width: 600px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.9rem;
    color: var(--Black);
    text-align: center;
  }
`;
