import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: ${lighten(0.6, '#00ADB5')};
    color: #006469;
  `,

  success: css`
    background: ${lighten(0.5, '#00ca4e')};
    color: #007e30;
  `,

  error: css`
    background: ${lighten(0.4, '#dc1637')};
    color: #960f26;
  `,
};

export const Container = styled.div<ContainerProps>`
  width: 290px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 14px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 1.2rem;
      opacity: 0.8;
      line-height: 2rem;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }

      /* button {} */
    `}
`;
