import "./skills.css";
import { skills } from "../../data/data";

const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Cloud/DevOps",
  "AI Tools",
];

function Skills() {
  return (
    <section id="skills" className="section container">
      <p className="section-subtitle">My technical skills</p>
      <h2 className="section-title">Skills</h2>

      <div className="skills-category-list">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category);

          if (!categorySkills.length) {
            return null;
          }

          return (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>

              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-card new-style">
                    <div className="icon-box">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={skill.invert ? "invert-icon" : ""}
                      />
                    </div>

                    <div className="skill-text">
                      <p className="skill-title">{skill.name}</p>
                      <span className="skill-type">
                        {skill.type || "Technology"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
