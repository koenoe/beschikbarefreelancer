// @flow
// import { createSelector } from 'reselect';
import type { State } from 'state/reducers';

export const registration = (state: State) => state.registration;
export const company = (state: State) => registration(state).company;
export const freelancer = (state: State) => registration(state).freelancer;
