import React from "react";
import Carousel from "react-bootstrap/Carousel";
import composeimg from "../images/composeimg.jpg";
import adele from "../images/adele.jpg";
import book from "../images/book.jpg";
import { Link } from "react-router-dom";

const CarouselComp = () => {
  return (
    <div>
      <Carousel style={{ marginTop: "50px", height: "100px", color: "greenyellow" }}>
        <Carousel.Item>
          <Link to={`/services/1`}>
            <img className="d-block w-100" src={adele} alt="First slide" />
            <Carousel.Caption>
              <h3>Interview</h3>
              <p variant="primary">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to={`/services/2`}>
            <img
              className="d-block w-100"
              src={composeimg}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Compose</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to={`/services/3`}>
            <img className="d-block w-100" src={book} alt="Third slide" />

            <Carousel.Caption>
              <h3>Book Service</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
