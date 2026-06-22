import { experiences } from '../../data/data';
import './experience.css';

function Experience() {
  return (
    <section id='experience' className="section container">

      <p className="section-subtitle">What I have done so far</p>
      <h2 className="section-title">Work Experience</h2>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={`${exp.role}-${exp.company}`} className="timeline-item">

            <div className="timeline-content card">
              <h3>{exp.role}</h3>
              <p className="company">
                {exp.company} | {exp.duration}
              </p>

              <ul>
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Experience;
