import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import book from "../images/book.jpg";
import { Container, Row } from "react-bootstrap";

const ServiceBook = () => {
  return (
    <Container>
      <Row>
        <Cards
          img={book}
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

export default ServiceBook;
