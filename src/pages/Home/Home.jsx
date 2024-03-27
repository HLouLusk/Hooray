import "./Home.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { HERO_TITLE, HERO_TEXT, SERVICES } from "../../assets/copy/home.js";

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">{HERO_TITLE}</h1>
        <p className="hero__description">{HERO_TEXT}</p>
        <button className="hero__cta">Get In Touch</button>
      </section>
      <section className="services">
        <h2 className="services__title">Services We Provide</h2>
        <div className="services__card-container">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <section className="portfolio"></section>
      <section className="about"></section>
      <section className="contact-form"></section>
    </>
  );
};

export default Home;
