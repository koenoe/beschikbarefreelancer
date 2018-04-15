// @flow
import { createStore } from 'redux';
import { routerReducer } from 'react-router-redux';

import rootReducer from 'reducers';
import registerCompanyReducer from 'reducers/registerCompany';

import type { RegisterCompanyAction } from 'actions/RegisterCompanyActions';
import type { Store } from 'store/configureStore';

describe('Reducer: index', () => {
  let store: Store;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  //
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
