import { GET_USER_REQUEST_WAITING, GET_USER_REQUEST_SUCCESS, GET_USER_REQUEST_ERROR} from "../constants/actionTypes";

const initialState={
  waitingRequest:false,
  users:[],
  success:false,
  errorMessage:null
};

export default (state=initialState,action) =>{
  switch (action.type){
    case GET_USER_REQUEST_WAITING:{
      return {
        ...state,
        waitingRequest:action.value
      };
    }

    case GET_USER_REQUEST_SUCCESS:{
      return {
        ...state,
        users:action.responseData,
        success: true,
        errorMessage: null
      };
    }

    case GET_USER_REQUEST_ERROR:{
      return {
        ...state,
        success: false,
        errorMessage: null,
      };
    }

    default:
      return state;
  }
}
