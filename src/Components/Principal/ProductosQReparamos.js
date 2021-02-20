import React from "react";
import cocina from "../../assets/images/productos/01_Cocina.png";
import anafe from "../../assets/images/productos/02_Anafe.png";
import horno from "../../assets/images/productos/03_Horno.png";
import calefon from "../../assets/images/productos/04_Calefon.png";
import termotanques from "../../assets/images/productos/05_Termotanque.png";
import calefactor from "../../assets/images/productos/06_Calefactor.png";
import lavarropas from "../../assets/images/productos/07_Lavarropas.png";
import lavasecarropas from "../../assets/images/productos/08_Lavasecarropas.png";
import lavavajillas from "../../assets/images/productos/09_Lavavajillas.png";
import secarropas from "../../assets/images/productos/10_Secarropas.png";

const ProductosQReparamos = () => {
  return (
    <div id="productosqreparamos">
      {/* TITULO */}
      <div className="verdebg fondonegro p-5 mb-5">
        <h1 className="text-center verdetext letragorda">
          PRODUCTOS QUE REPARAMOS
        </h1>
      </div>
      {/* FIN TITULO */}
      {/* DISPOSICION NORMAL */}
      <div className="nomd">
        <div class="row no-gutters">
          <div className="col-md-1"></div>
          <div class="col-sm-12 col-lg-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">
              COCINAS A GAS Y ELÉCTRICAS
            </h5>
            <img className="w-100" src={cocina} alt="cocina" />
          </div>
          <div class="col-sm-12 col-lg-2 mb-3">
            <h5 className="text-center px-3 m-0 letraProd">
              ANAFES A GAS Y ELÉCTRICOS
            </h5>
            <img className="w-100" src={anafe} alt="anafe" />
          </div>
          <div class="col-sm-12 col-lg-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">
              HORNOS A GAS Y ELÉCTRICOS
            </h5>
            <img className="w-100" src={horno} alt="horno" />
          </div>
          <div class="col-sm-12 col-lg-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">CALEFONES</h5>
            <img className="w-100" src={calefon} alt="calefon" />
          </div>
          <div class="col-sm-12 col-lg-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">
              TERMOTANQUES A GAS Y ELÉCTRICOS
            </h5>
            <img className="w-100" src={termotanques} alt="termotanques" />
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* SEGUNDA FILA */}
        <div className="row no-gutters">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">
              CALEFACTORES A GAS Y ELÉCTRICOS
            </h5>
            <img className="w-100" src={calefactor} alt="calefactor" />
          </div>
          <div className="col-sm-12 col-md-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">LAVARROPAS</h5>
            <img className="w-100" src={lavarropas} alt="lavarropas" />
          </div>
          <div className="col-sm-12 col-md-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">LAVASECARROPAS</h5>
            <img className="w-100" src={lavasecarropas} alt="lavasecarropas" />
          </div>
          <div className="col-sm-12 col-md-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">LAVAVAJILLAS</h5>
            <img className="w-100" src={lavavajillas} alt="lavavajillas" />
          </div>
          <div className="col-sm-12 col-md-2 mb-5">
            <h5 className="text-center px-3 m-0 letraProd">SECARROPAS</h5>
            <img className="w-100" src={secarropas} alt="secarropas" />
          </div>
        </div>
        {/* FIN SEGUNDA FILA */}
      </div>

      {/* DISPOSICION MD */}
      <div className="noxs nosm nolg noxl">
        <div class="row no-gutters mb-5">
          <div class="col-md-3">
            <p className="text-center px-3 m-0 letraProd">COCINAS A GAS Y ELÉCTRICAS</p>
            <img className="w-100" src={cocina} alt="cocina" />
          </div>
          <div class="col-md-3">
            <p className="text-center px-3 m-0 letraProd">ANAFES A GAS Y ELÉCTRICOS</p>
            <img className="w-100" src={anafe} alt="anafe" />
          </div>
          <div class="col-md-3">
            <p className="text-center px-3 m-0 letraProd">HORNOS A GAS Y ELÉCTRICOS</p>
            <img className="w-100" src={horno} alt="horno" />
          </div>
          <div class="col-md-3">
            <p className="text-center px-3 m-0 letraProd">CALEFONES</p>
            <img className="w-100" src={calefon} alt="calefon" />
          </div>
        </div>
        {/* SEGUNDA FILA */}
        <div className="row no-gutters mb-5">
          <div class="col-md-3">
            <p className="text-center px-3 m-0 letraProd">TERMOTANQUES A GAS Y ELÉCTRICOS</p>
            <img className="w-100" src={termotanques} alt="termotanques" />
          </div>
          <div className="col-md-3">
            <p className="text-center px-3 m-0 letraProd">CALEFACTORES A GAS Y ELÉCTRICOS</p>
            <img className="w-100" src={calefactor} alt="calefactor" />
          </div>
          <div className="col-md-3">
            <p className="text-center px-3 m-0 letraProd">LAVARROPAS</p>
            <img className="w-100" src={lavarropas} alt="lavarropas" />
          </div>
          <div className="col-md-3">
            <p className="text-center px-3 m-0 letraProd">LAVASECARROPAS</p>
            <img className="w-100" src={lavasecarropas} alt="lavasecarropas" />
          </div>
        </div>
        {/* TERCERA FILA */}
        <div className="row no-gutters mb-5">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <p className="text-center px-3 m-0 letraProd">LAVAVAJILLAS</p>
            <img className="w-100" src={lavavajillas} alt="lavavajillas" />
          </div>
          <div className="col-sm-12 col-md-3">
            <p className="text-center px-3 m-0 letraProd">SECARROPAS</p>
            <img className="w-100" src={secarropas} alt="secarropas" />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      {/* FIN MD */}
    </div>
  );
};

export default ProductosQReparamos;
