import React, { Component } from 'react';
import { Container } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync, faTimes, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import Header from './components/header';
import Subscriptions from './pages/subscriptions';

library.add(faCheck, faSync, faTimes, faTrash);

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Subscriptions />
      </Container>
    );
  }
}

export default App;
