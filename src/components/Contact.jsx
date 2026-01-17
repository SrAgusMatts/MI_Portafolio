import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from './LanguageContext';

export default function Contact() {
  const { t, data } = useLanguage();
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
    btn.innerText = t.contact.sending;
    btn.disabled = true;

    emailjs
      .sendForm("service_6fbv4ej", "template_5tr4kvd", form.current, "koaAhTMgkBgI2mC-b")
      .then(
        () => {
          showNotification("TRANSMISION EXITOSA / SUCCESS", "success");
          form.current.reset();
        },
        (error) => {
          showNotification("ERROR / FAILURE", "error");
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
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="text-green" style={{marginBottom: '2rem'}}>
          {t.contact.subtitle}
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder={t.contact.name_ph} required className="contact-input" />
          <input type="email" name="user_email" placeholder={t.contact.email_ph} required className="contact-input" />
          <textarea name="message" placeholder={t.contact.msg_ph} rows="5" required className="contact-textarea"></textarea>
          <button type="submit" className="btn" style={{marginTop: '1rem'}}>
            {t.contact.send_btn}
          </button>
        </form>

        <div style={{marginTop: '3rem', display:'flex', justifyContent:'center', gap:'20px'}}>
           <a href={data.profile.github} target="_blank" rel="noopener noreferrer" className="text-purple" style={{fontSize: '1.2rem', textDecoration:'none'}}>[ GITHUB ]</a>
           <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple" style={{fontSize: '1.2rem', textDecoration:'none'}}>[ LINKEDIN ]</a>
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