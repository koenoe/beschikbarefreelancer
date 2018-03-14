import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
// import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function Root(props) {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          foo
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

// Only disable the rule forbid-prop-types here,
// because we're using third party stuff,
// so impossible to know what the exact shapes are
Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
