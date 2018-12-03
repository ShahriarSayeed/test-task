import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Container } from 'semantic-ui-react'

class UserPage extends Component {
  render() {
    let title='Users';

    return(
      <DocumentTitle title={title}>
        <Container>
          User page
        </Container>
      </DocumentTitle>
    )}
}

export default UserPage;
