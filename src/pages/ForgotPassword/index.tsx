import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function ForgotPassword(): JSX.Element {
  function handleSubmit(data: string): void {
    // eslint-disable-next-line no-console
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
          <h1>Recuperar senha</h1>
          <strong>
            1. Insira seu e-mail para receber um link de recuperação
          </strong>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Enviar</Button>
        </Form>
      </Content>

      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
