// @flow
import { mapStateToProps } from 'containers/RegisterCompany';
import type { State } from 'state/reducers';

describe('Containers: RegisterCompany', () => {
  const mockState: State = {
    registration: {
      company: {
        isLoading: true,
      },
    },
  };
  it('should map the state to correct props', () => {
    expect(mapStateToProps(mockState)).toEqual({
      isLoading: true,
    });
  });
});
