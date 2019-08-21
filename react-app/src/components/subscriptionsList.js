import React, { Component } from 'react';
import { Table, Button, ButtonGroup } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SubscriptionsList extends Component {

  render() {
    const { items } = this.props;
    return (
      <div data-test="subs-list" className="mt-4 table-responsive">
        <Table hover>
          <thead data-test="subs-table-header">
            <tr>
              <th data-test="subs-table-header-email">Email</th>
              <th data-test="subs-table-header-name">Имя пользователя</th>
              <th data-test="subs-table-header-sub" className="text-center w-25">Подписка</th>
            </tr>
          </thead>
          <tbody>
          {items.map((value, index) => {
            const expired_at = Date.parse(value.expired_at);
            const current = Date.now();
            const expired = current > expired_at;
            return (
            <tr key={index} data-test="subs-table-row">
              <th data-test="subs-table-name" scope="row">{value.name}</th>
              <td data-test="subs-table-email">{value.email}</td>
              <td data-test="subs-table-sub" className="text-center">
                <FontAwesomeIcon
                  className={expired ? "text-danger":"text-success"}
                  icon={expired ? "times":"check"}
                />
              </td>
            </tr>)
          })}
          <tr className="table-light">
            <td/><td/>
            <td className="text-right">
              <ButtonGroup>
                <Button data-test="sync-button" color="primary" outline onClick={this.props.refresh}>
                  <FontAwesomeIcon icon="sync"/>
                </Button>
                <Button data-test="clear-button" color="danger" outline onClick={this.props.clear}>
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