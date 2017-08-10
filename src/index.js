import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';

import styles from './styles/index.css';

import App from './containers/App';
import HomeScreen from './containers/HomeScreen';

ReactDOM.render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={ HomeScreen }/>
        </Switch>
      </App>
    </Router>
  </MuiThemeProvider>
  , document.getElementById('root'));
