import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import RegisterCompanyContainer from '../../containers/RegisterCompanyContainer';

describe('<Home />', () => {
  const props = {};

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it('should contain <RegisterCompanyContainer />', () => {
    expect(wrapper.find(RegisterCompanyContainer).length).toEqual(1);
  });
});
