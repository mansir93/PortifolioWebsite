import React from "react";
import Typical from "react-typical";

import "./profile.css";

const Home = () => {
  return (
    <>
      <div className="profile-container" id="home">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
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
                {/* <a href='#'>
                       <i className='fa fa-youtube'></i>  
                    </a> */}
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

            <div className="profile-details-name">
              <span className="primary-text">
                Hello, I'm <span className="highlighted-text">Mansir</span> Abdul Aziz
              </span>
            </div>

            <div className="profile-details-role">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Forgetti Dev",
                    2000,
                    "Front-end Dev",
                    2000,
                    "React Dev",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-name-tagline">
                I develop Awesome web pages
              </span>
            </div>

            <div className="profile-options">
              <a href="#contactme" className="btn hire-me">
                Hire Me
              </a>

              <a
                className="btn download-cv"
                href="mansir_cv.pdf"
                download="Mansir Abdul Aziz"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
