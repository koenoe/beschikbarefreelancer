// @flow
import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'state/reducers';
import trackingMiddleware from 'state/middleware/tracking';

import type { Store as ReduxStore } from 'redux';
import type { BrowserHistory } from 'history/createBrowserHistory';
import type { State } from 'state/reducers';
import type { Action } from 'state/actions';

export type Store = ReduxStore<State, Action>;

const history: BrowserHistory = createHistory();

function configureStore(initialState?: State): Store {
  const reactRouterMiddleware: any = routerMiddleware(history);
  const middlewares: Array<any> = [
    thunk,
    reactRouterMiddleware,
    trackingMiddleware,
  ];
  if (process.env.NODE_ENV === 'development') {
    middlewares.unshift(reduxImmutableStateInvariant());
  }
  const composeEnhancers: any = composeWithDevTools({});
  const store: Store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    module.hot.accept('state/reducers', (): void => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

export { history, configureStore };
