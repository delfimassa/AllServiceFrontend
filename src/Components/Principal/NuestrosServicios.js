import React from "react";
import reparaciones from "../../assets/images/reparaciones.jpg";
import repuestos from "../../assets/images/repuestos.jpg";
import restauraciones from "../../assets/images/restauraciones.jpg";

const NuestrosServicios = () => {
  return (
    <div id="servicios">
      {/* TITULO GRANDE */}
      <div className="verdebg p-5">
        <h1 className="text-center grisoscurotext letragorda mb-0">
          NUESTROS SERVICIOS
        </h1>
      </div>
      {/* DISPOSICION PARA XL Y LARGE */}
      <div className="noxs nosm nomd">
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img
              className="w-100 h-100"
              src={reparaciones}
              alt="reparaciones"
            />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-5 m-0">
            <div className="container px-5 py-4 text">
              <h2 className="verdetext letragorda">REPARACIONES</h2>
              <ul className="list-unstyled text-light listamasgrande">
                <li className="textQS">Cocinas a gas y eléctricas</li>
                <li className="textQS">Anafes a gas y eléctricos</li>
                <li className="textQS">Termotanques a gas y eléctricos</li>
                <li className="textQS">Calefactores a gas y eléctricos</li>
                <li className="textQS">Hornos a gas y eléctricos</li>
                <li className="textQS">Calefones a gas</li>
                <li className="textQS">Lavarropas, lavavajillas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 grisoscurobg p-5 m-0">
            <div className="container text-left px-5 py-4">
              <h2 className="verdetext letragorda">RESTAURACIONES</h2>
              <ul className="list-unstyled text-light listamasgrande">
                <li className="textQS">Mano de obra</li>
                <li className="textQS">Retiro y entrega a domicilio</li>
                <li className="textQS">Mas los siguientes repuestos:</li>
                <li className="textQS">Conjunto de bisagras de aperturas</li>
                <li className="textQS">Burlete perimetral</li>
                <li className="textQS">Lana de vidrio</li>
                <li className="textQS">Manta de vidrio</li>
                <li className="textQS">Sistema de seguridad</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img
              className="w-100 h-100"
              src={restauraciones}
              alt="restauraciones"
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 mb-5">
            <img className="w-100 h-100" src={repuestos} alt="repuestos" />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-5 mb-5">
            <div className="container text-left px-5 py-4">
              <h2 className="verdetext letragorda">REPUESTOS</h2>
              <ul className="list-unstyled text-light listamasgrande">
                <li className="textQS">Repuestos originales</li>
                <li className="textQS">Kit quemadores LONGVIE</li>
                <li className="textQS">Kit quemadores ORBIS</li>
                <li className="textQS">Kit quemadores VOLCÁN</li>
                <li className="textQS">Kit quemadores DOMEC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* DISPOSICION DE COLUMNAS PARA MD */}
      <div className="noxs nosm nolg noxl">
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img
              className="w-100 h-100"
              src={reparaciones}
              alt="reparaciones"
            />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
            <div className="container pl-5 py-4">
              <h3 className="verdetext letragorda">REPARACIONES</h3>
              <ul className="list-unstyled textQS text-light ">
                <li className="textQS">Cocinas a gas y eléctricas</li>
                <li className="textQS">Anafes a gas y eléctricos</li>
                <li className="textQS">Termotanques a gas y eléctricos</li>
                <li className="textQS">Calefactores a gas y eléctricos</li>
                <li className="textQS">Hornos a gas y eléctricos</li>
                <li className="textQS">Calefones a gas</li>
                <li className="textQS">Lavarropas, lavavajillas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
            <div className="container text-left pl-5 py-4">
              <h3 className="verdetext letragorda">RESTAURACIONES</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">Mano de obra</li>
                <li className="textQS">Retiro y entrega a domicilio</li>
                <li className="textQS">Mas los siguientes repuestos:</li>
                <li className="textQS">Conjunto de bisagras de aperturas</li>
                <li className="textQS">Burlete perimetral</li>
                <li className="textQS">Lana de vidrio</li>
                <li className="textQS">Manta de vidrio</li>
                <li className="textQS">Sistema de seguridad</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img
              className="w-100 h-100"
              src={restauraciones}
              alt="restauraciones"
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 mb-5">
            <img className="w-100 h-100" src={repuestos} alt="repuestos" />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 mb-5">
            <div className="container text-left pl-5 py-4">
              <h3 className="verdetext letragorda">REPUESTOS</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">Repuestos originales</li>
                <li className="textQS">Kit quemadores LONGVIE</li>
                <li className="textQS">Kit quemadores ORBIS</li>
                <li className="textQS">Kit quemadores VOLCÁN</li>
                <li className="textQS">Kit quemadores DOMEC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* DISOSICION DE COLUMNAS PARA SMALL Y XSMALL*/}
      <div className="nomd nolg noxl">
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img
              className="w-100 h-100"
              src={reparaciones}
              alt="reparaciones"
            />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
            <div className="container text-left pl-5 py-4">
              <h3 className="verdetext letragorda">REPARACIONES</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">Cocinas a gas y eléctricas</li>
                <li className="textQS">Anafes a gas y eléctricos</li>
                <li className="textQS">Termotanques a gas y eléctricos</li>
                <li className="textQS">Calefactores a gas y eléctricos</li>
                <li className="textQS">Hornos a gas y eléctricos</li>
                <li className="textQS">Calefones a gas</li>
                <li className="textQS">Lavarropas, lavavajillas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img
              className="w-100 h-100"
              src={restauraciones}
              alt="restauraciones"
            />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
            <div className="container text-left pl-5 py-4">
              <h3 className="verdetext letragorda">RESTAURACIONES</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">Mano de obra</li>
                <li className="textQS">Retiro y entrega a domicilio</li>
                <li className="textQS">Mas los siguientes repuestos:</li>
                <li className="textQS">Conjunto de bisagras de aperturas</li>
                <li className="textQS">Burlete perimetral</li>
                <li className="textQS">Lana de vidrio</li>
                <li className="textQS">Manta de vidrio</li>
                <li className="textQS">Sistema de seguridad</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img className="w-100 h-100" src={repuestos} alt="repuestos" />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 mb-5">
            <div className="container text-left pl-5 py-4">
              <h3 className="verdetext letragorda">REPUESTOS</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">Repuestos originales</li>
                <li className="textQS">Kit quemadores LONGVIE</li>
                <li className="textQS">Kit quemadores ORBIS</li>
                <li className="textQS">Kit quemadores VOLCÁN</li>
                <li className="textQS"> Kit quemadores DOMEC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosServicios;
