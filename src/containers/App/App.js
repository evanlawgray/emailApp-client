import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
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

export default App;
