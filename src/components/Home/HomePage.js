import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import NavBar from "../Navbar";

class HomePage extends Component {
  render() {
    let title='Home';

    return(
      <DocumentTitle title={title}>
        <div>
          <NavBar/>
          <div className={'main-container'}>
            <h2>
              Home page
            </h2>
          </div>
        </div>
      </DocumentTitle>
    )}
}

export default HomePage;
