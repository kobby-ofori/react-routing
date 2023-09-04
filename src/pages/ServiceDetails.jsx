import React from "react";
import { useParams } from "react-router-dom";
// import Cards from "../components/Cards";
// import adele from "../images/adele.jpg";
import { Container, Row } from "react-bootstrap";

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        Service ID: {id}
        {/* <Cards
          img={adele}
          title="Interview"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus atque, est, a quaerat doloremque laborum 
                culpa veritatis numquam corrupti labore officiis, 
                molestias dolorum fugit! Veritatis, expedita? 
                Nemo eligendi quidem recusandae."
        /> */}
      
      </Row>
    </Container>
  );
};

export default ServiceDetails;
