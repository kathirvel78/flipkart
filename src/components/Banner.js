import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src="https://via.placeholder.com/1500x300" alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="https://via.placeholder.com/1500x300" alt="First slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="https://via.placeholder.com/1500x300" alt="First slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Banner;
