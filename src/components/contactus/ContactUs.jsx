import React from "react";
import "./ContactUs.css";
import { FormValidation } from "./FormValidation";
import { PhoneNumber } from "./PhoneNumber";

export const ContactUs = () => {
  return (
    <div className="contact" id="contact">
      <h1 >Կապ</h1>
      <div className="contact-all">
        <div className="contact-touch">
          {/* <h2>Կարող Եք Կապ Հաստատել</h2> */}
          {/* <div className="adress">
            <div>
              <p>ADRESS:</p>
              <a href="#">212 Moore Ave, Brooklyn, NY, United States</a>
            </div>
          </div> */}
          <div className="phones">
            <div>
              <p>Հեռախոս:</p>
              <a href="tell:+374-55-47-56-56">+(374)55-47-56-56</a>
            </div>
          </div>
          <div className="mails">
            <div>
              <p>E-mails:</p>
              <a href="#">universal.programming.llc@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contact-contact">
          {/* <h2>Contact Form</h2> */}
          <FormValidation />
        </div>
      </div>
    </div>
  );
};
