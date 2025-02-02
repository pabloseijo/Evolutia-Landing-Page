import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top">
            <img 
              src="/img/LogoCubo.jpg" 
              alt="Evolutia Logo"
              className="navbar-logo"
            />
          </a>
          
          {/* Botón del menú para móviles */}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#features" className="page-scroll">Porque</a></li>
            <li><a href="#services" className="page-scroll">¿Qué Hacen?</a></li>
            <li><a href="#about" className="page-scroll">¿Quiénes Somos?</a></li>
            <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
            <li><a href="#contact" className="page-scroll">Empieza ya</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
