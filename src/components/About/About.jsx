import { services } from '../../data/data';
import './about.css';

function About() {
  return (
    <section id='about' className="section container">
      
      <p className="section-subtitle">Introduction</p>
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        I'm a Computer Science graduate and full-stack developer with 8+ months
        of production experience in Django, React.js, REST API development, and
        database-driven web applications. I have delivered scalable projects
        across multi-vendor platforms, academic management systems, and
        blockchain-secured voting.
      </p>

      <div className="grid about-grid">
        {services.map((s) => (
          <div key={s.title} className="card service-card">
            <img src={s.icon} alt={s.title} className="service-icon" />
            <h3>{s.title}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default About;
