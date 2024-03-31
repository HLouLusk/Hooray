import { Link } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";

const Portfolio = () => {
  return (
    <>
      <section className="info-section">
        <h1>Be Our First Client!</h1>
        <h3>And receive up to $2500 off your project estimate.</h3>
        <p>
          Though we have heaps of experience working both together and
          independently, Hooray! is a blank slate in terms of portfolio work. If
          you would like to see our individual projects or work history, please
          refer to our{" "}
          <Link>
            <strong>About Us</strong>
          </Link>{" "}
          page.
        </p>
      </section>
      <ContactForm />
    </>
  );
};

export default Portfolio;
