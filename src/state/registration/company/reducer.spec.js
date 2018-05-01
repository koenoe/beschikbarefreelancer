// @flow
import companyReducer from 'state/registration/company/reducer';

import type { State } from 'state/registration/company/reducer';

describe('Registration reducer: company', () => {
  it('should set `isLoading` to true when `REGISTER_COMPANY_REQUEST`', () => {
    const beforeState: State = {
      isLoading: false,
    };
    const afterState: State = companyReducer(beforeState, {
      type: 'registration/COMPANY_REQUEST',
      email: 'test@koenromers.com',
    });
    expect(afterState).toMatchSnapshot();
    expect(afterState).not.toBe(beforeState);
  });

  it('should set `success` to true when `registration/COMPANY_SUCCESS`', () => {
    const beforeState: State = {
      isLoading: true,
      success: false,
    };
    const afterState: State = companyReducer(beforeState, {
      type: 'registration/COMPANY_SUCCESS',
      success: true,
    });
    expect(afterState).toMatchSnapshot();
    expect(afterState).not.toBe(beforeState);
  });

  it('should have an `error` when `registration/COMPANY_FAILURE`', () => {
    const beforeState: State = {
      isLoading: true,
      error: null,
    };
    const afterState: State = companyReducer(beforeState, {
      type: 'registration/COMPANY_FAILURE',
      error: new Error('fail whale'),
    });
    expect(afterState).toMatchSnapshot();
    expect(afterState).not.toBe(beforeState);
  });
});
