import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import { Container } from './styles';

interface IProps {
  children: JSX.Element;
}

const MainContainer = ({ children }: IProps): JSX.Element => {
  return (
    <Container>
      <Menu />

      <main>
        <Header />
        {children}
      </main>
    </Container>
  );
};

export default MainContainer;
