import './App.css';
import backgroundLogo from './images/chatberry-logo.png';
function App() {
  
  return (
    <div className="App">
      <div className="sticky-cta" style={{ marginTop: '1rem' }}>
        <a href="#contact" className="cta-button">Solicitar una Demo Gratis</a>
      </div>

      <header className="hero">
        <img src={backgroundLogo} alt="ChatberryAI Logo" />
        <div className="overlay">
          <p className="tagline">Agentes de IA Modernos para Voz y Mensajería</p>
        </div>
      </header>

      <div className="cta-below-hero">
        <a href="#contact" className="cta-button">Obtener una Demo</a>
      </div>

      <section className="features">
        <h2>Nuestros Productos</h2>
        <div className="feature-grid responsive-grid">
          <div>
            <h3>Agentes de Voz con IA</h3>
            <p>Automatiza el soporte telefónico, maneja grandes volúmenes de llamadas y ofrece conversaciones naturales con IA de voz.</p>
          </div>
          <div>
            <h3>Agentes de Chat y Mensajería con IA</h3>
            <p>Despliega chatbots con IA en web, WhatsApp y Messenger para atender a tus clientes 24/7 con respuestas inteligentes.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Cómo Funciona</h2>
        <ol>
          <li>Conectamos con tus canales de comunicación (teléfono, chat o ambos).</li>
          <li>Entrenamos la IA con tus datos y escenarios de clientes.</li>
          <li>Lanzamos, monitoreamos y mejoramos el rendimiento de manera continua.</li>
        </ol>
      </section>

      <section className="trust">
        <h2>Empresas que Confían</h2>
        <div className="logo-strip responsive-logo-strip">
          <img src="/images/client1.png" alt="Cliente 1" />
          <img src="/images/client2.png" alt="Cliente 2" />
          <img src="/images/client3.png" alt="Cliente 3" />
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contáctanos</h2>
        <div>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
          <button>Enviar</button>
        </div>
      </section>

      <footer>
      <p>© 2025 ChatberryAI. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://linkedin.com/company/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
    </div>
  );
}

export default App;