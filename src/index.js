import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/index.css';

import App from './containers/App';
import HomeScreen from './containers/HomeScreen';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={ HomeScreen }/>
      </Switch>
    </App>
  </Router>
  , document.getElementById('root'));
