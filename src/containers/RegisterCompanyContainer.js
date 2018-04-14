// @flow
import React from 'react';
import { connect } from 'react-redux';

import { register } from 'actions/CompanyActions';
import RegisterCompany from 'components/RegisterCompany';

import type { State } from 'reducers';
import type { Props } from 'components/RegisterCompany/RegisterCompany';

const RegisterCompanyContainer = (props: Props) => <RegisterCompany {...(props: any)} />;

const mapStateToProps = (state: State) => {
  const {
    error,
    isLoading,
    success,
  } = state.registerCompany;

  return {
    error,
    isLoading,
    success,
  };
};

export default connect(mapStateToProps, {
  onRegisterCompany: register,
})(RegisterCompanyContainer);
