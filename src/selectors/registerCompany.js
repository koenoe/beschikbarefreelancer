// @flow
// import { createSelector } from 'reselect';
import type { State } from 'reducers';

export const registerCompanySelector = (state: State) => state.registerCompany;
// export const isLoading = createSelector([registration], state => state.get('isLoading'));
// export const error = createSelector([registration], state => state.get('error'));
// export const success = createSelector([registration], state => state.get('success'));

export default registerCompanySelector;
