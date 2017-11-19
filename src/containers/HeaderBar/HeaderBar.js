import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const appBarStyles = { position: 'fixed', zIndex: '1000000' };
const buttonStyles = { color: 'white', marginBottom: '15px', textTransform: 'uppercase' };
const buttonContainer = { display: 'inline-block' };

class HeaderBar extends Component {
  render() {
    return (
      <AppBar
        style={ appBarStyles }
        title="Email Client"
        iconElementLeft={ <span style={{ height: 0, width: 0 }}></span> }
        iconElementRight={
          <div>
            <Link to={'/'}>
              <FlatButton label="Your Emails" style={buttonStyles} />
            </Link>
            {
              this.props.userInfo.isLoggedIn ?
                <Link to={'/logout'}>
                  <FlatButton label="Logout" style={buttonStyles} />
                </Link> :
                <div style={ buttonContainer }>
                  <Link to={'/login'}>
                    <FlatButton label="Login" style={buttonStyles} />
                  </Link>

                  <Link to={'/signup'}>
                    <FlatButton label="Signup" style={buttonStyles} />
                  </Link>
                </div>
            }
          </div>
        }
      />
    );
  }
}

function mapStateToProps( state ) {
  return {
    userInfo: state.user
  }
}

export default connect(mapStateToProps)(HeaderBar);
