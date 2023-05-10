import React from "react";

import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container container" id="resume">
      <h3>Resume</h3>
      <div className="divider">
        <hr />
      </div>
      <div className="row">
        <div className="resume-logo col"></div>
        <div className="resume-component-name col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              data-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Education
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              data-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Coding skills
            </button>
            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              data-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              projects
            </button>
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              data-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Interest
            </button>
          </div>
        </div>

        <div className="col-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    University of Professional Studies, Accra
                  </div>
                  BSc. Information Technology Management
                </div>
                <span className="badge bg-primary rounded-pill">
                  2021 - 2025
                </span>
              </div>

              <div className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">IPMC College of Technology</div>
                  Certificate in Software Programming
                </div>
                <span className="badge bg-primary rounded-pill">
                  2020 - 2021
                </span>
              </div>

              <div className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">High School</div>
                  Sakafia Islamic Senior High School
                </div>
                <span className="badge bg-primary rounded-pill">
                  2017 - 2020
                </span>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              Programming skills
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              projects
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
               I like to do researching.  I Love learning new skills.  I Love
              to go on Tour.  I enjoy music.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
