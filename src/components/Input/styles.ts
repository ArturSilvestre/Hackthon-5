import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import Tooltip from '../Tooltip';
import Colors from '../../styles/Colors';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 8px;

  > div {
    background: ${lighten(0.7, '#393E46')};
    border-radius: 4px;
    width: 100%;
    padding: 8px;

    border: 1px solid ${lighten(0.7, '#393E46')};
    color: ${lighten(0.3, '#393E46')};

    display: flex;
    align-items: top;

    ${props =>
      props.isErrored &&
      css`
        color: var(--Red);
        border-color: var(--Red);
      `}

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
      margin-right: 16px;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 18px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;

export const ErrorText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  margin: 4px 0 16px;

  color: ${Colors.red};
`;
