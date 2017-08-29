import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'

import HeaderBar from '../../components/HeaderBar';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <HeaderBar />

      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.shape({
    $$typeof: PropTypes.symbol,
    key: PropTypes.null,
    props: PropTypes.obj,
    ref: PropTypes.null,
    type: PropTypes.func,
    _owner: PropTypes.null,
    _store: PropTypes.obj,
    _self: PropTypes.null,
    _source: PropTypes.obj,
    __proto__: PropTypes.obj
  }),
};

export default MainLayout;
