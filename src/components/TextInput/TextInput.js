import React from 'react';

import styles from './styles.css';

const TextInputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <div>
        <input {...input} placeholder={label} type={type} className={ styles.textInput } />
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
