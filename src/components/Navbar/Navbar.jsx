import { useEffect, useState } from "react";
import "./navbar.css";

function Navbar({ toggleTheme, theme }) {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    if (!("IntersectionObserver" in window)) {
      const handleScroll = () => {
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            currentSection = section.getAttribute("id");
          }
        });

        if (currentSection) {
          setActive(currentSection);
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection?.target.id) {
          setActive(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <h2 className="logo">Aswin K</h2>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={toggleMenu}
          onKeyDown={handleMenuKeyDown}
          role="button"
          tabIndex="0"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className={menuOpen ? "bar active" : "bar"}></span>
          <span className={menuOpen ? "bar active" : "bar"}></span>
          <span className={menuOpen ? "bar active" : "bar"}></span>
        </div>

        {/* Nav Links */}
        <ul id="primary-navigation" className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={active === "experience" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#education"
              className={active === "education" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Theme Button */}
        <button
          className="theme-btn"
          onClick={toggleTheme}
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
