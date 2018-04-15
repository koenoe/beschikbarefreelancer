// @flow
import type { Dispatch as ReduxDispatch } from 'redux';
import { register as registerApi } from 'utils/CompanyUtils';

type RegisterRequestAction = {|
  type: 'REGISTER_COMPANY_REQUEST',
  email: string
|};

type RegisterFailureAction = {|
  type: 'REGISTER_COMPANY_FAILURE',
  error: any
|};

type RegisterSuccessAction = {|
  type: 'REGISTER_COMPANY_SUCCESS',
  success: boolean
|};

export type CompanyAction =
  | RegisterRequestAction
  | RegisterFailureAction
  | RegisterSuccessAction;

type Dispatch = ReduxDispatch<CompanyAction>;
type ThunkAction = (dispatch: Dispatch) => any;

export const REGISTER_COMPANY_REQUEST: 'REGISTER_COMPANY_REQUEST' = 'REGISTER_COMPANY_REQUEST';
export const REGISTER_COMPANY_FAILURE: 'REGISTER_COMPANY_FAILURE' = 'REGISTER_COMPANY_FAILURE';
export const REGISTER_COMPANY_SUCCESS: 'REGISTER_COMPANY_SUCCESS' = 'REGISTER_COMPANY_SUCCESS';

const registerRequest = (email: string): RegisterRequestAction => ({
  type: REGISTER_COMPANY_REQUEST,
  email,
});

const registerFailure = (error: any): RegisterFailureAction => ({
  type: REGISTER_COMPANY_FAILURE,
  error,
});

const registerSuccess = (): RegisterSuccessAction => ({
  type: REGISTER_COMPANY_SUCCESS,
  success: true,
});

export const register = (email: string): ThunkAction => async (dispatch: Dispatch) => {
  dispatch(registerRequest(email));
  try {
    await registerApi(email);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error));
  }
};
