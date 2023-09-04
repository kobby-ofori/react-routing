import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import composeimg from "../images/composeimg.jpg";
import { Container, Row } from "react-bootstrap";

const ServiceComp = () => {
  return (
    <Container>
      <Row>
        <Cards
          img={composeimg}
          title="Compose"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus atque, est, a quaerat doloremque laborum 
                culpa veritatis numquam corrupti labore officiis, 
                molestias dolorum fugit! Veritatis, expedita? 
                Nemo eligendi quidem recusandae."
        />
      </Row>
    </Container>
  );
};

export default ServiceComp;
