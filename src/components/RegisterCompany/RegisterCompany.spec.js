// @flow
import React from 'react';
import { shallow } from 'enzyme';

import RegisterCompany from './RegisterCompany';
import type { Props } from './RegisterCompany';

describe('Components: RegisterCompany', () => {
  let wrapper;
  const props: Props = {
    onRegisterCompany: jest.fn(),
    isLoading: false,
  };

  beforeEach(() => {
    wrapper = shallow(<RegisterCompany {...(props: any)} />);
  });

  it('should contain form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });
});
