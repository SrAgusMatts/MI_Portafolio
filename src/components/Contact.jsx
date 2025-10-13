import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PROFILE } from "../data";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6fbv4ej",
        "template_5tr4kvd",
        form.current,
        "koaAhTMgkBgI2mC-b"
      )
      .then(
        () => {
          alert("¡Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-text">
          ¡Hablemos! Podés escribirme por mail o conectar en mis redes.
        </p>

        {/* Formulario */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Escribí tu mensaje..."
            rows="5"
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Enviar mensaje
          </button>
        </form>

        {/* Links */}
        <div className="contact-links">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
