import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PhoneNumber } from "./PhoneNumber";
import "./ContactUs.css";
import Validation from "./Validation";

export const FormValidation = () => {
  const form = useRef();

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
    user_phone:'',
    bool:true,
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);

  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    emailjs
      .sendForm(
        "service_fzesjgv",
        "template_qtjr7xg",
        form.current,
        "06GYnt1X8MqmrpdHz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="one">
        <div className="name-input">
        <input
          type="text"
          name="user_name"
          placeholder="Youre Name"
          className="name"
          onChange={handleInput}
          onFocus={(e) => {
          }}
        />
        {errors.user_name && <span className="error">{errors.user_name}</span>}
        </div>
        <PhoneNumber name={"user_phone"}/>
      </div>
      <div className="two">
        <textarea
          name="user_message"
          placeholder="Your Message"
          onChange={handleInput}
        />
        {errors.user_message && <p className="error">{errors.user_message}</p>}
      </div>

      <div className="three">
        <input
          type="email"
          name="user_email"
          placeholder="E-mail"
          className="email"
          onChange={handleInput}
        />
        {errors.user_email && <p className="error">{errors.user_email}</p>}

        {/* <input className="button" type="submit" value="Send message"  /> */}
        <button className="contact-button" type="submit" disabled={values.bool}>Send Message</button>
      </div>
    </form>
  );
};
