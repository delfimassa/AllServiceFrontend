import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Nombres() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div className="text-center fondo  m-5 d-md-none d-sm-block">
        <Slider {...settings}>
          <div className="">
            <h3 className="letraNombre font-weight-bold">
              COCINAS
            </h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">CALEFONES</h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">LAVAVAJILLAS</h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">LAVARROPAS</h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">TERMOTANQUES</h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">HORNOS</h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">ANAFES</h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">CALEFACTORES</h3>
          </div>
          <div>
            <h3 className="letraNombre font-weight-bold">SECARROPAS</h3>
          </div>
        </Slider>
      </div>
      <div className="text-center fondo  m-5 d-none d-md-block d-sm-none ">
        <Slider {...settings}>
          
          <div>
            <h1 className="letraNombre font-weight-bold">CALEFONES   -   TERMOTANQUES</h1>
          </div>
          <div>
            <h1 className="letraNombre font-weight-bold">LAVAVAJILLAS   -   LAVARROPAS</h1>
          </div>
          <div>
            <h1 className="letraNombre font-weight-bold">HORNOS   -   ANAFES</h1>
          </div>
          <div>
            <h1 className="letraNombre font-weight-bold">CALEFACTORES - LAVAVAJILLAS</h1>
          </div>
          <div>
            <h1 className="letraNombre font-weight-bold">SECARROPAS - LAVARROPAS</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Nombres;
