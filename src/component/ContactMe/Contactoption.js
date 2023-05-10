import React from "react";
import Typical from "react-typical";
import "./contactme.css";

const Contactoption = () => {
  return (
    <div className="col-lg-6">
      <div className="contact-me-message ">
        <h1>
          <Typical
            loop={Infinity}
            steps={["Get In Touch📧", 2000, "Get In Touch📧", 2000]}
          />
        </h1>
        <div className="colz-icons">
          <a
            href="https://web.facebook.com/mansir.forgetit.1"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mansiraziz93@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a
            href="https://www.instagram.com/mansir_aziz/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/mansir_aziz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://github.com/mansir93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mansir-abdul-aziz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactoption;
