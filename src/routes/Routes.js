import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import  LoginPage  from "../components/Login/Login";

import DashboardPage from '../containers/Dashboard';

import ChartsPage from '../containers/Charts';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
        {/* Must be authenticated */}
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/charts" exact component={ChartsPage} />
          {/* Must be authenticated */}
        <Route path="/Login" exact component={LoginPage} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
