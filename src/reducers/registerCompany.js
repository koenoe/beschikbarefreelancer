// @flow
import {
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_FAILURE,
  REGISTER_COMPANY_SUCCESS,
} from 'actions/CompanyActions';

import type { CompanyAction } from 'actions/CompanyActions';

type State = {|
  +error?: any,
  +isLoading: boolean,
  +success?: boolean,
|};

const initialState: State = {
  isLoading: false,
};

export default function (state: State = initialState, action: CompanyAction) {
  switch (action.type) {
    case REGISTER_COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.success,
      };
    case REGISTER_COMPANY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
