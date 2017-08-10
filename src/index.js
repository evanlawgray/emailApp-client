import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';

import store from './redux/store';

import styles from './styles/index.css';

import App from './containers/App';
import HomeScreen from './containers/HomeScreen';

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={ HomeScreen }/>
          </Switch>
        </App>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
