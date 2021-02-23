import React from "react";
import reparaciones from "../../assets/images/reparaciones.jpg";
import reparacionesmd from"../../assets/images/reparacionesmd.jpg"
import repuestos from "../../assets/images/web_repuestos.jpg";
import restauraciones from "../../assets/images/web_restauraciones.jpg";
import restauracionesmd from "../../assets/images/web_restauracionesmd.jpg";

const NuestrosServicios = () => {
  return (
    <div id="servicios">
      {/* TITULO GRANDE */}
      <div className="verdebg fondonegro p-5">
        <h1 className="text-center verdetext letragorda mb-0">
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
              <ul className="m-0 pl-3 text-light listamasgrande">
                <li className="textQS">Cocinas a gas y eléctricas</li>
                <li className="textQS">Anafes a gas y eléctricos</li>
                <li className="textQS">Hornos a gas y eléctricos</li>
                <li className="textQS">Calefones a gas</li>
                <li className="textQS">Termotanques a gas y eléctricos</li>
                <li className="textQS">Calefactores a gas y eléctricos</li>
                <li className="textQS">Lavarropas y Lavasecarropas</li>
                <li className="textQS"> Lavavajillas</li>
                <li className="textQS">Secarropas de aire caliente</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 grisoscurobg p-5 m-0">
            <div className="container text-left px-5 py-4">
              <h2 className="verdetext letragorda">RESTAURACIONES</h2>
              <ul className="list-unstyled text-light listamasgrande">
                <li className="textQS">
                  Sin moverte de tu casa un técnico de nuestro Staff te visitara
                  para poder realizar un presupuesto de acuerdo a la medida de
                  tus necesidades. Somos especialistas en dejar tus productos
                  como nuevos, realizamos trabajos personalizados y artesanales en
                  cada uno de ellos, utilizando siempre las piezas originales y
                  mano de obra especializada, garantizando el correcto
                  funcionamiento de tus productos.
                </li>
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
                <li className="textQS">
                  Contamos con un amplio Stock de piezas originales,
                  garantizando que el funcionamiento de sus productos sea
                  siempre como el primer día. Hacemos envío a todo el país.
                </li>
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
              src={reparacionesmd}
              alt="reparaciones"
            />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
            <div className="container pl-5 py-4">
              <h3 className="verdetext letragorda">REPARACIONES</h3>
              <ul className="m-0 pl-3 text-light listamasgrande">
                <li className="textQS">Cocinas a gas y eléctricas</li>
                <li className="textQS">Anafes a gas y eléctricos</li>
                <li className="textQS">Hornos a gas y eléctricos</li>
                <li className="textQS">Calefones a gas</li>
                <li className="textQS">Termotanques a gas y eléctricos</li>
                <li className="textQS">Calefactores a gas y eléctricos</li>
                <li className="textQS">Lavarropas, lavasecarropas</li>
                <li className="textQS"> Lavavajillas</li>
                <li className="textQS">Secarropas de aire caliente</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
            <div className="container text-left ml-4 pr-5 py-4 mt-1">
              <h3 className="verdetext letragorda">RESTAURACIONES</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">
                  Sin moverte de tu casa un técnico de nuestro Staff te visitara
                  para poder realizar un presupuesto de acuerdo a la medida de
                  tus necesidades. Somos especialistas en dejar tus productos
                  como nuevos, realizamos trabajos personalizados y artesanales en
                  cada uno de ellos, utilizando siempre las piezas originales y
                  mano de obra especializada, garantizando el correcto
                  funcionamiento de tus productos.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img
              className="w-100 h-100"
              src={restauracionesmd}
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
                <li className="textQS">
                  Contamos con un amplio Stock de piezas originales,
                  garantizando que el funcionamiento de sus productos sea
                  siempre como el primer día. Hacemos envío a todo el país.
                </li>
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
          <div className="col-sm-12 col-md-6 grisoscurobg px-4 m-0">
            <div className="container text-left py-4">
              <h3 className="verdetext letragorda">REPARACIONES</h3>
              <ul className="m-0 pl-3 text-light">
                <li className="textQS">Cocinas a gas y eléctricas</li>
                <li className="textQS">Anafes a gas y eléctricos</li>
                <li className="textQS">Hornos a gas y eléctricos</li>
                <li className="textQS">Calefones a gas</li>
                <li className="textQS">Termotanques a gas y eléctricos</li>
                <li className="textQS">Calefactores a gas y eléctricos</li>
                <li className="textQS">Lavarropas y Lavasecarropas</li>
                <li className="textQS"> Lavavajillas</li>
                <li className="textQS">Secarropas de aire caliente</li>
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
          <div className="col-sm-12 col-md-6 grisoscurobg px-4 m-0">
            <div className="container text-left py-4">
              <h3 className="verdetext letragorda">RESTAURACIONES</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">
                  Sin moverte de tu casa un técnico de nuestro Staff te visitara
                  para poder realizar un presupuesto de acuerdo a la medida de
                  tus necesidades. Somos especialistas en dejar tus productos
                  como nuevos, realizamos trabajos personalizados y artesanales en
                  cada uno de ellos, utilizando siempre las piezas originales y
                  mano de obra especializada, garantizando el correcto
                  funcionamiento de tus productos.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 p-0 m-0">
            <img className="w-100 h-100" src={repuestos} alt="repuestos" />
          </div>
          <div className="col-sm-12 col-md-6 grisoscurobg px-4 mb-5">
            <div className="container text-left py-4">
              <h3 className="verdetext letragorda">REPUESTOS</h3>
              <ul className="list-unstyled text-light">
                <li className="textQS">
                  Contamos con un amplio Stock de piezas originales,
                  garantizando que el funcionamiento de sus productos sea
                  siempre como el primer día. Hacemos envío a todo el país.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosServicios;
