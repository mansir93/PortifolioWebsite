import React from "react";
import Shape from "../Shape/Shape";

import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container" id="testimonial">
      <h3>Testimonial</h3>
      
      <div className="divider">
        <hr />
      </div>
      <div className="testimonial-background">
        <div className="home-overlay">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="face front-face">
                  <img src={require("../../Assets/Testimonial/client-1.jpg")}
                            alt="" className="profile" />
                  <div className="pt-3 text-uppercase name">
                    YAKUBU ABDUL MUTALLIB
                  </div>
                  <div className="designation">Web Developer</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    I made bacck the purchase price in just 48 hours! Thank you
                    for making it pain less, pleasant. The service was
                    execellent. I will refer everyone I know.
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="face front-face">
                <img src={require("../../Assets/Testimonial/client-2.jpeg")}
                            alt="" className="profile" />
                  <div className="pt-3 text-uppercase name">SIEH FRANCIS</div>
                  <div className="designation">Full Stack Developer</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    Really good, you have saved our business! I made bacck the
                    purchase price in just 48 hours! man, this thing is getting
                    better and better as I learn more about it.
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="face front-face">
                <img src={require("../../Assets/Testimonial/client-3.jpg")}
                            alt="" className="profile" />
                  <div className="pt-3 text-uppercase name">BAFFOUR AWUAH FELIX</div>
                  <div className="designation">Finance Director</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    Account keeper is the most valuable business research we
                    have EVER purchased. Without electrician, we would ahave
                    gone bankrupt by now.
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
          </div>
          <Shape />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
