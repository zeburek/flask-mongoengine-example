import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div>
        <Navbar data-test="header" className="mt-3" color="dark" dark expand="md" style={{borderRadius: "5px"}}>
          <NavbarBrand data-test="header-brand" href="/">Подписки</NavbarBrand>
          <NavbarToggler data-test="header-toggle" onClick={this.toggle.bind(this)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem data-test="header-github-link">
                <NavLink href="https://github.com/zeburek/flask-mongoengine-example">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;