/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function Button({
  loading,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
}
