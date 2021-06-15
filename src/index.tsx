import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import NotFoundComponent from './components/notfound';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFoundComponent} />
      </Switch>
      <FooterComponent />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
