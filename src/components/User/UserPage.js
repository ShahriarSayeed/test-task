import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import NavBar from "../Navbar";

class UserPage extends Component {
  render() {
    let title='Users';

    return(
      <DocumentTitle title={title}>
        <div>
          <NavBar/>
          <div className={'main-container'}>
            <h2>
              User page
            </h2>
          </div>
        </div>

      </DocumentTitle>
    )}
}

export default UserPage;
