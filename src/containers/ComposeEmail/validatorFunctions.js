const validate = values => {
  const errors = {};

  if( !values.recipient ) {
    errors.recipient = 'Required';
  }

  if( !values.subject ) {
    errors.subject = 'Required';
  }

  if( !values.message ) {
    errors.message = 'Please enter a message'
  }
  return errors
}

export { validate };
