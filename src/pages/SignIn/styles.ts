import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 80%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: left;

    h3 {
      text-align: center;
      font-family: 'Archivo', sans-serif;
      font-weight: 700;
      font-size: 2.1rem;
      color: var(--Black);
      margin-bottom: 10px;

      span {
        color: var(--Blue);
      }
    }

    h1 {
      color: var(--Black);
      margin-bottom: 24px;
      text-align: center;
      font-size: 4.1rem;
    }

    a {
      display: block;
      font-family: 'Inter', sans-serif;
      width: 100%;
      text-align: center;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
      color: var(--Black);
    }

    strong {
      font-family: 'Inter', sans-serif;
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--Black);
      text-align: left;
      margin-bottom: 12px;
      display: block;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  img {
    width: 90%;
  }
`;
