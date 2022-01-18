import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import ConfirmAccount from '../pages/ConfirmAccount';
import { useAuth } from '../hooks/AuthContext';
import MainContainer from '../components/MainContainer';
import ShowOccurrence from '../pages/ShowOccurrence';
import ResetPassword from '../pages/ResetPassword';

export const Routes = (): JSX.Element => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Switch>
        <>
          <Route path="/" exact component={SignIn} />
          <Route path="/recuperar-senha" exact component={ForgotPassword} />
          <Route path="/alterar-senha" exact component={ResetPassword} />
          <Route path="/confirmacao/:id" exact component={ConfirmAccount} />
        </>
      </Switch>
    );
  }

  return (
    <MainContainer>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/occurrence/:id" exact component={ShowOccurrence} />
        <Route path="/cadastrar" exact component={SignUp} />
      </Switch>
    </MainContainer>
  );
};
