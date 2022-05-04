import * as constant from '../constant';
import Vote from '../saga/Vote';
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const Vote = (state = initialState, action) => {
  switch (action.type) {
    case constant.VOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case constant.VOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };
    case constant.VOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default Vote;
