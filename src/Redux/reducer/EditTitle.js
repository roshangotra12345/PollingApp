import * as constant from '../constant';
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const EditTitle = (state = initialState, action) => {
  switch (action.type) {
    case constant.TITLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case constant.TITLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload
      };
    case constant.TITLE_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        data: action.payload
      
      };
    default: 
      return state
  }
};

export default EditTitle;
