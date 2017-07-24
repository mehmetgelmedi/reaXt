import React from 'react';
import { Router, Route } from 'react-router';

import App from './layouts/main';
import Login from './layouts/login';
import NotFound from './layouts/notfound';
import Profile from './layouts/profile';

import store from 'store';

function privateResources(nextState, replace, callback){
    if(store.get('user') == null)
      replace('/login'); //401 -> login

    callback();
}

function publicResources(nextState, replace, callback){
    if(store.get('user') !=null){
      console.log('acik');
      replace('/');
    }

    callback();
}

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} onEnter={publicResources} />
    <Route path="/profile" component={Profile} onEnter={privateResources} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;