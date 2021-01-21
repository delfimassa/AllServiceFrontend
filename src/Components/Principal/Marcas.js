import React from "react";
import volcan from "../../assets/images/marcas/5_Volcan.png";
import longvie from "../../assets/images/marcas/1_Longvie.png";
import ariston from "../../assets/images/marcas/2_Ariston.png";
import orbis from "../../assets/images/marcas/3_Orbis.png";
import depaolo from "../../assets/images/marcas/8_Depaolo.png";
import midea from "../../assets/images/marcas/6_Midea.png";
import morelli from "../../assets/images/marcas/4_Morelli.png";
import patrick from "../../assets/images/marcas/7_Patrick.png";
import mabe from "../../assets/images/marcas/9_Mabe.png";
import usman from "../../assets/images/marcas/10_Usman.png";
import ge from "../../assets/images/marcas/11_GE.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import marcasImagenes from "../../assets/images/marcas/AllService_Marcas.png";

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
    patrick,
    mabe,
    ge,
  ];
  return (
    <div>
      <div className="d-none d-md-block d-sm-none">
        <img src={marcasImagenes} alt="marcas allservice" className="w-100 " />
      </div>
      <div className="container">
        <div className="text-center d-md-none d-sm-block col-sm-12  ">
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
    </div>
  );
};

export default Marcas;
