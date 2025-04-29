import React from 'react';
import './App.css';

// Hero Section
function Hero() {
  return (
    <section className="hero">
    <div className="falling-leaves">
      <img src="/shan.png" className="leaf leaf1" alt="leaf" />
      <img src="/tinapay.png" className="leaf leaf2" alt="leaf" />
      <img src="/ron.png" className="leaf leaf3" alt="leaf" />
      <img src="/jerome.png" className="leaf leaf4" alt="leaf" />
      <img src="/kinerz.png" className="leaf leaf5" alt="leaf" />
      <img src="/ejie.png" className="leaf leaf6" alt="leaf" />
      <img src="/newbie.png" className="leaf leaf7" alt="leaf" />
    </div>
    <h1>Zup, It's <span>Ralph Richmond Amarillo</span></h1>
    <p>A future Editor | Designer | Project Manager</p>
    <a href="#hobbies" className="button">My Portfolio</a>
  </section>
);
}
// About Section
function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p> I am a 20-year-old student at Dalubhasaan ng Lungsod ng Lucena, currently living in Lucena City. I prefer Coke—the original one, not the diet version. I love editing pictures that my friends find funny because I enjoy making fun of them.  </p>
    </section>
  );
}

//my works talaga 'to
function Hobbies() {
  const hobbies = [
    { name: 'Actings', description: 'Kasabayan ko si padre damaso dating mag-inom ng alfonso sa tabing ilog kung san namin tinapon ang bangkay ni Don Rafael Ibarra.', image: 'pic3.jpg' },
    { name: 'Web Design', description: 'I just love editing video and website that involve myself.', image: 'portfolio.PNG' },
    { name: 'Dancer', description: 'Naka duet ko na dating si Enrique Hills sa may Quiapo and after non nawala yung relo ko.', image: 'pic4.jpg' },
  ];

  return (
    <section className="hobbies" id="hobbies">
      <h2>My Works</h2>
      <div className="grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="card">
            <img src={hobby.image} alt={hobby.name} className="hobby-image" />
            <h3>{hobby.name}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Here</h2>
      <p>Feel free to Contact me whenever you want you can reach out here!</p>
      <a href="mailto:asherr707@gmail.com" className="contactButton">Click here</a>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Kinerz | All Rights Reserved ko na yung isa jan lord ha</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Hero />
      <About />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;