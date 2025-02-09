import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">R.K</h1>
          <ul className="nav-items">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Rupesh Kanna Kaviyasree Narayanan</h1>
          <h2>Embedded Systems & Robotics Engineer</h2>
          <div className="circuit-mask"></div>
        </div>
      </section>

      {/* Temporary Sections */}
      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <h3>Automatic Battery Tester/Charger</h3>
          <p>Designed an automated battery testing system with AC impedance analysis...</p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">STM32 Embedded C</div>
          <div className="skill-item">FPGA Development</div>
          <div className="skill-item">ROS2</div>
          <div className="skill-item">PCB Design</div>
        </div>
      </section>

      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>© 2024 Rupesh Kanna. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;