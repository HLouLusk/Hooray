import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import emailjs from "@emailjs/browser";
import "react-range-slider-input/dist/style.css";

import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";

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
  const [showAlert, setShowAlert] = useState(false);
  const leadsCollectionRef = collection(db, "leads");

  const addLead = async () => {
    const leadData = {
      name,
      email,
      budget: budget[1],
      description,
      website,
      contacted: Date.now(),
    };
    try {
      const newDocRef = await addDoc(leadsCollectionRef, leadData);
    } catch (error) {
      console.error("Error saving lead:", error);
    }
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addLead();
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        { publicKey: process.env.REACT_APP_PUBLIC_KEY }
      );
      setName("");
      setEmail("");
      setBudget([0, 5000]);
      setDescription("");
      setWebsite("");
    } catch (error) {
      setShowAlert(true);
    }
  };

  useEffect(() => {
    if (!showAlert) return;

    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000); // Hide the alert after 10 seconds

    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      {showAlert && <h3>Oops! Something went wrong.</h3>}
      <h2 className="section__title">{callToAction}</h2>
      <div>
        <label>
          Name <span className="contact-label--required">*</span>
        </label>
        <input
          name="to_name"
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
          name="to_email"
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
          name="budget"
          className="single-thumb"
          max={20000}
          step={2000}
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
          name="description"
          className="contact-input contact-input--auto-resize"
          value={description}
          onChange={handleDescriptionChange}
          rows={1}
        />
      </div>
      <div>
        <label>Website</label>
        <input
          name="website"
          className="contact-input"
          type="text"
          value={website}
          onChange={handleWebsiteChange}
        />
      </div>
      {showAlert && <p>Oops! Something went wrong.</p>}
      <button className="call-to-action" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
