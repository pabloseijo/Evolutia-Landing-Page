import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="text-center">
      <div className="container">
        {/* Sección Título */}
        <div className="section-title">
          <h2>¿Quiénes Somos?</h2>
          <div className="underline"></div>
        </div>

        {/* Descripción con palabras en negrita */}
        <div className="about-text">
          <p>
            Somos <strong>Evolutia</strong>, un equipo de estudiantes de <strong>Ingeniería Informática</strong> en la <strong>Universidad de Santiago de Compostela (USC)</strong> con una misión clara: <strong>transformar la automatización empresarial</strong> con agentes de <strong>IA</strong>.
            Creemos en el <strong>poder de la inteligencia artificial</strong> para <strong>optimizar procesos</strong>, <strong>reducir costos</strong> y <strong>aumentar la eficiencia</strong>.
          </p>
          <p>
            Nuestra pasión por la <strong>innovación</strong> nos lleva a desarrollar soluciones que permiten a las empresas <strong>crecer, escalar y mejorar su rendimiento</strong>. Nos especializamos en la implementación de <strong>Agentes de IA</strong> diseñados para <strong>automatizar tareas</strong>, mejorar la <strong>atención al cliente</strong> y optimizar la <strong>toma de decisiones</strong>.
          </p>
          <p>
            Buscamos hacer que la <strong>IA</strong> sea <strong>accesible</strong>, <strong>intuitiva</strong> y altamente efectiva para cualquier tipo de negocio. <strong>El futuro es la automatización inteligente</strong>. Con <strong>Evolutia</strong>, las empresas se vuelven más <strong>eficientes</strong>, <strong>rentables</strong> y <strong>competitivas</strong>.
          </p>
        </div>

        {/* Subtítulo "Por qué elegirnos" */}
        <div className="section-title">
          <h3>¿Por qué elegirnos?</h3>
          <div className="underline"></div>
        </div>

        {/* Beneficios en dos columnas */}
        <div className="row">
          <div className="col-md-6 text-left">
            <ul className="about-list">
              {props.data
                ? props.data.Why.map((d, i) => (
                    <li key={`${d}-${i}`}>
                      <i className="fa fa-check-circle"></i> {d.split(" ")[0]} {d.substring(d.indexOf(" "))}
                    </li>
                  ))
                : "Cargando..."}
            </ul>
          </div>
          <div className="col-md-6 text-left">
            <ul className="about-list">
              {props.data
                ? props.data.Why2.map((d, i) => (
                    <li key={`${d}-${i}`}>
                      <i className="fa fa-check-circle"></i> {d.split(" ")[0]} {d.substring(d.indexOf(" "))}
                    </li>
                  ))
                : "Cargando..."}
            </ul>
          </div>
        </div>
        <a
          href="#contact"
          className="btn btn-custom btn-lg page-scroll"
        >
          Empieza ya
        </a>{" "}
      </div>
    </div>
  );
};
