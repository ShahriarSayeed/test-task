import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './reducers/user';

const appReducer = combineReducers({
  user,
  router:routerReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
