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
import SearchComponent from './components/search';
import ContainerComponent from './components/container';
import DashboardComponent from './components/dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <ContainerComponent>
          <Route exact path="/" component={App} />
          <Route exact path="/browse" component={BrowseComponent} />
          <Route exact path="/detail/:id" component={ShowDetailsComponent} />
          <Route exact path="/search" component={SearchComponent} />
          <Route exact path='/dashboard' component={DashboardComponent} />
          <Route path="/not_found" component={NotFoundComponent} />
        </ContainerComponent>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
