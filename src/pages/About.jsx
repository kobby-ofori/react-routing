import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div style={{textAlign: "center", color: "blue"}}>
      <Container fluid>
        <Row>
          <Col md={3}>
            <h1>About Page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dolor, eum repudiandae voluptatibus mollitia nesciunt molestiae
              corporis nisi in, beatae molestias ratione doloremque culpa
              possimus temporibus ad nostrum soluta iste?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
