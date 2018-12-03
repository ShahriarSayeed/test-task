import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../components/Home/HomePage";
import User from "../components/User/UserPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/user" component={User}/>
    </Switch>
  )
}

export default Routes;
