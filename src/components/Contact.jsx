function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="text-gray-300 mb-6">¡Hablemos! Podés escribirme por mail o conectar en mis redes.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:tuemail@gmail.com" className="text-indigo-400 hover:underline">Email</a>
        <a href="https://github.com/tuusuario" target="_blank" className="text-indigo-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" className="text-indigo-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
