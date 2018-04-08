import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registerCompany from './registerCompany';

const rootReducer = combineReducers({
  registerCompany,
  routing: routerReducer,
});

export default rootReducer;
