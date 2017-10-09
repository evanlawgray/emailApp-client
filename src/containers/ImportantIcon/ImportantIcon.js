import React from 'react';
import { PropTypes } from 'prop-types';

import Star from 'material-ui/svg-icons/toggle/star';
import { yellow500 } from 'material-ui/styles/colors';

const ImportantIcon = ({ isImportant }) => {
  return (
    isImportant ?
      <Star color={ yellow500 } />
      : <Star />
  )
}

export default ImportantIcon;
