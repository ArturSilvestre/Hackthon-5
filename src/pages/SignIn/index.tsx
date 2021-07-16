import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignIn(): JSX.Element {
  return (
    <Container>
      <Content>
        <form>
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
        </form>
      </Content>

      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
