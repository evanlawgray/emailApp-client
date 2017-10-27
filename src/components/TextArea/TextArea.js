import React from 'react';

import styles from './styles.css';

const TextInputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div style={ { width: '100%' } }>
      <label>
        {label}
      </label>
      <div>
        <textarea {...input} placeholder={label} type={type} className={ styles.message } />
        {
          touched &&
            ((error &&
              <span>
                {error}
              </span>) ||
              (warning &&
              <span>
                {warning}
              </span>))
        }
      </div>
    </div>
  )
}


export default TextInputField;
