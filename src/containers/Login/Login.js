import React from 'react';

import { connect } from 'react-redux';

import Gandalf from 'gandalf-validator';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { _loginUser } from '../../redux/actions';

import styles from './styles.css';

const buttonStyles = {
  height: '50px',
  width: '130px',
  margin: '0',
  padding: '10px'
}

const formContainerStyles = {
  height: 'auto',
  width: '500px',
  margin: '0 auto',
  marginTop: '10%',
  padding: '20px',
  paddingTop: '30px',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  alignItems: 'center'
}

class Login extends Gandalf {
  componentWillMount() {
    const fieldDefinitions = [
      {
        name: 'email',
        component: TextField,
        validators: ['required', 'email'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
        },
        debounce: 300
      },
      {
        name: 'password',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
          type: 'password'
        },
        debounce: 300
      }
    ]

    this.buildFields(fieldDefinitions);
  }

  handleLogin() {
    const data = this.getCleanFormData();

    if( !data ) return;

    this.props.loginUser( data );
  }

  render() {
    const fields = this.state.fields;
    return (
      <div className={styles.contentContainer}>
        <Card style={formContainerStyles}>
          <form>
            <h2>Enter Your Login Details</h2>

            <div className={styles.fieldsContainer}>
              {fields.email.element} <br />
              {fields.password.element} <br />
            </div>

            <section className={styles.buttonContainer}>
              <FlatButton
                label={'Login'}
                style={buttonStyles}
                onTouchTap={() => this.handleLogin()}
              />
              <FlatButton
                label={'Sign Up'}
                style={buttonStyles}
              />
            </section>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user:state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userInfo) => dispatch(_loginUser( userInfo ))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
