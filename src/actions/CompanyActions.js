import * as types from '../constants/ActionTypes';
import { registerApi } from '../utils/CompanyUtils';

const registerRequest = email => ({
  type: types.REGISTER_COMPANY_REQUEST,
  email,
});

const registerSuccess = () => ({
  type: types.REGISTER_COMPANY_SUCCESS,
  success: true,
});

const registerFailure = error => ({
  type: types.REGISTER_COMPANY_FAILURE,
  error,
});

export const register = email => async (dispatch) => {
  dispatch(registerRequest(email));
  try {
    await registerApi(email);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export default register;
