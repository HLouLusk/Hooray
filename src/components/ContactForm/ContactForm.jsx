import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./ContactForm.scss";
import { CALLSTOACTION } from "../../assets/copy/contactForm";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState([0, 5000]);
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [callToAction, setCallToAction] = useState(
    CALLSTOACTION[Math.floor(Math.random() * CALLSTOACTION.length)]
  );

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
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Budget:", budget);
    setName("");
    setEmail("");
    setBudget(0);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="section__title">{callToAction}</h2>
      <div>
        <label>
          Name <span className="contact-label--required">*</span>
        </label>
        <input
          className="contact-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label>
          Email <span className="contact-label--required">*</span>
        </label>
        <input
          className="contact-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

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
      <div>
        <label>
          Project Description <span className="contact-label--required">*</span>
        </label>
        <textarea
          className="contact-input contact-input--auto-resize"
          value={description}
          onChange={handleDescriptionChange}
          rows={1}
        />
      </div>
      <div>
        <label>Website</label>
        <input
          className="contact-input"
          type="text"
          value={website}
          onChange={handleWebsiteChange}
          required
        />
      </div>
      <button className="call-to-action" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
