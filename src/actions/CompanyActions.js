import * as types from '../constants/ActionTypes';

export default {
  register,
};

function register(email) {
  return (dispatch) => {
    dispatch(request({ email }));

    // userService.login(username, password)
    //   .then(
    //     (user) => {
    //       dispatch(success(user));
    //       history.push('/');
    //     },
    //     (error) => {
    //       dispatch(failure(error));
    //       dispatch(alertActions.error(error));
    //     },
    //   );

    function request() { return { type: types.REGISTER_COMPANY_REQUEST, email }; }
    // function success(company) { return { type: types.REGISTER_COMPANY_SUCCESS, company }; }
    // function failure(error) { return { type: types.REGISTER_COMPANY_FAILURE, error }; }
  };
}
