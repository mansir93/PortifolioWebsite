import React from "react";
import Contactoption  from "./Contactoption";
import Form from "./Form";


const Contactme = () => {
  
 

  return (
    <div className="contact-me-container" id="contactme">
      <h3 className="text-center">Contact Me</h3>
      <div className="divider">
        <hr />
      </div>
      <div className="contact-parent row">
        <Contactoption />
        <Form />

        


        

      </div>
    </div>
  );
                      }

export default Contactme;
