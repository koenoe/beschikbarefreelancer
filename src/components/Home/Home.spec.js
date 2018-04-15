// @flow
import React from 'react';
import { shallow } from 'enzyme';

import RegisterCompanyContainer from 'containers/RegisterCompanyContainer';
import Home from './Home';

describe('Components: Home', () => {
  const props:any = {};

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it('should contain <RegisterCompanyContainer />', () => {
    expect(wrapper.find(RegisterCompanyContainer).length).toEqual(1);
  });
});
