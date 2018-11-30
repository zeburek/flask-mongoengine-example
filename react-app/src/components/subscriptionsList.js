import React, { Component } from 'react';
import { Table, Button, ButtonGroup } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SubscriptionsList extends Component {

  render() {
    const { items } = this.props;
    return (
      <div className="mt-4 table-responsive">
        <Table hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Имя пользователя</th>
              <th className="text-center w-25">Подписка</th>
            </tr>
          </thead>
          <tbody>
          {items.map((value, index) => {
            const expired_at = Date.parse(value.expired_at);
            const current = Date.now();
            const expired = current > expired_at;
            return (
            <tr key={index}>
              <th scope="row">{value.name}</th>
              <td>{value.email}</td>
              <td className="text-center"><FontAwesomeIcon className={expired ? "text-danger":"text-success"} icon={expired ? "times":"check"}/>
              </td>
            </tr>)
          })}
          <tr className="table-light">
            <td></td><td></td>
            <td className="text-right">
              <ButtonGroup>
                <Button color="primary" outline onClick={this.props.refresh}>
                  <FontAwesomeIcon icon="sync"/>
                </Button>
                <Button color="danger" outline onClick={this.props.clear}>
                  <FontAwesomeIcon icon="trash"/>
                </Button>
              </ButtonGroup>
            </td>
          </tr>
          </tbody>
        </Table>
        
      </div>
    );
  }
}

export default SubscriptionsList;