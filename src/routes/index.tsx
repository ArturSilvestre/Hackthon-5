/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import ConfirmAcount from '../pages/ConfirmAcount';
import { useAuth } from '../hooks/AuthContext';
import MainContainer from '../components/MainContainer';

export function Routes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Switch>
        <>
          <Route path="/" exact component={SignIn} />
          <Route path="/recuperar" exact component={ForgotPassword} />
        </>
      </Switch>
    );
  }

  return (
    <MainContainer>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cadastrar" exact component={SignUp} />
        <Route path="/confirmado/:id" exact component={ConfirmAcount} />
      </Switch>
    </MainContainer>
  );
}
