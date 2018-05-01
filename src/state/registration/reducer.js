// @flow
import { combineReducers } from 'redux';

import companyReducer from 'state/registration/company/reducer';

const reducers: any = combineReducers({
  company: companyReducer,
});

export default reducers;

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type Reducers = typeof reducers;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
