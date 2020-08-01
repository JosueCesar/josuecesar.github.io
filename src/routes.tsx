import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
);

export default Routes;
