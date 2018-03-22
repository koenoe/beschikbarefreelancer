import React from 'react';
import { connect } from 'react-redux';

import { register } from '../actions/CompanyActions';
import RegisterCompany from '../components/RegisterCompany';

const RegisterCompanyContainer = props => <RegisterCompany {...props} />;

const mapStateToProps = (state) => {
  const {
    company,
    error,
    isLoading,
  } = state.registerCompany;

  return {
    company,
    error,
    isLoading,
  };
};

export default connect(mapStateToProps, {
  onRegisterCompany: register,
})(RegisterCompanyContainer);
