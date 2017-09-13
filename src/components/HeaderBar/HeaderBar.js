import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const appBarStyles = { position: 'fixed', zIndex: '1000000' };
const buttonStyles = { color: 'white', marginBottom: '15px', textTransform: 'uppercase' };

const HeaderBar = () => (
  <AppBar
    style={ appBarStyles }
    title="Email Client"
    iconElementRight={
      <div>
        <Link to={'/'}>
          <FlatButton label="Your Emails" style={buttonStyles} />
        </Link>

        <Link to={'/login'}>
          <FlatButton label="Login" style={buttonStyles} />
        </Link>
      </div>
    }
  />
);

export default HeaderBar;
