// @flow
import * as selectors from 'state/registration/selectors';
import type { State } from 'state/registration/reducer';

const mockState: State = {
  registration: {
    company: {
      isLoading: true,
    },
    freelancer: {
      isLoading: true,
    },
  },
};

describe('Registration selectors', () => {
  it('should return the registration', () => {
    const expected: State = mockState.registration;
    expect(selectors.registration(mockState)).toBe(expected);
  });
  it('should return the company registration', () => {
    const expected: State = mockState.registration.company;
    expect(selectors.company(mockState)).toBe(expected);
  });
  it('should return the freelancer registration', () => {
    const expected: State = mockState.registration.freelancer;
    expect(selectors.freelancer(mockState)).toBe(expected);
  });
});
