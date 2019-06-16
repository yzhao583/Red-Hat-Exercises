import React, { Component } from "react";

import {
  Container,
  Header,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3'>404 page not found</Header>
          <p>
            We are sorry but the page you are looking for does not exist.
          </p>
          <Link to='/users'>Go to user table page</Link>
        </Container>
      </Segment>
    );
  }
}

export default NotFoundPage;
