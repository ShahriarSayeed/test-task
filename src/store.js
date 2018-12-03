import {applyMiddleware,createStore,compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const middleware=applyMiddleware(thunk);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  middleware
);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
export const  history=createHistory();
