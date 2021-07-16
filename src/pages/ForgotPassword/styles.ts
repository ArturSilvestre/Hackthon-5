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
      color: #393E46;
      margin-bottom: 24px;
      text-align: center;
      font-size: 4.1rem;
    }

    strong {
      font-family: 'Inter',sans-serif;
      font-size: 1.2rem;
      font-weight: 600;
      color: #393E46;
      text-align: left;
      margin-bottom: 12px;
      display: block;
    }

    input {
      font-size: 1.1rem;
      font-family: 'Inter', sans-serif;
      background: ${lighten(0.7, '#393E46')};
      border-radius: 4px;
      width: 100%;
      margin-bottom: 8px;
      padding: 8px;
      border: 1px solid rgba(57, 62, 70, 0.05);
      color: #393E46;
      

      ::placeholder {
        color: rgba(57, 62, 70, 0.4);
      }
    }

    button {
      background: var(--Blue);
      color: #FFF;
      font-size: 1rem;
      width: 100%;
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      padding: 1.2rem;
      border-style: none;
      margin-bottom: 20px;
    }
  }

`;

export const Background = styled.div`
  display: flex;
  img {
    width: 90%;
  }
`;
