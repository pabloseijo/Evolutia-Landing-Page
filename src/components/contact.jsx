import { useState } from "react";
import emailjs from "emailjs-com";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="section-title">
                <h2>Contacta con nosotros</h2>
                <p>
                  ¿Tienes alguna pregunta? ¿Quieres saber más sobre nuestros servicios? ¡Estamos aquí para ayudarte! Reserva una cita y te resolveremos todas tus dudas.
                </p>
              </div>

              <div className="col-md-12 text-center" style={{ marginTop: "0px", backgroundColor: "#1a1a1a", padding: "20px", borderRadius: "10px" }}>
                <h3 style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  position: "relative",
                  display: "block",
                  textAlign: "center"
                }}>
                  Reserva una reunión
                </h3>
                <div className="calendly-inline-widget"
                    style={{ minWidth: "320px", height: "680px" }}
                    data-url="https://calendly.com/pgarsei510?background_color=1a1a1a&text_color=ffffff&primary_color=ff69b4">
                </div>
              </div>

              {/*
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <h3 style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#ffffff",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    position: "relative",
                    display: "block",
                    textAlign: "left"
                  }}>
                    Contacta con nosotros
                  </h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar Mensaje
                </button>
              </form>
              */}

            </div>
          </div>
          
          {/*
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de Contacto</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Teléfono
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
         

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          */}

          {/* Sección de Copyright */}
          <div className="col-md-12 text-center copyright">
                <p>
                  © {new Date().getFullYear()} <strong>Evolutia.dev</strong>. Todos los derechos reservados.
                </p>
              </div>
        </div>
      </div>
    </div>
  );
};
