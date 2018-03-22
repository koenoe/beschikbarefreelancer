import * as types from '../constants/ActionTypes';
import { registerApi } from '../utils/CompanyUtils';

export const register = email => async (dispatch) => {
  // console.log('register:', email);
  dispatch(request({ email }));

  await registerApi(email);

  function request() { return { type: types.REGISTER_COMPANY_REQUEST, email }; }
  // function success(company) { return { type: types.REGISTER_COMPANY_SUCCESS, company }; }
  // function failure(error) { return { type: types.REGISTER_COMPANY_FAILURE, error }; }
};

export default register;
