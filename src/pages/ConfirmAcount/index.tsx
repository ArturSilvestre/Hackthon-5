import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

export default function ConfirmAcount(): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Eco Franca Logo" />

        <h3>
          Confirmado com <span>sucesso!</span>
        </h3>
        <span>Sua conta já pode ser acessada pelo aplicativo.</span>
      </Content>
    </Container>
  );
}
