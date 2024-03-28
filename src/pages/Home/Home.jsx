import "./Home.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import MemberCard from "../../components/MemberCard/MemberCard.jsx";

import BILL from "../../assets/images/Bill-photo.png";
import ERIC from "../../assets/images/Eric-photo.png";
import LOUISE from "../../assets/images/louiselusk.jpg";
import {
  HERO_TITLE,
  HERO_TEXT,
  SERVICES,
  MEMBERS,
} from "../../assets/copy/home.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">{HERO_TITLE}</h1>
        <p className="hero__description">{HERO_TEXT}</p>
        <button className="call-to-action">Get In Touch</button>
      </section>
      <section className="services">
        <h2 className="section__title">Services We Provide</h2>
        <div className="services__card-container">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <button className="call-to-action">See More</button>
      </section>
      <section className="members">
        <h2 className="section__title">Meet Our Team</h2>
        <div className="members__card-container">
          <MemberCard image={ERIC} {...MEMBERS[0]} />
          <MemberCard image={BILL} {...MEMBERS[1]} />
          <MemberCard image={LOUISE} {...MEMBERS[2]} />
        </div>
        <button className="call-to-action">Get To Know Us</button>
      </section>
      <ContactForm />
    </>
  );
};

export default Home;
