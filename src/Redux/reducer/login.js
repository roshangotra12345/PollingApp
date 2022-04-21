import * as constant from '../constant';
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const login = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case constant.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case constant.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload
      };
    case constant.LOGIN_ERROR:
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

export default login;
