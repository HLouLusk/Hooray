import { Link } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <section className="hero hero--extra-wavy">
        <div className="hero__image-container"></div>
        <div className="hero__copy">
          {" "}
          <h1 className="hero__title">Be Our First Client!</h1>
          <h3 className="hero__subtitle">
            And receive up to $2500 off your project estimate.
          </h3>
          <p className="hero__description">
            Though we have heaps of experience working both together and
            independently, Hooray! is a blank slate in terms of portfolio work.
            If you would like to see our individual projects or work history,
            please refer to our{" "}
            <Link className="about__link" to="/about">
              <strong>About Us</strong>
            </Link>{" "}
            page.
          </p>
        </div>

        <div class="custom-shape-divider-bottom-1711936897">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="contact-portfolio">
        {" "}
        <ContactForm />
      </section>
    </>
  );
};

export default Portfolio;
