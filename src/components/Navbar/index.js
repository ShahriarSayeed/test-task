import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import './navbar.css';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.gotoHome=this.gotoHome.bind(this);
    this.gotoUser=this.gotoUser.bind(this);
  }

  gotoHome(){
    this.props.history.push(`/`);
  }

  gotoUser(){
    this.props.history.push(`/user`);
  }

  render() {
    return (
      <nav className="navigationBar">
        <ul>
          <li>
            <a href="javascript:void(0)" className="link" onClick={this.gotoHome}>Home</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="link" onClick={this.gotoUser}>Users</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
