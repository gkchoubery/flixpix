import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import NotFoundComponent from './components/notfound';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
