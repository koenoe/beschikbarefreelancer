// @flow
import React from 'react';
import { shallow } from 'enzyme';

import RegisterCompany from './RegisterCompany';
import type { Props } from './RegisterCompany';

describe('<RegisterCompany />', () => {
  let wrapper;
  const props: Props = {
    onRegisterCompany: jest.fn(),
    isLoading: false,
  };

  beforeEach(() => {
    const { onRegisterCompany, isLoading } = props;
    wrapper = shallow(<RegisterCompany
      isLoading={isLoading}
      onRegisterCompany={onRegisterCompany}
    />);
  });

  it('should contain .form', () => {
    expect(wrapper.find('.form').length).toEqual(1);
  });
});
