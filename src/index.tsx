import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import NotFoundComponent from './components/notfound';
import './index.css'
import ShowDetailsComponent from './components/showDetails';
import BrowseComponent from './components/browse';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/browse" component={BrowseComponent} />
        <Route path="/detail/:id" component={ShowDetailsComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
