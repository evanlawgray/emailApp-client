import React from 'react';

import Gandalf from 'gandalf-validator';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import EmailTextArea from '../../components/EmailTextArea';

import styles from './styles.css';

const cancelButtonStyles = {
  height: '50px',
  width: '130px',
  margin: '0',
  padding: '10px'
}

const sendButtonStyles = {
  height: '50px',
  width: '130px',
  margin: '0',
  padding: '10px'
}

class ComposeEmail extends Gandalf {

  componentWillMount() {
    const fieldDefinitions = [
      {
        name: 'email',
        component: TextField,
        validators: ['required', 'email'],
        errorPropName: 'errorText',
        props: {
          hintText: 'To',
        },
        debounce: 300
      },
      {
        name: 'subject',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Subject'
        }
      }
    ];

    this.buildFields( fieldDefinitions );
  }

  render() {
    const fields = this.state.fields;

    return (
      <div className={ styles.composeView }>
        <h2>Compose</h2>
        <form className={ styles.composeForm }>
          <div className={ styles.metaFields }>
            { fields.email.element }
            { fields.subject.element }
          </div>

          <EmailTextArea />

          <section className={ styles.buttonContainer }>
            <FlatButton
              label={'Cancel'}
              style={cancelButtonStyles}
              onTouchTap={ this.props.hideSelf }
            />
            <FlatButton
              label={'Send'}
              style={sendButtonStyles}

            />
          </section>
        </form>
      </div>
    )
  }
}

export default ComposeEmail;
