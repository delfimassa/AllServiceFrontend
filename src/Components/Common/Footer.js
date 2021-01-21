import React from "react";
import logob from "../../assets/logo-allservice-blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div>
      <div className="fondonegro ">
        <div className="d-none d-md-block d-sm-none">
          <div className="row  no-gutters px-5 pt-5 ">
            <div className=" col-md-3 mb-4 pl-5 px-3 ">
              <div className="mb-4">
                <Nav.Link exact={true} href="/#inicio">
                  <img src={logob} alt="logo del Footer" width="120px"></img>
                </Nav.Link>
                <p className="text-light text-left mt-4 m-3">
                  &copy;Todos los derechos <br />
                  reservados
                </p>
              </div>

              <div className="">
                <div className="container  ">
                  <Nav.Link
                    exact={true}
                    href="/#inicio"
                    className="nav-link text-light  mb-1 p-0"
                  >
                    <h5 className="textNav">INICIO</h5>
                  </Nav.Link>
                  <Nav.Link
                    exact={true}
                    href="/#servicios"
                    className="nav-link text-light textNav mb-1 p-0"
                  >
                    <h5 className="textNav">SERVICIOS</h5>{" "}
                  </Nav.Link>
                  <Nav.Link
                    exact={true}
                    href="/#productosqreparamos"
                    className="nav-link text-light textNav mb-1 p-0"
                  >
                    <h5 className="textNav">PRODUCTOS</h5>{" "}
                  </Nav.Link>
                  <Nav.Link
                    exact={true}
                    href="/contacto"
                    className="nav-link text-light  textNav mb-1 p-0"
                  >
                    <h5 className="textNav">CONTACTO</h5>
                  </Nav.Link>
                  <a
                    href="https://www.facebook.com/allservicetucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="mr-3 "
                      icon={faFacebookSquare}
                      color="#fff"
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/allservicetucuman/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className=""
                      icon={faInstagram}
                      color="#fff"
                      size="2x"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-3 pl-5 px-3">
              <div className="text-left">
                <div>
                  <h4 className="textNav greenContacto  my-4">HORARIOS</h4>
                </div>
                <div className="text-light ">
                  <h5 className="text34">LUNES A VIERNES</h5>
                  <h5 className="font-weight-light ">08:00 - 16:00</h5>
                </div>
                <div className="text-light ">
                  <h5 className="text34">SÁBADOS</h5>
                  <h5 className="font-weight-light ">08:00 - 12:00</h5>
                </div>
              </div>
            </div>
            <div className=" col-md-3 pl-5 px-3">
              <div className="text-light ">
                <h4 className="textNav greenContacto my-4">TELÉFONO</h4>
                <h5 className="text34">FIJO</h5>
                <p className="font-weight-light ">
                  <h5>381 423-9995 </h5>
                  <h5>381 423-3773 </h5>
                </p>

                <h5 className="text34">SERVICE</h5>
                <p className="font-weight-light ">
                  <a
                    href="https://wa.me/5493815231792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h5>381 523-1792</h5>
                  </a>
                </p>

                <h5 className="text34">REPUESTOS</h5>
                <p className="font-weight-light ">
                  <a
                    href="https://wa.me/5493815231792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h5 className="">381 681-2468</h5>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 pl-5 px-3">
              <div>
                <h4 className="textNav greenContacto my-4">DIRECCIÓN</h4>
                <p className="font-weight-light ">
                  <a
                    href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter "
                  >
                    <h5 className="text34">CORRIENTES 2514</h5>
                    <p>SAN MIGUEL DE TUCUMÁN. TUCUMÁN.</p>
                  </a>
                </p>
              </div>

              <div>
                <h4 className="textNav greenContacto my-4">CORREO</h4>
                <p className="font-weight-light ">
                  <h5 className=" letrasfooter">
                    allservicetuc@gmail.com <br />
                    allservicetuc@gmail.com <br />
                    allservicetuc@gmail.com
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SMALL MODE */}
        <div className="d-md-none d-sm-block col-sm-12">
          <div className="row  no-gutters px-5 pt-5 ">
            <div className="col-sm-12 col-md-3 ">
              <div className="text-center">
                <div className="mb-4">
                  <Nav.Link exact={true} href="/#inicio">
                    <img src={logob} alt="logo del Footer" width="120px"></img>
                  </Nav.Link>
                  <p className="text-light  mt-4 m-3">
                    &copy;Todos los derechos <br />
                    reservados
                  </p>
                </div>
              </div>

              <div className="">
                <div className="container text-center mb-3 ">
                  <a
                    href="https://www.facebook.com/allservicetucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="mr-3 "
                      icon={faFacebookSquare}
                      color="#fff"
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/allservicetucuman/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className=""
                      icon={faInstagram}
                      color="#fff"
                      size="2x"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 ">
              <div className="text-left">
                <div>
                  <h4 className="textNav greenContacto  my-4">HORARIOS</h4>
                </div>
                <div className="text-light ">
                  <h5 className="text34">LUNES A VIERNES</h5>
                  <h5 className="font-weight-light ">08:00 - 16:00</h5>
                </div>
                <div className="text-light ">
                  <h5 className="text34">SÁBADOS</h5>
                  <h5 className="font-weight-light ">08:00 - 12:00</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 ">
              <div className="text-light ">
                <h4 className="textNav greenContacto my-4">TELÉFONO</h4>
                <h5 className="text34">FIJO</h5>
                <p className="font-weight-light ">
                  <h5>381 423-9995 </h5>
                  <h5>381 423-3773 </h5>
                </p>

                <h5 className="text34">SERVICE</h5>
                <p className="font-weight-light ">
                  <a
                    href="https://wa.me/5493815231792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h5>381 523-1792</h5>
                  </a>
                </p>

                <h5 className="text34">REPUESTOS</h5>
                <p className="font-weight-light ">
                  <a
                    href="https://wa.me/5493815231792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h5 className="">381 681-2468</h5>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 mb-5 ">
              <div>
                <h4 className="textNav greenContacto my-4">DIRECCIÓN</h4>
                <p className="font-weight-light ">
                  <a
                    href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter "
                  >
                    <h5 className="text34">CORRIENTES 2514</h5>
                    <p>SAN MIGUEL DE TUCUMÁN. TUCUMÁN.</p>
                  </a>
                </p>
              </div>

              <div>
                <h4 className="textNav greenContacto my-4">CORREO</h4>
                <p className="font-weight-light ">
                  <h5 className=" letrasfooter">
                    allservicetuc@gmail.com <br />
                    allservicetuc@gmail.com <br />
                    allservicetuc@gmail.com
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
