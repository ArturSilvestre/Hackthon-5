import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignIn(): JSX.Element {
  function handleSubmit(data: string): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
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
          <a href="forgot">Esqueci minha senha</a>
        </Form>
      </Content>

      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
