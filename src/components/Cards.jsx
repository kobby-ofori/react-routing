import React from "react";
import { Button, Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">{props.btnInfo}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
