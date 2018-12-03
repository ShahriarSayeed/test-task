import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Container } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    let title='Home';

    return(
      <DocumentTitle title={title}>
        <Container>
          Home page
        </Container>
      </DocumentTitle>
    )}
}

export default HomePage;
