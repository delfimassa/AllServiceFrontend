import React from "react";
import volcan from "../../assets/images/marcas/volcan.png";
import longvie from "../../assets/images/marcas/longvie.png";
import ariston from "../../assets/images/marcas/ariston.png";
import orbis from "../../assets/images/marcas/orbis.png";
import depaolo from "../../assets/images/marcas/depaolo.png";
import midea from "../../assets/images/marcas/midea.png";
import morelli from "../../assets/images/marcas/morelli.png";
import usman from "../../assets/images/marcas/usman.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Marcas = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3300,
  };
  const images = [
    volcan,
    longvie,
    ariston,
    orbis,
    depaolo,
    midea,
    morelli,
    usman,
  ];
  return (
    <div>
      <div className="d-none d-md-block d-sm-none">
        {/* FIN TITULO */}
        <div className="row no-gutters ">
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={longvie} alt="longvie" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={volcan} alt="volcan" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={ariston} alt="ariston" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={orbis} alt="orbis" />
          </div>
        </div>
        <div className="row no-gutters mb-5">
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={depaolo} alt="depaolo" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={midea} alt="midea" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={morelli} alt="morelli" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={usman} alt="usman" />
          </div>
        </div>
        <div className="row container d-flex justify-content-around no-gutters mb-5">
           <div className=" col-sm-12 col-md-4 px-5">
            <img className="w-80" height="55px"  src={depaolo} alt="depaolo" />
          </div>
          <div className="col-sm-12 col-md-4 px-5">
            <img className="w-100" src={midea} alt="midea" />
          </div>
          <div className="col-sm-12 col-md-4 px-5">
            <img className="w-100" src={morelli} alt="morelli" />
          </div>
        </div>
      </div>

      <div
        className="text-center fondo  m-5   d-md-none d-sm-block
      "
      >
        <Slider {...settings}>
          {images.map((img, i) => {
            return (
              <div
                key={i}
                className="d-flex align-items-center justify-content-center"
              >
                <img className="alturaMarcas" src={img} alt="img" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Marcas;
