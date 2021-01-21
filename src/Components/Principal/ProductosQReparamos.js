import React from "react";
import cocina from "../../assets/images/productos/cocina.png";
import anafe from "../../assets/images/productos/anafe.png";
import horno from "../../assets/images/productos/horno.png";
import termotanques from "../../assets/images/productos/termotanques.png";
import calefactor from "../../assets/images/productos/calefactor.png";
import calefon from "../../assets/images/productos/calefon.png";
import lavarropas from "../../assets/images/productos/lavarropas.png";
import lavavajillas from "../../assets/images/productos/lavavajillas.png";

const ProductosQReparamos = () => {
  return (
    <div id="productosqreparamos">
      {/* TITULO */}
      <div className="verdebg fondonegro p-5">
        <h1 className="text-center verdetext letragorda">
          PRODUCTOS QUE REPARAMOS
        </h1>
      </div>

      {/* FIN TITULO */}
      <div className="row no-gutters my-5">
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">
            COCINAS A GAS Y ELÉCTRICAS
          </h5>
          <img className="w-100" src={cocina} alt="cocina" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">
            ANAFES A GAS Y ELÉCTRICOS
          </h5>
          <img className="w-100" src={anafe} alt="anafe" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">
            HORNOS A GAS Y ELÉCTRICOS
          </h5>
          <img className="w-100" src={horno} alt="horno" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">
            TERMOTANQUES A GAS Y ELÉCTRICOS
          </h5>
          <img className="w-100" src={termotanques} alt="termotanques" />
        </div>
      </div>
      <div className="row no-gutters mb-5">
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">
            CALEFACTORES A GAS Y ELÉCTRICOS
          </h5>
          <img className="w-100" src={calefactor} alt="calefactor" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">CALEFONES</h5>
          <img className="w-100" src={calefon} alt="calefon" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">LAVARROPAS</h5>
          <img className="w-100" src={lavarropas} alt="lavarropas" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0 letraProd">LAVAVAJILLAS</h5>
          <img className="w-100" src={lavavajillas} alt="lavavajillas" />
        </div>
      </div>
    </div>
  );
};

export default ProductosQReparamos;
