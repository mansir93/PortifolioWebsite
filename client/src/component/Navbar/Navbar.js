import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container container-fluid">
      <nav
        className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            FORGETTI
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto mr-md-3">
              <li className="nav-item active">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#aboutme" className="nav-link">
                  AboutMe
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonial" className="nav-link">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a href="#contactme" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
