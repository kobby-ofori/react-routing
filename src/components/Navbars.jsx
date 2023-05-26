import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="light">
              <Link to="about">About</Link>
            </Button>
            <Button variant="light">
              <Link to="contact">Contact</Link>
            </Button>
            <Button variant="light">
              <Link to="services">Services</Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
