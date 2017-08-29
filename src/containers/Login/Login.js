import React from 'react';

// import { connect } from 'react-redux';

import Gandalf from 'gandalf-validator';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// import { loginUser } from '../../redux/actions';

import styles from './styles.css';

const buttonStyles = {
  height: '50px',
  width: '130px',
  margin: '0',
  padding: 10
}

const formContainerStyles = {
  height: 'auto',
  width: 500,
  margin: '0 auto',
  marginTop: '10%',
  padding: '20',
  paddingTop: '30',
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

export default Login;
