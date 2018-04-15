// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registerCompanyReducer from 'reducers/registerCompany';

const reducers: any = combineReducers({
  registrationCompany: registerCompanyReducer,
  // registrationFreelancer: {},
  routing: routerReducer,
});

export default reducers;

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type Reducers = typeof reducers;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
