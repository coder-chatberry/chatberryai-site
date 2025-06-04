
import './App.css';
import logo from './images/chatberry-logo.jpeg';

function App() {
  return (
    <div className="App">
      <header className="hero">
      <img src={logo} alt="ChatberryAI Logo" className="logo" />
        <h1>ChatberryAI</h1>
        <p className="tagline">Chat Smarter. Grow Faster.</p>
        <a href="#contact" className="cta-button">Contact Us</a>
      </header>

      <section className="features">
        <h2>What We Do</h2>
        <div className="feature-grid">
          <div><h3>Automate</h3><p>Streamline customer service with AI-powered bots.</p></div>
          <div><h3>Support</h3><p>Improve customer satisfaction with 24/7 responses.</p></div>
          <div><h3>Personalize</h3><p>Deliver human-like, tailored conversations.</p></div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Integrate with your channels</li>
          <li>Train the AI on your data</li>
          <li>Launch smart, natural conversations</li>
        </ol>
      </section>

      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>© 2025 ChatberryAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
