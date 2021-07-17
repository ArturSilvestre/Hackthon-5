import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  margin: 0 auto;
  border-bottom: 1px solid var(--Black);
`;

export const Content = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--Black);
    font-size: 2.4rem;
    font-style: normal;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    line-height: 2.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: var(--Black);
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.6rem;

    svg {
      margin-left: 10px;
      margin-bottom: 6px;
    }
  }
`;
