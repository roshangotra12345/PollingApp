import * as constant from '../constant';
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const Signup = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case constant.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case constant.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload
      };
    case constant.SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default: 
      return state
  }
};

export default Signup;
