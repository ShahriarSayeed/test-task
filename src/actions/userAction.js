import axios from 'axios';

import {API_URL_BASE} from "../constants/constants";
import {handleServerSucess,handleServerError} from '../utils/common';
import {GET_USER_REQUEST_WAITING, GET_USER_REQUEST_SUCCESS, GET_USER_REQUEST_ERROR} from "../constants/actionTypes";

export const getUserList =()=>{
  return (dispatch)=>{

    dispatch({type: GET_USER_REQUEST_WAITING, value:true});

    axios.get(`${API_URL_BASE}/api/`)
      .then((response)=>{
        handleServerSucess(response.data.results,dispatch, GET_USER_REQUEST_SUCCESS,GET_USER_REQUEST_WAITING);
      })
      .catch((err) =>{
        handleServerError(err,dispatch, GET_USER_REQUEST_ERROR,GET_USER_REQUEST_WAITING);
      })
  }
}
