// @flow
// import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import type { ComponentType } from 'react';

import { register } from 'actions/CompanyActions';
import RegisterCompany from 'components/RegisterCompany';
import { registerCompanySelector } from 'selectors/registerCompany';

import type { State } from 'reducers';
import type { OwnProps, DispatchProps } from 'components/RegisterCompany/RegisterCompany';

const mapStateToProps: ((State) => OwnProps) = createSelector(
  registerCompanySelector,
  ({
    error,
    isLoading,
    success,
  }: OwnProps) => ({
    error,
    isLoading,
    success,
  }),
);

const mapDispatchToProps = (dispatch: Dispatch<*>): DispatchProps => ({
  onRegisterCompany: (email: string) => dispatch(register(email)),
});

export default (
  connect(mapStateToProps, mapDispatchToProps)(RegisterCompany): ComponentType<*>
);
