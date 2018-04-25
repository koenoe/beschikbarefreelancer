// @flow
import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { configureStore, history } from 'store/configureStore';
import Root from 'components/Root';
import 'styles/main.scss';

import type { Store } from 'store/configureStore';

const store: Store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  (document.getElementById('root'): any),
);

if (module.hot) {
  module.hot.accept('components/Root', (): void => {
    const NewRoot: any = require('components/Root').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      (document.getElementById('root'): any),
    );
  });
}
