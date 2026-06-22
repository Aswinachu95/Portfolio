import { education } from "../../data/data";
import "./education.css";

function Education() {
  return (
    <section id="education" className="section container">

      <p className="section-subtitle">Academic background</p>
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        {education.map((item) => (
          <div key={`${item.course}-${item.institution}`} className="timeline-item">

            <div className="timeline-content card">
              <h3>{item.course}</h3>
              <p className="company">
                {item.institution} | {item.duration}
              </p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Education;
