import * as types from 'constants/ActionTypes';

const initialState = {
  error: null,
  isLoading: false,
  success: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.success,
      };
    case types.REGISTER_COMPANY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
