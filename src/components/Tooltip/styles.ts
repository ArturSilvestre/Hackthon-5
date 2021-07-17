import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: var(--Black);
    padding: 8px;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
  }
`;
