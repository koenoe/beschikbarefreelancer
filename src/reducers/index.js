// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registerCompany from 'reducers/registerCompany';
// import type { registerCompanyState } from './registerCompany';

// type Reducers = {|
//   registerCompany: registerCompanyState,
//   routing: routerReducer,
// |};

const reducers: any = combineReducers({
  registerCompany,
  routing: routerReducer,
});

export default reducers;

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type Reducers = typeof reducers;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
