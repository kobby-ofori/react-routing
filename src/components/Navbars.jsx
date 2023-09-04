import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <Button variant="light">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </Button>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="light">
              <NavLink exact activeClassName="active" to="about">About</NavLink>
            </Button>
            <Button variant="light">
              <NavLink exact activeClassName="active" to="contact">Contact</NavLink>
            </Button>
            <Button variant="light">
              <NavLink exact activeClassName="active" to="services">Services</NavLink>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
