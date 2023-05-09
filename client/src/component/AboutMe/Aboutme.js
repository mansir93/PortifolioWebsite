import React from "react";

import "./aboutme.css";

export const Aboutme = () => {
  return (
    <div className="aboutme-container container" id="aboutme">
      <h3>About Me</h3>
      <p className="text-center">why choose me?</p>
      <div className="divider">
        <hr />
      </div>
      <div className="card">
        <div className="row">
          <div className="about-pic col-md-6">
            <img
              src={require("../../Assets/AboutMe/my-pic.jpg")}
              alt="Mansir Abdul Aziz"
            />
          </div>
          <div className="about-text col-md-6">
            <div className="card-body">
              <h5 className="card-title">My Highlights</h5>
              <p className="card-text">
                I am Mansir Abdul Aziz, a student at the University of
                Professional Studies Accra studying for a BSc in Information
                Technology Management.
                <br />
                <br /> As a frontend junior developer, I have a passion for
                building user-friendly web applications and a strong foundation
                in frontend technologies such as HTML, CSS, JavaScript, and
                React Js .
                <br />
                <br /> In my free time, I enjoy learning new development
                frameworks and tools, and working on personal projects to
                improve my skills. I am always looking for opportunities to grow
                and improve as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
