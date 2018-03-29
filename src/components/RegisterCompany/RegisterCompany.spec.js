import React from 'react';
import { shallow } from 'enzyme';

import RegisterCompany from './RegisterCompany';

describe('<RegisterCompany />', () => {
  const props = {
    onRegisterCompany: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RegisterCompany {...props} />);
  });

  it('should contain .form', () => {
    expect(wrapper.find('.form').length).toEqual(1);
  });
});
