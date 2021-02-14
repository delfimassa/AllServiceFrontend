import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/Slider_01.jpg";
import slider2 from "../../assets/images/Slider_02.jpg";
import slider3 from "../../assets/images/Slider_03.jpg";
import slider4 from "../../assets/images/Slider_04.jpg";

const Slider = () => {
  return (
    <div id="inicio">
      <Carousel  className="d-none d-md-block d-sm-none">
        <Carousel.Item>
          <img className=" w-100  " src={slider1} alt="Imagen 1"  />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 " src={slider2} alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 " src={slider3} alt="Imagen 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 " src={slider4} alt="Imagen 4" />
        </Carousel.Item>
      </Carousel>
      <Carousel  className="d-md-none d-sm-block">
        <Carousel.Item> 
          <img className=" w-100 " src={slider1} alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 " src={slider2} alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 " src={slider3} alt="Imagen 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100 " src={slider4} alt="Imagen 4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
