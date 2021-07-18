import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../Utils/getValidationErrors';

import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface LoginProps {
  email: string;
  password: string;
}

export default function SignUp(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: LoginProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório'),
        sobrenome: Yup.string().required('Sobrenome obrigatório'),
        chapa: Yup.string().required('Chapa obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatória')
          .email('Digite email valido'),
        password: Yup.string().min(6, 'No minimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Criar uma nova conta</h1>
          <strong>1. Informe os dados para cadastrar um novo usuario</strong>

          <Input name="nome" icon={FiMail} placeholder="Nome" />
          <Input name="sobrenome" icon={FiMail} placeholder="Sobrenome" />
          <Input name="chapa" icon={FiMail} placeholder="Chapa" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>

      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
