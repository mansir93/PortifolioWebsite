import React, { useState } from "react";

import { validateEmail } from "../../utils";
import "./contactme.css";

const Form = () => {
  const [Name, Setname] = useState("");
  const [Email, Setemail] = useState("");
  const [Message, Setmessage] = useState("");
  const [status, setStatus] = useState("Submit");

  const getIsFormValid = () => {
    return Name && validateEmail(Email) && Message;
  };

  const clearform = () => {
    Setname("");
    Setemail("");
    Setmessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    clearform();
  };

  return (
    <div className=" col-lg-6">
      <div className="contact-me-form">
        <form
          method="post"
          onSubmit={handleSubmit}
          id="contact-me"
          encType="multipart/form-data"
        >
          <div className="card border-primary">
            <div className="card-header p-0">
              <div className="bg-info text-white text-center py-2">
                <h4>Contact Me</h4>
                <p>Let's Stay inTouch</p>
              </div>
            </div>
            <div className="card-body">
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={Name}
                    onChange={(e) => {
                      Setname(e.target.value);
                    }}
                    placeholder="Name"
                  />
               
              </div>

              <div className="form-group">
                
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={Email}
                    onChange={(e) => {
                      Setemail(e.target.value);
                    }}
                    placeholder="Email: example@gmail.com"
                  />
                
              </div>

              <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    value={Message}
                    onChange={(e) => {
                      Setmessage(e.target.value);
                    }}
                    placeholder="Your message ..."
                  ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block rounded-0 py-2"
                  disabled={!getIsFormValid()}
                >
                  {status}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
