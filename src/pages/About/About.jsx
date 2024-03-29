import "./About.scss";
import Eric from "../../assets/images/Eric-photo.png";
import Bill from "../../assets/images/Bill-photo.png";
import Louise from "../../assets/images/louiselusk.jpg";
import { MEMBERS } from "../../assets/copy/home";
import ContactForm from "../../components/ContactForm/ContactForm";

const About = () => {
  return (
    <>
      <section className="info-section">
        <h1>Our Journey</h1>
        <p>
          Honoring Our Roots: Pioneering Growth Through Opportunity. Our story
          isn't about reinventing the wheel but about returning to a model that
          values growth, mentorship, and opportunity for all. As University of
          British Columbia alumni with a rich background in Mathematics,
          Computer Science, Psychology, and Economics, we embarked on our
          careers in an era that welcomed fresh graduates with open arms. This
          foundation allowed us to ascend through the ranks, from eager new
          developers to seasoned leaders in managerial positions. Reflecting on
          our journey over the past decade, we've witnessed a shifting
          landscape—one that increasingly favors senior expertise at the expense
          of nurturing new talent. In founding Hooray!, we set out to challenge
          this prevailing trend, driven by a commitment to offer the supportive,
          opportunity-rich environment that was instrumental in our own
          development. Our goal is not to diverge from tradition but to preserve
          the ethos of accessibility and learning that seems to have been
          eclipsed in today's job market.{" "}
        </p>
      </section>
      <article className="biography">
        <div className="biography__mobile-image-banner">
          <img className="biography__image" src={Eric} />
        </div>
        <div className="biography__text">
          <h2 className="biography__name">{MEMBERS[0].name}</h2>
          <h4 className="biography__role">{MEMBERS[0].role}</h4>
          <p className="biography__description">{MEMBERS[0].description}</p>
        </div>
      </article>
      <article className="biography biography--reversed">
        <div className="biography__mobile-image-banner">
          <img className="biography__image" src={Eric} />
        </div>
        <div className="biography__text">
          <h2 className="biography__name">{MEMBERS[0].name}</h2>
          <h4 className="biography__role">{MEMBERS[0].role}</h4>
          <p className="biography__description">{MEMBERS[0].description}</p>
        </div>
      </article>
      <section className="info-section">
        <h1>Our Expertise</h1>
        <p>
          Decades of Dedication. With over 15 years in the industry and more
          than a dozen enterprise applications under our belt, our team embodies
          excellence and reliability. Our journey is marked by countless
          challenges turned into opportunities, guiding businesses in Vancouver
          and beyond to expand their digital horizons. Our expertise is not just
          in coding but in crafting solutions that stand the test of time.
        </p>
      </section>
      <article className="biography">
        <div className="biography__mobile-image-banner">
          <img className="biography__image" src={Eric} />
        </div>
        <div className="biography__text">
          <h2 className="biography__name">{MEMBERS[0].name}</h2>
          <h4 className="biography__role">{MEMBERS[0].role}</h4>
          <p className="biography__description">{MEMBERS[0].description}</p>
        </div>
      </article>
      <section className="info-section">
        <h1>Work With Us</h1>
        <p>
          From Vancouver, For the World. Hooray! is proudly local, with roots
          deeply embedded in the vibrant city of Vancouver. Our mission extends
          beyond creating software; it's about building community. We're on a
          quest to partner with local businesses, helping them to harness the
          power of digital innovation. Together, we're not just growing
          businesses; we're elevating the local tech scene to a global stage.
          Join us on our journey. At Hooray!, we're more than a company; we're a
          family of innovators, dreamers, and builders dedicated to making a
          difference—one line of code at a time. Let's create something
          remarkable together.
        </p>
      </section>
      <ContactForm />
    </>
  );
};

export default About;
