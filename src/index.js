import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import App from "./components/App.js";
import {PersistGate} from "redux-persist/integration/react";

import { store, persistor, history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
  ,
  document.getElementById("root")
);
