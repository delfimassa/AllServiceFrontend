import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="Imagen 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Imagen 2"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
