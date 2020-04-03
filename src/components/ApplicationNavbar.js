import React, { Component } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export class ApplicationNavbar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        style={{ marginBottom: "10px" }}
      >
        <Navbar.Brand href="#">
          <h3>Space Trip Registration</h3>
        </Navbar.Brand>
        <Nav>
          <NavLink>
            <FontAwesomeIcon
              icon={faUserPlus}
              style={{ cursor: "pointer" }}
              onClick={this.props.showFormModal}
            />
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default ApplicationNavbar;
