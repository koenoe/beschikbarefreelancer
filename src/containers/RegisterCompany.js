// @flow
// import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import type { ComponentType } from 'react';

import { register } from 'state/registration/company/actions';
import RegisterCompany from 'components/RegisterCompany';
import { company as companySelector } from 'state/registration/selectors';

import type { State } from 'state/reducers';
import type { OwnProps, DispatchProps } from 'components/RegisterCompany/RegisterCompany';

export const mapStateToProps: ((State) => OwnProps) = createSelector(
  companySelector,
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
