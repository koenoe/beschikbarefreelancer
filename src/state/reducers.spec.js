// @flow
import { routerReducer } from 'react-router-redux';

import registrationReducer from 'state/registration/reducer';
import { configureStore } from 'state/configureStore';

import type { RegistrationAction } from 'state/registration/actions';
import type { Store } from 'state/configureStore';

describe('Reducers', () => {
  const store: Store = configureStore();

  it('should delegate a `routing` action to the `routerReducer` reducer', () => {
    const action: any = {
      type: '@@router/LOCATION_CHANGE',
      location: {
        pathname: '/',
        search: '',
        hash: '',
      },
    };
    store.dispatch(action);

    expect(store.getState().routing)
      .toEqual(routerReducer(undefined, action));
  });

  it('should delegate a `register` action to the `registration` reducer', () => {
    const action: RegistrationAction = {
      type: 'registration/COMPANY_REQUEST',
      email: 'test@koenromers.com',
    };
    store.dispatch(action);

    expect(store.getState().registration)
      .toEqual(registrationReducer(undefined, action));
  });
});
