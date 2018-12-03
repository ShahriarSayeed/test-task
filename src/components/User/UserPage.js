import React, { Component } from 'react';
import {connect} from "react-redux";
import DocumentTitle from 'react-document-title';

import NavBar from "../Navbar";
import {getUserList} from "../../actions/userAction";

const stateToProps=(state)=>{
  return{
    waitingRequest:state.user.waitingRequest,
    users:state.user.users,
    errorMessage:state.user.errorMessage
  }
}

const dispatchToProps=(dispatch)=>{
  return{
    getUserList:()=>dispatch(getUserList())
  }
}

class UserPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    let title='Users';
    let userList=this.props.users.map((user,index)=>{
      return(
        <tr key={index}>
          <td>{user.name.title} {user.name.first} {user.name.last}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
          <td>{user.phone}</td>
        </tr>
      )
    });

    return(
      <DocumentTitle title={title}>
        <div>
          <NavBar/>
          <div className={'main-container'}>
            <h2>
              User List
            </h2>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>email</th>
                  <th>gender</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {userList}
              </tbody>
            </table>
          </div>
        </div>

      </DocumentTitle>
    )}
}

export default connect(stateToProps,dispatchToProps)(UserPage);
