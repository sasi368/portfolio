import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import { links } from "../../config";

export function Header() {
  const [isActive, setActive] = useState(false);
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }
  function closeMenu() {
    setActive(false);
  }
  return (
    <Container className="header-fixed">
      <Router>
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>

          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>

          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>

          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>

          <a
            href={links.tech.resumeLink}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
