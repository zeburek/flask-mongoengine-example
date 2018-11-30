import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

const defaultState = {
  email: "",
  name: "",
  time: "7d"
};

class SubscribeForm extends Component {

  state = defaultState

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  submit = () => {
    this.props.submit(this.state);
    this.setState(defaultState);
  }

  render() {
    return (
      <div className="ml-5 mr-5">
        <InputGroup>
          <Input 
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}/>
          <Input 
            placeholder="Имя пользователя"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}/>
          <Input 
            placeholder="Время"
            name="time"
            value={this.state.time}
            onChange={this.handleChange}/>
          <InputGroupAddon addonType="append">
            <Button color="success" onClick={this.submit}>Подписаться</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default SubscribeForm;