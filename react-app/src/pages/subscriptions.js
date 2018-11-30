import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Description from '../components/description';
import SubscribeForm from '../components/subscribeForm';
import SubscriptionsList from '../components/subscriptionsList';
import { subscriptionsList, subscriptionCreate, subscriptionsDelete } from '../requests/subscriptions';

class Subscriptions extends Component {

  state = {
    items: []
  }

  submit = (data) => {
    subscriptionCreate(data)
    .then((res) => res.json())
    .then((data) => this.loadList())
    .catch(() => {})
  }

  clearList = () => {
    subscriptionsDelete()
    .then((res) => res.json())
    .then((data) => this.loadList())
    .catch(() => {})
  }

  loadList = () => {
    subscriptionsList()
    .then((res) => res.json())
    .then((data) => this.setState({items: data}))
    .catch(() => {})
  }

  componentWillMount() {
    this.loadList();
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="mt-4 mb-2">
            <Description />
          </Col>
        </Row>
        <Row>
          <Col>
            <SubscribeForm submit={this.submit}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <SubscriptionsList items={this.state.items} refresh={this.loadList} clear={this.clearList}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subscriptions;