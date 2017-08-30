import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Gandalf from 'gandalf-validator';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import styles from './styles.css';

import { _signupUser } from '../../redux/actions';

const buttonStyles = {
  height: '50px',
  width: '130px',
  margin: '0 auto',
  padding: '10px'
}

const formContainerStyles = {
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
        name: 'username',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Username',
        },
        debounce: 300
      },
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

  handleSignup() {
    const data = this.getCleanFormData();

    if( !data ) return;

    this.props.signupUser( data );
  }

  render() {
    const fields = this.state.fields;
    return (
      <div className={styles.contentContainer}>
        <Card style={formContainerStyles}>
          <form>
            <h2>Enter Your Login Details</h2>

            <div className={styles.fieldsContainer}>
              {fields.username.element} <br />
              {fields.email.element} <br />
              {fields.password.element} <br />
            </div>

            <section className={styles.buttonContainer}>
              <FlatButton
                label={'Submit'}
                style={buttonStyles}
                onTouchTap={() => this.handleSignup()}
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
    signupUser: (userInfo) => dispatch( _signupUser(userInfo) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
