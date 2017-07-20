import React from 'react';
import { Router, Route } from 'react-router';

import App from './layouts/main';
import Login from './layouts/login';
import NotFound from './layouts/notfound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;