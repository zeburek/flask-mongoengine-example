import React, { Component } from 'react';
import { Alert } from "reactstrap";

class Description extends Component {
  render() {
    return (
      <Alert color="info">
        <h4 className="alert-heading">Привет!</h4>
        <p>
          Перед Вами сервис подписки пользователей на все рассылки нашего сайта. 
          Для подписки необходимо указать: <b>Email, Имя пользователя и время на которое оформляем подписку</b>.
          После формы отображается список с 5 последними подписками.
          Список содержит информацию о пользователе, и об активности его подписки.
        </p>
      </Alert>
    );
  }
}

export default Description;