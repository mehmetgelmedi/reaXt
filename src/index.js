import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router/lib';

import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('app')
);