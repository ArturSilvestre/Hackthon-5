import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../Utils/getValidationErrors';

import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormProps {
  email: string;
  password: string;
}

export default function SignIn(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (loginProps: SignInFormProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatória')
            .email('Digite email valido'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
        });

        await schema.validate(loginProps, {
          abortEarly: false,
        });

        signIn({
          email: loginProps.email,
          password: loginProps.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h3>
            Acesso <br />
            <span>Administrativo</span>
          </h3>
          <h1>Seja bem-vindo!</h1>
          <strong>1. Informe seu email e senha</strong>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
          <Link to="/recuperar">Esqueci minha senha</Link>
        </Form>
      </Content>

      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
