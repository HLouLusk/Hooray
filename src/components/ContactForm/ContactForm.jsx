import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState([0, 5000]);
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBudgetChange = (value) => {
    setBudget(value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Budget:", budget);
    // Reset form fields
    setName("");
    setEmail("");
    setBudget(0);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="section__title">Reach Out</h2>
      <input
        className="contact-input"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Your Name"
        required
      />
      <input
        className="contact-input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Your Email"
        required
      />
      <div className="budget-slider">
        <label htmlFor="budget">
          Budget: ${budget[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </label>
        <RangeSlider
          className="single-thumb"
          max={50000}
          step={5000}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
          value={budget}
          onInput={handleBudgetChange}
        />
      </div>
      <input
        className="contact-input"
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Tell us about your project"
        required
      />
      <button className="call-to-action" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
