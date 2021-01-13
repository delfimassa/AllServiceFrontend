import React from "react";
import quienessomos from "../../assets/images/quienes-somos.jpg";
import quienessomosmd from "../../assets/images/quienes-somos-md.jpg";

const QuienesSomos = () => {
  return (
    <div>
      {/* DIV PPAL */}

      {/* DIV NORMAL */}
      <div className="nomd">
        <div className="row no-gutters">
          <div className="col-md-5 col-sm-12 p-0">
            <img
              className="w-100 h-100"
              src={quienessomos}
              alt="quienes somos"
            />
          </div>
          <div className="col-md-7 col-sm-12 grisclarobg px-0">
            <div className="container text-left py-4">
              <h1 className="verdetext text-center letragorda pt-4  pb-3">
                QUIENES SOMOS
              </h1>
              <h5 className="text-left mr-2 textQS text-light pl-4 ml-2">
                Somos una empresa dedicada a la reparación de artefactos a gas y
                eléctricos, de línea blanca, como así también a la venta de
                repuestos originales. Brindamos asistencia técnica a marcas de
                primer nivel como LONGVIE, ARISTON, ORBIS, VOLCAN, MORELLI,
                entre otras. Nuestra cobertura de asistencia técnica se extiende
                a las principales ciudades de la provincia de Tucumán.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* DIV PARA MD */}
      <div className=" noxs nosm nolg noxl">
        <div className="row no-gutters">
          <div className="col-md-5 col-sm-12 p-0">
            <img
              className="w-100 h-100"
              src={quienessomosmd}
              alt="quienes somos"
            />
          </div>
          <div className="col-md-7 col-sm-12 grisclarobg px-0">
            <div className="container text-left my-5 px-4 py-4">
              <h3 className="verdetext text-left letragorda pt-2 pl-4 pb-3">
                QUIENES SOMOS
              </h3>
              <h5 className=" textQS px-4 ">
                Somos una empresa dedicada a la reaparación de artefactos a gas
                y eléctricos, como así también a la venta de repuestos
                originales. Brindamos asistencia técnica a marcas de primer
                nivel como LONGVIE, ARISTON, ORBIS, VOLCAN, MORELLI, entre
                otras. 35 años de trayectoria nos avalan.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* DIV PPAL */}
    </div>
  );
};

export default QuienesSomos;
