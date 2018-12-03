import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import { ConnectedRouter } from 'react-router-redux';
import {Route,Switch} from 'react-router-dom';

import { store, persistor, history } from './store';
import {PersistGate} from "redux-persist/integration/react";

import App from "./components/App.js";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={App}/>
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
  ,
  document.getElementById("root")
);
