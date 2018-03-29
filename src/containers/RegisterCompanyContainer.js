import React from 'react';
import { connect } from 'react-redux';

import { register } from '../actions/CompanyActions';
import RegisterCompany from '../components/RegisterCompany';

const RegisterCompanyContainer = props => <RegisterCompany {...props} />;

const mapStateToProps = (state) => {
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
