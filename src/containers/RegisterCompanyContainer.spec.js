// @flow
import { mapStateToProps } from 'containers/RegisterCompanyContainer';
import type { State } from 'reducers';

describe('Containers: RegisterCompany', () => {
  const mockState: State = {
    registrationCompany: {
      isLoading: true,
    },
  };
  it('should map the state to correct props', () => {
    expect(mapStateToProps(mockState)).toEqual({
      isLoading: true,
    });
  });
});
