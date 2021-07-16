import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

export default function Input({
  icon: Icon,
  ...rest
}: InputProps): JSX.Element {
  return (
    <Container>
      <input {...rest} />
      {Icon && <Icon size={18} />}
    </Container>
  );
}
