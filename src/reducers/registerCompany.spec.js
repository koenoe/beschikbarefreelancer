// @flow
import registerCompanyReducer from 'reducers/registerCompany';

import type { registerCompanyState } from 'reducers/registerCompany';

describe('Reducer: registerCompany', () => {
  it('should set `isLoading` to true when `REGISTER_COMPANY_REQUEST`', () => {
    const beforeState: registerCompanyState = {
      isLoading: false,
    };
    const afterState: registerCompanyState = registerCompanyReducer(beforeState, {
      type: 'REGISTER_COMPANY_REQUEST',
      email: 'test@koenromers.com',
    });
    expect(afterState).toMatchSnapshot();
    expect(afterState).not.toBe(beforeState);
  });

  it('should set `success` to true when `REGISTER_COMPANY_SUCCESS`', () => {
    const beforeState: registerCompanyState = {
      isLoading: true,
      success: false,
    };
    const afterState: registerCompanyState = registerCompanyReducer(beforeState, {
      type: 'REGISTER_COMPANY_SUCCESS',
      success: true,
    });
    expect(afterState).toMatchSnapshot();
    expect(afterState).not.toBe(beforeState);
  });

  it('should have an `error` when `REGISTER_COMPANY_FAILURE`', () => {
    const beforeState: registerCompanyState = {
      isLoading: true,
      error: null,
    };
    const afterState: registerCompanyState = registerCompanyReducer(beforeState, {
      type: 'REGISTER_COMPANY_FAILURE',
      error: new Error('fail whale'),
    });
    expect(afterState).toMatchSnapshot();
    expect(afterState).not.toBe(beforeState);
  });
});
