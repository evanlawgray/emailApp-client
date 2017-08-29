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

import MainLayout from './containers/MainLayout';
import App from './containers/App';
import HomeScreen from './containers/HomeScreen';
import Login from './containers/Login';

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <Router>
        <MainLayout>
          <App>
            <Switch>
              <Route exact path="/" component={ HomeScreen }/>
              <Route path="/login" component={Login} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
