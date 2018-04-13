// @flow
import type { Dispatch as ReduxDispatch } from 'redux';
import { registerApi } from 'utils/CompanyUtils';

export type CompanyAction =
  | {| type: 'REGISTER_COMPANY_REQUEST', email: string |}
  | {| type: 'REGISTER_COMPANY_FAILURE', error: any |}
  | {| type: 'REGISTER_COMPANY_SUCCESS', success: boolean |};

export type Dispatch = ReduxDispatch<CompanyAction>;

export const REGISTER_COMPANY_REQUEST: 'REGISTER_COMPANY_REQUEST' = 'REGISTER_COMPANY_REQUEST';
export const REGISTER_COMPANY_FAILURE: 'REGISTER_COMPANY_FAILURE' = 'REGISTER_COMPANY_FAILURE';
export const REGISTER_COMPANY_SUCCESS: 'REGISTER_COMPANY_SUCCESS' = 'REGISTER_COMPANY_SUCCESS';

const registerRequest = email => ({
  type: REGISTER_COMPANY_REQUEST,
  email,
});

const registerFailure = error => ({
  type: REGISTER_COMPANY_FAILURE,
  error,
});

const registerSuccess = () => ({
  type: REGISTER_COMPANY_SUCCESS,
  success: true,
});

export const register = (email: string) => async (dispatch: Dispatch) => {
  dispatch(registerRequest(email));
  try {
    await registerApi(email);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export default register;
