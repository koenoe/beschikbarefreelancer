import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

const history = createHistory();

function configureStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    thunk,
    reactRouterMiddleware,
  ];
  if (process.env.NODE_ENV === 'development') {
    middlewares.unshift(reduxImmutableStateInvariant());
  }
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

export { history, configureStore };
