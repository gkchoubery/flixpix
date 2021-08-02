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

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <ContainerComponent>
          <Route exact path="/" component={App} />
          <Route path="/browse" component={BrowseComponent} />
          <Route path="/detail/:id" component={ShowDetailsComponent} />
          <Route path="/search" component={SearchComponent} />
          <Route component={NotFoundComponent} />
        </ContainerComponent>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
