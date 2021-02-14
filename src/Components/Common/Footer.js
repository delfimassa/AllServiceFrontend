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
                  &copy;Copyright 2021 <br/> <a href="https://wa.me/5493813843092"
                    target="_blank"
                    rel="noopener noreferrer" className="text-light"><p className="greenContacto">Agencia Katana</p></a> 
                </p>
              </div>

              <div className="">
                <div className="container  ">
                  <Nav.Link
                    exact={true}
                    href="/#inicio"
                    className="nav-link text-light  mb-1 p-0"
                  >
                    <h7 className="textNav">INICIO</h7>
                  </Nav.Link>
                  <Nav.Link
                    exact={true}
                    href="/#servicios"
                    className="nav-link text-light textNav mb-1 p-0"
                  >
                    <h7 className="textNav">SERVICIOS</h7>{" "}
                  </Nav.Link>
                  <Nav.Link
                    exact={true}
                    href="/#productosqreparamos"
                    className="nav-link text-light textNav mb-1 p-0"
                  >
                    <h7 className="textNav">PRODUCTOS</h7>{" "}
                  </Nav.Link>
                  <Nav.Link
                    exact={true}
                    href="/contacto"
                    className="nav-link text-light  textNav mb-1 p-0"
                  >
                    <h7 className="textNav">CONTACTO</h7>
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
                  <h6 className="textNav greenContacto  my-4">HORARIO</h6>
                </div>
                <div className="text-light mb-4">
                  <h7 className="text34 ">LUNES A VIERNES</h7>
                  <br /> <h7 className="font-weight-light ">08:00 - 16:00</h7>
                </div>
                <div className="text-light ">
                  <h7 className="text34">SÁBADOS</h7>
                  <br />
                  <h7 className="font-weight-light ">08:00 - 12:00</h7>
                </div>
              </div>
            </div>
            <div className=" col-md-3 pl-5 px-3">
              <div className="text-light ">
                <h6 className="textNav greenContacto my-4">TELÉFONO</h6>
                <h7 className="text34">SERVICE</h7>
                <p className="font-weight-light ">
                  <h7>381 423-9995 </h7>
                  <br />
                  <h7>381 423-3773 </h7>
                  <br />
                  <a
                    href="https://wa.me/5493815231792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h7 className="mb-3">
                      <FontAwesomeIcon
                        className="mr-2 text-light"
                        icon={faWhatsapp}
                        color="#abc526"
                        size="1x"
                      />
                      381 523-1792
                    </h7>
                  </a>
                  <h7 className=" letrasfooter">
                    <br />
                    service@allservice.com.ar
                  </h7>
                </p>
                <h7 className="text34"></h7>
                <p className="font-weight-light "></p>
                <h7 className="text34">REPUESTOS</h7>
                <p className="font-weight-light ">
                  <a
                    href="https://wa.me/5493816812468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h7 className="mb-3">
                      <FontAwesomeIcon
                        className="mr-2 text-light"
                        icon={faWhatsapp}
                        color="#abc526"
                        size="1x"
                      />
                      381 681-2468{" "}
                    </h7>
                  </a>
                  <h7 className=" letrasfooter">
                    <br />
                    repuestos@allservice.com.ar
                  </h7>
                </p>
              </div>
            </div>
            <div className="col-md-3 pl-5 px-3">
              <div>
                <h6 className="textNav greenContacto my-4">DIRECCIÓN</h6>
                <p className="font-weight-light ">
                  <a
                    href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h7 className="text34">CORRIENTES 2514</h7>
                    <p>SAN MIGUEL DE TUCUMÁN, TUCUMÁN.</p>
                  </a>
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
                  &copy;Copyright 2021 <br/><a href="https://wa.me/5493813843092"
                    target="_blank"
                    rel="noopener noreferrer" className="text-light"><p className="greenContacto">Agencia Katana</p></a> 
                    
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
                  <h6 className="textNav greenContacto  my-4">HORARIO</h6>
                </div>
                <div className="text-light mb-4">
                  <h7 className="text34">LUNES A VIERNES</h7>
                  <br />
                  <h7 className="font-weight-light ">08:00 - 16:00</h7>
                </div>
                <div className="text-light ">
                  <h7 className="text34">SÁBADOS</h7>
                  <br />
                  <h7 className="font-weight-light ">08:00 - 12:00</h7>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 ">
              <div className="text-light ">
                <h6 className="textNav greenContacto my-4">TELÉFONO</h6>
                <h7 className="text34">SERVICE</h7>
                <p className="font-weight-light ">
                  <h7>381 423-9995 </h7>
                  <br />
                  <h7>381 423-3773 </h7>
                  <br />
                  <a
                    href="https://wa.me/5493815231792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h7 className="mb-3">
                      <FontAwesomeIcon
                        className="mr-2 text-light"
                        icon={faWhatsapp}
                        color="#abc526"
                        size="1x"
                      />
                      381 523-1792
                    </h7>
                  </a>
                  <h7 className=" letrasfooter">
                    <br />
                    service@allservice.com.ar
                  </h7>
                </p>

                <h7 className="text34">REPUESTOS</h7>
                <p className="font-weight-light ">
                  <a
                    href="https://wa.me/5493816812468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h7 className="mb-3">
                      <FontAwesomeIcon
                        className="mr-2 text-light"
                        icon={faWhatsapp}
                        color="#abc526"
                        size="1x"
                      />
                      381 681-2468{" "}
                    </h7>
                    <h7 className=" letrasfooter">
                      <br />
                      repuestos@allservice.com.ar
                    </h7>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 mb-5 ">
              <div>
                <h6 className="textNav greenContacto my-4">DIRECCIÓN</h6>
                <p className="font-weight-light ">
                  <a
                    href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h7 className="text34">CORRIENTES 2514</h7>
                    <p>SAN MIGUEL DE TUCUMÁN, TUCUMÁN.</p>
                  </a>
                </p>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
