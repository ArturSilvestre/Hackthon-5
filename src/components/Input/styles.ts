import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${lighten(0.7, '#393E46')};
  border-radius: 4px;
  width: 100%;
  padding: 8px;

  border: 1px solid ${lighten(0.7, '#393E46')};
  color: ${lighten(0.3, '#393E46')};

  display: flex;
  align-items: top;
  margin-bottom: 9px;

  ${props =>
    props.isFocused &&
    css`
      color: var(--Blue);
      border-color: var(--Blue);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--Blue);
    `}

    ${props =>
    props.isErrored &&
    css`
      color: var(--Red);
      border-color: var(--Red);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;

    ::placeholder {
      color: ${lighten(0.3, '#393E46')};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
