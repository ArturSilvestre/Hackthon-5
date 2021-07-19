/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import ConfirmAcount from '../pages/ConfirmAcount';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/recuperar" exact component={ForgotPassword} />
      <Route path="/home" exact component={Dashboard} />
      <Route path="/cadastrar" exact component={SignUp} />
      <Route path="/confirmado/:id" exact component={ConfirmAcount} />
    </Switch>
  );
}
