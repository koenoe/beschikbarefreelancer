// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registrationReducer from 'state/registration/reducer';

const reducers: any = combineReducers({
  registration: registrationReducer,
  routing: routerReducer,
});

export default reducers;

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type Reducers = typeof reducers;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
