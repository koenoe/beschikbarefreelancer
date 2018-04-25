// @flow
import { registerCompanySelector } from 'selectors/registerCompany';
import type { registerCompanyState } from 'reducers/registerCompany';
import type { State } from 'reducers';

const mockState: State = {
  registrationCompany: {
    isLoading: true,
  },
};

describe('Selectors: registerCompany', () => {
  it('should return the `registerCompanyState`', () => {
    const expected: registerCompanyState = mockState.registrationCompany;
    expect(registerCompanySelector(mockState)).toBe(expected);
  });
});
