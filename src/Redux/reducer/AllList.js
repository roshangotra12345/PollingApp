import * as constant from '../constant';
//import * as constant from '../constant'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const AllList = (state = initialState, action) => {
  switch (action.type) {
    case constant.ALLLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case constant.ALLLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload
        
      };
    case constant.ALLLIST_ERROR:
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

export default AllList;
