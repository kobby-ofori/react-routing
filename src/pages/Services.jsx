import React from "react";
import CarouselComp from "../components/CarouselComp";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <CarouselComp />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Services;
