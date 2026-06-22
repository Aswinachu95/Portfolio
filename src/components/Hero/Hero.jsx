import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-left">
          {/* Accent line */}
          <div className="hero-accent">
            <div className="circle" />
            <div className="line" />
          </div>

          {/* Text */}
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Aswin K</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p>
              Full-stack developer with production experience in Django, React.js,
              REST API development, RBAC authentication, and scalable web applications.
            </p>

            <a href="/Aswin K Resume.pdf" download className="resume-btn">
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
