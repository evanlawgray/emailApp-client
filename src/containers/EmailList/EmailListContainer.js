import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmailList from './EmailList';

const emails = [
  {
    id: 1,
    author: 'John Doe',
    recipient: 'Evan Gray',
    title: 'Have you heard about this???',
    subject: 'Some important information',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius id odio non feugiat. Pellentesque et consequat magna. Etiam nisl eros, imperdiet eu ultrices mattis, vulputate non libero. Nunc fringilla elit eget varius pulvinar. Quisque posuere, nunc eu mattis scelerisque, elit eros tempus nunc, a commodo urna quam volutpat lacus. Aliquam erat volutpat. Fusce libero turpis, dignissim nec dictum nec, finibus nec enim. Morbi eleifend elementum magna, at iaculis nisi tincidunt sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    author: 'John Doe',
    recipient: 'Evan Gray',
    title: 'Have you heard about this???',
    subject: 'Some important information',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius id odio non feugiat. Pellentesque et consequat magna. Etiam nisl eros, imperdiet eu ultrices mattis, vulputate non libero. Nunc fringilla elit eget varius pulvinar. Quisque posuere, nunc eu mattis scelerisque, elit eros tempus nunc, a commodo urna quam volutpat lacus. Aliquam erat volutpat. Fusce libero turpis, dignissim nec dictum nec, finibus nec enim. Morbi eleifend elementum magna, at iaculis nisi tincidunt sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    author: 'John Doe',
    recipient: 'Evan Gray',
    title: 'Have you heard about this???',
    subject: 'Some important information',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius id odio non feugiat. Pellentesque et consequat magna. Etiam nisl eros, imperdiet eu ultrices mattis, vulputate non libero. Nunc fringilla elit eget varius pulvinar. Quisque posuere, nunc eu mattis scelerisque, elit eros tempus nunc, a commodo urna quam volutpat lacus. Aliquam erat volutpat. Fusce libero turpis, dignissim nec dictum nec, finibus nec enim. Morbi eleifend elementum magna, at iaculis nisi tincidunt sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 4,
    author: 'John Doe',
    recipient: 'Evan Gray',
    title: 'Have you heard about this???',
    subject: 'Some important information',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius id odio non feugiat. Pellentesque et consequat magna. Etiam nisl eros, imperdiet eu ultrices mattis, vulputate non libero. Nunc fringilla elit eget varius pulvinar. Quisque posuere, nunc eu mattis scelerisque, elit eros tempus nunc, a commodo urna quam volutpat lacus. Aliquam erat volutpat. Fusce libero turpis, dignissim nec dictum nec, finibus nec enim. Morbi eleifend elementum magna, at iaculis nisi tincidunt sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 5,
    author: 'John Doe',
    recipient: 'Evan Gray',
    title: 'Have you heard about this???',
    subject: 'Some important information',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius id odio non feugiat. Pellentesque et consequat magna. Etiam nisl eros, imperdiet eu ultrices mattis, vulputate non libero. Nunc fringilla elit eget varius pulvinar. Quisque posuere, nunc eu mattis scelerisque, elit eros tempus nunc, a commodo urna quam volutpat lacus. Aliquam erat volutpat. Fusce libero turpis, dignissim nec dictum nec, finibus nec enim. Morbi eleifend elementum magna, at iaculis nisi tincidunt sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

class EmailListContainer extends Component {
  render() {
    return(
      <EmailList emails={ emails } />
    );
  }
}

export default EmailListContainer;
