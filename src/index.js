import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';

import styles from './styles/index.css';

import store from './redux/store';

import MainLayout from './containers/MainLayout';
import App from './containers/App';
import HomeScreen from './containers/HomeScreen';
import Login from './containers/Login';
import Signup from './containers/Signup';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <Router>
        <MainLayout>
          <App>
            <Switch>
              <Route exact path="/" component={ HomeScreen }/>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
