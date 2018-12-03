import {
  BLANK_TEXT_ERROR_MESSAGE, INVALID_DATE_ERROR_MESSAGE,
  INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE, INVALID_PHONE_NUMBER_ERROR_MESSAGE
} from "./constants";

export function handleInputChange(e,obj,{name,value,fieldtype,required}) {
  const state = obj.state;
  state['form_error']=false;

  if (state.hasOwnProperty('errors')){
    delete state['errors'][name];
  }

  if (fieldtype==='text' || fieldtype==='radio' || fieldtype==='select'){
    if (required && value===''){
      state['form_error']=true;
      state['errors'][name]=BLANK_TEXT_ERROR_MESSAGE;
    }
  }

  if (fieldtype==='email'){
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (required && value===''){
      state['form_error']=true;
      state['errors'][name]=BLANK_TEXT_ERROR_MESSAGE;
    }
    else if (!emailRegex.test(value)){
      state['form_error']=true;
      state['errors'][name]=INVALID_EMAIL_ADDRESS_ERROR_MESSAGE;
    }
  }

  if (fieldtype==='password'){
    if (required && value===''){
      state['form_error']=true;
      state['errors'][name]=BLANK_TEXT_ERROR_MESSAGE;
    }
    // Minimum eight characters, at least one letter and one number:
    else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(value)){
      state['form_error']=true;
      state['errors'][name]=INVALID_PASSWORD_ERROR_MESSAGE;
    }
  }

  if (fieldtype==='phone'){
    if (required && value===''){
      state['form_error']=true;
      state['errors'][name]=BLANK_TEXT_ERROR_MESSAGE;
    }
    else if (!/^\d{8,12}$/.test(value)){
      state['form_error']=true;
      state['errors'][name]=INVALID_PHONE_NUMBER_ERROR_MESSAGE;
    }
  }

  if (fieldtype==='date'){
    if (required && value===''){
      state['form_error']=true;
      state['errors'][name]=BLANK_TEXT_ERROR_MESSAGE;
    }
    // else if (!/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(value)){
    else if (!/^((19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/.test(value)){
      state['form_error']=true;
      state['errors'][name]=INVALID_DATE_ERROR_MESSAGE;
    }
  }

  state[name] = value;
  obj.setState(state);
}

export function handleServerSucess(response,dispatch,constantName,waitingConstantName){
  dispatch({type:constantName, responseData:response});
  dispatch({type:waitingConstantName, value:false});
}

export function handleServerError(err,dispatch,constantName,waitingConstantName){
  if (typeof err.response==='undefined'){
    dispatch({type:constantName,errorMessage:'Network error!'});
  }
  else{
    if (err.response.status===500){
      dispatch({type:constantName,errorMessage:'Internal server error!'});
    }
    else{
      dispatch({type:constantName,errorMessage:err.response.data})
    }
  }

  dispatch({type:waitingConstantName, value:false});
}
