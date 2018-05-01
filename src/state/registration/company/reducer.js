// @flow
import {
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_FAILURE,
  REGISTER_COMPANY_SUCCESS,
} from 'state/registration/company/actions';

import type { RegisterCompanyAction } from 'state/registration/company/actions';

export type State = {|
  +error?: any,
  +isLoading: boolean,
  +success?: boolean,
|};

const initialState: State = {
  isLoading: false,
};

export default function (
  state: State = initialState,
  action: RegisterCompanyAction,
): State {
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
