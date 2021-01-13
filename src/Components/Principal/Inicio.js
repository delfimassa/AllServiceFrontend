import React from "react";
import Slider from "./Slider";
import QuienesSomos from "./QuienesSomos";
import NuestrosServicios from "./NuestrosServicios";
import ProductosQReparamos from "./ProductosQReparamos";
import Historia from "./Historia";
import Marcas from "./Marcas";
import Card35A from "./Card35A";
import Nombres from "./Nombres";
import Whatsapp from "./Whatsapp";


const Inicio = () => {
  return (
    <div>
      <Slider></Slider>
      <Marcas></Marcas>
      <Nombres></Nombres>
      
      <Card35A></Card35A>
      <QuienesSomos></QuienesSomos>
      <NuestrosServicios></NuestrosServicios>
      <ProductosQReparamos></ProductosQReparamos>
      <Historia></Historia>
      <Whatsapp></Whatsapp>
    </div>
  );
};

export default Inicio;
