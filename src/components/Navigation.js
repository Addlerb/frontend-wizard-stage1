import React from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <ul className="nav-list">
        <li>
          <button
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
            onClick={() => setCurrentPage("home")}
            aria-current={currentPage === "home" ? "page" : undefined}
            data-testid="nav-home"
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            onClick={() => setCurrentPage("about")}
            aria-current={currentPage === "about" ? "page" : undefined}
            data-testid="nav-about"
          >
            About Me
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${currentPage === "contact" ? "active" : ""}`}
            onClick={() => setCurrentPage("contact")}
            aria-current={currentPage === "contact" ? "page" : undefined}
            data-testid="nav-contact"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
