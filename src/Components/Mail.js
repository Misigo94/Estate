import React, { useState } from "react";
import "../styles/Mail.css";
import FormImage from "../assets/img.jpg";

const Mail = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    phoneNumber: "",
  });

  const [valid, setValid] = useState(false);

  const handleFirst = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLast = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleLocation = (event) => {
    setValues({ ...values, location: event.target.value });
  };

  const handlePhoneNumber = (event) => {
    setValues({ ...values, phoneNumber: event.target.value });
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.location &&
      values.phoneNumber
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${FormImage})` }}
      ></div>

      <div className="rightSide">
        <h1>Send us mail</h1>

        {submitted && valid ? (
          <div className="success-name">Message sent successfully</div>
        ) : null}

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlfor="name">First name</label>
          <input
            onChange={handleFirst}
            type="text"
            placeholder="enter you first name"
            value={values.firstName}
          />
          {submitted && !values.firstName ? (
            <span>Please put in your first name</span>
          ) : null}

          <label htmlfor="name">Last name</label>
          <input
            onChange={handleLast}
            type="text"
            placeholder="enter you last name"
            value={values.lastName}
          />
          {submitted && !values.lastName ? (
            <span>Please put in your last name</span>
          ) : null}

          <label htmlfor="email">Email</label>
          <input
            onChange={handleEmail}
            type="email"
            placeholder="enter you email"
            value={values.email}
          />
          {submitted && !values.email ? (
            <span>Please put in your email</span>
          ) : null}

          <label htmlfor="location">Location</label>
          <input
            onChange={handleLocation}
            type="text"
            placeholder="enter your location"
            value={values.location}
          />
          {submitted && !values.location ? (
            <span>Please put in your location</span>
          ) : null}

          <label htmlfor="phone number">Phone number</label>
          <input
            onChange={handlePhoneNumber}
            type="text"
            placeholder="enter your phone number"
            value={values.phoneNumber}
          />
          {submitted && !values.phoneNumber ? (
            <span>Please put in your phone nmber</span>
          ) : null}
          <button type="submit">send message</button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
