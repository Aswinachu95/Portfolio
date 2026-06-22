import { projects } from '../../data/data';
import './project.css';
import { useState } from 'react';

function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (title) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <section id="projects" className="section container">

      <p className="section-subtitle">My work</p>
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((p) => {
          const isExpanded = expandedProjects[p.title];

          return (
            <div key={p.title} className="card project-card">

            <img src={p.image} alt={p.title} loading="lazy" decoding="async" />

            <h3>{p.title}</h3>
            <p className={isExpanded ? "project-description expanded" : "project-description"}>
              {p.description}
            </p>

            <button
              className="project-desc-toggle"
              type="button"
              onClick={() => toggleProject(p.title)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? "See Less" : "See More"}
            </button>

            {p.highlights?.length > 0 && (
              <ul className="project-highlights">
                {p.highlights.map((highlight) => (
                  <li key={`${p.title}-${highlight}`}>{highlight}</li>
                ))}
              </ul>
            )}

            <div className="tags">
              {p.techStack.map((tag) => (
                <span key={`${p.title}-${tag}`} className="tag">
                  #{tag}
                  </span>
                ))}
            </div>

            <div className="project-links">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

          </div>
          );
        })}
      </div>

    </section>
  );
}

export default Projects;
