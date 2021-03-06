import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo-web-allservice.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="sticky-top">
      {/* NAV VERDE */}
      {/* <div className="noxs nosm nomd">
        <Navbar className="verdebg p-1 navverde">
          <div className="container">
            <div className="d-flex">
            <a
              href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="grisoscurotext m-0 p-0"
            >
              <p className="grisoscurotext my-auto tamanio">
                Corrientes 2514 - San Miguel de Tucumán</p>
            </a>
            <p className="grisoscurotext my-auto tamanio px-2">|  4239995 - 4233733  |</p>
            <a
              href="https://wa.me/5493815231792"
              target="_blank"
              rel="noopener noreferrer"
              className="grisoscurotext m-0 p-0"
            >
              <p className="grisoscurotext my-auto tamanio">3815231792 (Service)</p>
            </a>
            <a
              href="https://wa.me/5493816812468"
              target="_blank"
              rel="noopener noreferrer"
              className="trisoscurotext m-0 p-0"
            >
              <p className="grisoscurotext my-auto tamanio px-2 mr-1">
                | 3816812468 (Repuestos)
              </p>
            </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/allservicetucuman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-3 grisoscurotext"
                  icon={faFacebook}
                  color="#fff"
                  size="1.5x"
                />
              </a>
              <a
                href="https://www.instagram.com/allservicetucuman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mx-3 grisoscurotext"
                  icon={faInstagram}
                  color="#fff"
                  size="1.5x"
                />
              </a>
            </div>
          </div>
        </Navbar>
      </div> */}
      {/* NAV OSCURO */}
      <Navbar collapseOnSelect className="FondoNav" variant="dark" expand="lg">
        <div className="container py-1">
          <Nav.Link exact={true} href="/#inicio">
            <img src={logo} alt="logo del NavBar" width="110px"></img>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link
                exact={true}
                href="/#inicio"
                className="nav-link text-light mx-3 textNav"
              >
                <h6 className="textNav">INICIO</h6>{" "}
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/#servicios"
                className="nav-link text-light mx-3 textNav"
              >
                <h6 className="textNav">SERVICIOS</h6>
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/#productosqreparamos"
                className="nav-link text-light mx-3 textNav"
              >
                <h6 className="textNav">PRODUCTOS</h6>
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/contacto"
                className="nav-link text-light mx-3 textNav"
              >
                <h6 className="textNav">CONTACTO</h6>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
