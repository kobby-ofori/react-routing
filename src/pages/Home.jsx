import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container style={{marginTop: "20px"}}>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Home Page</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Introduction
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus atque, est, a quaerat doloremque laborum 
                culpa veritatis numquam corrupti labore officiis, 
                molestias dolorum fugit! Veritatis, expedita? 
                Nemo eligendi quidem recusandae.
              </Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
