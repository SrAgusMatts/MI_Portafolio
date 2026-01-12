import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PROFILE } from "../data";

export default function Contact() {
  const form = useRef();
  
  const [notification, setNotification] = useState({ show: false, message: "", type: "success" });

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "[ ENVIANDO DATOS... ]";
    btn.disabled = true;

    emailjs
      .sendForm(
        "service_6fbv4ej",
        "template_5tr4kvd",
        form.current,
        "koaAhTMgkBgI2mC-b"
      )
      .then(
        () => {
          showNotification("TRANSMISION DE DATOS EXITOSA. ENLACE ESTABLECIDO.", "success");
          form.current.reset();
        },
        (error) => {
          showNotification("ERROR DE CONEXION. REINTENTE TRANSMISION.", "error");
          console.log(error.text);
        }
      )
      .finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className="section-title">INICIAR_COMUNICACION</h2>
        <p className="text-green" style={{marginBottom: '2rem'}}>
          {">"} Ingrese sus datos para establecer enlace:
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="IDENTIFICACION (NOMBRE)"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="FRECUENCIA (EMAIL)"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="DATOS DEL MENSAJE..."
            rows="5"
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="btn" style={{marginTop: '1rem'}}>
            [ TRANSMITIR DATOS ]
          </button>
        </form>

        <div style={{marginTop: '3rem', display:'flex', justifyContent:'center', gap:'20px'}}>
           <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-purple" style={{fontSize: '1.2rem', textDecoration:'none'}}>[ GITHUB ]</a>
           <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple" style={{fontSize: '1.2rem', textDecoration:'none'}}>[ LINKEDIN ]</a>
        </div>
      </div>

      {notification.show && (
        <div className={`system-notification ${notification.type}`}>
          <div className="notif-header">
            <span>SYSTEM_MSG // {notification.type === 'success' ? '200 OK' : 'ERR_CONNECTION'}</span>
            <span>[ x ]</span>
          </div>
          <div className="notif-body">
            {notification.type === 'success' ? <span>✔</span> : <span>✖</span>}
            {notification.message}
          </div>
        </div>
      )}

    </section>
  );
}