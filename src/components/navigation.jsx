import React, { useState, useEffect } from "react";
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo de la empresa */}
        <a href="#home" className="navbar-logo">
          <img src="/img/LogoCubo.png" alt="Evolutia Logo" className={`logo ${scrolled ? "small" : ""}`} />
        </a>

        {/* Menú de navegación */}
        <ul className="navbar-menu">
          <li><a href="#features">¿Por qué?</a></li>
          <li><a href="#services">¿Qué Hacen?</a></li>
          <li><a href="#about">¿Quiénes Somos?</a></li>
          <li><a href="#portfolio">Gallery</a></li>
          <li><a href="#contact" className="cta-button">Empieza</a></li>
        </ul>
      </div>
    </nav>
  );
};
