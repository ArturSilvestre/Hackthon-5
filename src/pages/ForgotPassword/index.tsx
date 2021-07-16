import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

export function ForgotPassword() {
  return (
    <Container>
      <Content>
        <form>
          <h3>Acesso <br /><span>Administrativo</span></h3>
          <h1>Recuperar senha</h1>
          <strong>1. Insira seu e-mail para receber um link de recuperação</strong>

          <input placeholder="Email" />
          <button type="submit">Enviar</button>
        </form>
      </Content>
      
      <Background>
        <img src={LogoSignIn} alt="" />
      </Background>
    </Container>
  )
}