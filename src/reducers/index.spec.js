// @flow
import { routerReducer } from 'react-router-redux';

import registerCompanyReducer from 'reducers/registerCompany';
import { configureStore } from 'store/configureStore';

import type { RegisterCompanyAction } from 'actions/RegisterCompanyActions';
import type { Store } from 'store/configureStore';

describe('Reducer: index', () => {
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

  it('should delegate a `registerCompany` action to the `registerCompany` reducer', () => {
    const action: RegisterCompanyAction = {
      type: 'REGISTER_COMPANY_REQUEST',
      email: 'test@koenromers.com',
    };
    store.dispatch(action);

    expect(store.getState().registrationCompany)
      .toEqual(registerCompanyReducer(undefined, action));
  });
});
