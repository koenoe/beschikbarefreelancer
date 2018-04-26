// @flow
import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import type { Store } from 'redux';
import type { BrowserHistory } from 'history/createBrowserHistory';

import Home from 'components/Home';

type Props = {
  store: Store<any, any>, // FIXME: State, Action
  history: BrowserHistory,
};

export default ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={Home} />
    </ConnectedRouter>
  </Provider>
);
