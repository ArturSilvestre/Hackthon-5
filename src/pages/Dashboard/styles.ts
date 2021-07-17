import styled from 'styled-components';
import { lighten } from 'polished';

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

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ContainerArticle = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;

  aside {
    width: 20%;
    align-items: center;

    h3 {
      color: var(--Black);
      margin-bottom: 5px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: bold;
      font-size: 2.1rem;
      line-height: 2.9rem;
    }

    span {
      color: var(--Black);
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.7rem;
    }

    ul {
      margin-top: 5px;
      list-style: none;
      align-items: center;
    }

    ul li {
      align-items: center;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.7rem;
      color: var(--Black);
    }

    input {
      align-items: center;
      margin-right: 4px;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    width: 55%;

    button {
      font-family: 'Inter';
      font-size: 1.9rem;
      line-height: 2.1rem;
      align-items: center;
      border: 0;
      padding: 8px;
      background: ${lighten(0.1, '#02888E')};
      color: #f5f5f5;
      border-radius: 2px;
      margin: 0 15px 10px 0;
    }

    input {
      width: 100%;
      padding: 4px;
    }
  }

  div {
    width: 20%;

    h3 {
      color: var(--Black);
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2.5rem;
    }

    input {
      width: 80%;
      padding: 5px;
    }

    button {
      background: ${lighten(0.1, '#02888E')};
      border: 0;
      padding: 6px;
      color: #f5f5f5;
      border-radius: 2px;
    }
  }
`;
