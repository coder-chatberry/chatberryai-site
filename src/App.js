
import './App.css';
import logo from './images/chatberry-logo.png'; // Replace with your actual logo path

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0b0c2a', color: '#ffffff', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
      <header>
        <img src={logo} alt="ChatberryAI Logo" style={{ width: '120px', marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>ChatberryAI</h1>
        <p style={{ fontSize: '1.25rem', color: '#ff79c6' }}>Chat Smarter. Grow Faster.</p>
        <p style={{ maxWidth: '600px', margin: '2rem auto', fontSize: '1rem', lineHeight: '1.6', color: '#dddddd' }}>
          We help businesses modernize their customer service with intelligent conversational AI solutions.
          Boost engagement, automate support, and create a delightful experience — all with ChatberryAI.
        </p>
        <a href="mailto:contact@chatberryai.com" style={{ backgroundColor: '#ff79c6', color: '#0b0c2a', padding: '0.75rem 1.5rem', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none' }}>
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
