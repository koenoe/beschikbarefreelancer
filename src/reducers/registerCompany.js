// @flow
import {
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_FAILURE,
  REGISTER_COMPANY_SUCCESS,
} from 'actions/RegisterCompanyActions';

import type { RegisterCompanyAction } from 'actions/RegisterCompanyActions';

export type registerCompanyState = {|
  +error?: any,
  +isLoading: boolean,
  +success?: boolean,
|};

const initialState: registerCompanyState = {
  isLoading: false,
};

export default function (
  state: registerCompanyState = initialState,
  action: RegisterCompanyAction,
): registerCompanyState {
  switch (action.type) {
    case REGISTER_COMPANY_REQUEST:
      return {
        isLoading: true,
      };
    case REGISTER_COMPANY_SUCCESS:
      return {
        isLoading: false,
        success: action.success,
      };
    case REGISTER_COMPANY_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
