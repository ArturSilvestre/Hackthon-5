import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  width: 100%;
`;

export const Aside = styled.aside`
  display: flex;
  width: 5%;
  height: 100vh;
  background: var(--Black);
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  height: 35px;
  margin: 0 auto;
  padding: 3px;
  border-bottom: 1px solid var(--Black);
  align-items: center;
  justify-content: space-between;

  h3 {
    color: var(--Black);
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 2.4rem;
    margin-left: 15px;
  }

  span {
    color: var(--Black);
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    margin-right: 15px;
  }
`;
