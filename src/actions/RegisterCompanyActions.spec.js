// @flow
import waitForActions from 'redux-mock-store-await-actions';
import mockStore from 'test-utils/mockStore';
import { register } from 'actions/RegisterCompanyActions';

import type { Store } from 'test-utils/mockStore';
import type { RegisterCompanyAction } from 'actions/RegisterCompanyActions';

describe('Actions: RegisterCompanyActions', () => {
  const store: Store = mockStore();
  const registerRequestAction: RegisterCompanyAction = {
    type: 'REGISTER_COMPANY_REQUEST',
    email: 'test@koenromers.com',
  };
  const registerSuccessAction: RegisterCompanyAction = {
    type: 'REGISTER_COMPANY_SUCCESS',
    success: true,
  };
  const registerFailureAction: RegisterCompanyAction = {
    type: 'REGISTER_COMPANY_FAILURE',
    error: new Error('fail whale'),
  };

  describe('when calling `register`', () => {
    afterEach(() => {
      fetch.resetMocks();
      store.clearActions();
    });

    it('should handle a successful registration', async () => {
      fetch.mockResponse('foo');
      const expectedActions: Array<RegisterCompanyAction> = [
        registerRequestAction,
        registerSuccessAction,
      ];
      store.dispatch(register('test@koenromers.com'));
      await waitForActions(store, expectedActions);
    });

    it('should handle an unsuccessful registration', async () => {
      fetch.mockReject(new Error('fail whale'));
      const expectedActions: Array<RegisterCompanyAction> = [
        registerRequestAction,
        registerFailureAction,
      ];
      store.dispatch(register('test@koenromers.com'));
      await waitForActions(store, expectedActions);
    });
  });
});
