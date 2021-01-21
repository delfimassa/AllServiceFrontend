import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider-4.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import slider4 from "../../assets/images/slider-1.jpg";

const Slider = () => {
  return (
    <div id="inicio">
      <Carousel  className="d-none d-md-block d-sm-none">
        <Carousel.Item>
          <img className=" w-100 tales " src={slider4} alt="Imagen 1"  />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 tales" src={slider2} alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 tales" src={slider3} alt="Imagen 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 tales" src={slider1} alt="Imagen 4" />
        </Carousel.Item>
      </Carousel>
      <Carousel  className="d-md-none d-sm-block">
        <Carousel.Item> 
          <img className=" w-100 taless" src={slider4} alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 taless" src={slider2} alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 taless" src={slider3} alt="Imagen 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 taless" src={slider1} alt="Imagen 4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
