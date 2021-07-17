/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/recuperar" exact component={ForgotPassword} />
      <Route path="/home" exact component={Dashboard} />
    </Switch>
  );
}
