import { SERVICES } from "../../assets/copy/home";
import ContactForm from "../../components/ContactForm/ContactForm";
import { scrollToSection } from "../../helpers/scrollToSection";
import { ReactComponent as Connection } from "../../assets/icons/Connection.svg";

const Services = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__image-container">
          <Connection className="hero__image" />
        </div>
        <div className="hero__copy">
          <h1 className="hero__title">Our Services</h1>
          <p className="hero__description">
            We offer compehensive development plans for web and mobile app
            development, as well as fast and efficient staff augmentation.
          </p>
          <a
            className="call-to-action"
            href={"#contact-form"}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact-form");
            }}
          >
            Book A Consultation
          </a>
        </div>
      </section>
      {SERVICES.map((service) => (
        <section className="info-section">
          <h1>{service.title}</h1>
          <p>{service.detailedText}</p>
        </section>
      ))}
      <ContactForm />
    </>
  );
};

export default Services;
