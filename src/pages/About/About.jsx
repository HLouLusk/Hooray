import "./About.scss";
import Eric from "../../assets/images/Eric-photo.png";
import Bill from "../../assets/images/Bill-photo.png";
import Louise from "../../assets/images/louiselusk.jpg";
import { MEMBERS } from "../../assets/copy/home";
import ContactForm from "../../components/ContactForm/ContactForm";
import { ReactComponent as Balloon } from "../../assets/icons/Balloon.svg";

const About = () => {
  return (
    <div className="about">
      <section className="hero hero--beige">
        <div className="hero__image-container">
          <Balloon className="hero__image" />
        </div>
        <div className="hero__copy">
          <h1 className="hero__title">Our Journey</h1>
          <p className="hero__description">
            Our story isn't about reinventing the wheel but about returning to a
            model that values growth, mentorship, and opportunity for all. Our
            goal is not to diverge from tradition but to preserve the ethos of
            accessibility and learning that seems to have been eclipsed in
            today's job market.{" "}
          </p>
        </div>
        <div class="custom-shape-divider-bottom-1711922808">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
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
          <img className="biography__image" src={Bill} />
        </div>
        <div className="biography__text">
          <h2 className="biography__name">{MEMBERS[1].name}</h2>
          <h4 className="biography__role">{MEMBERS[1].role}</h4>
          <p className="biography__description">{MEMBERS[1].description}</p>
        </div>
      </article>
      <section className="copy-section">
        <p className="hero__description">
          As University of British Columbia alumni with a rich background in
          Mathematics, Computer Science, Psychology, and Economics, we embarked
          on our careers in an era that welcomed fresh graduates with open arms.
          This foundation allowed us to ascend through the ranks, from eager new
          developers to seasoned leaders in managerial positions. Reflecting on
          our journey over the past decade, we've witnessed a shifting
          landscape—one that increasingly favors senior expertise at the expense
          of nurturing new talent.
        </p>
        <p className="hero__description">
          In founding Hooray!, we set out to challenge this prevailing trend,
          driven by a commitment to offer the supportive, opportunity-rich
          environment that was instrumental in our own development.
        </p>
      </section>

      <article className="biography">
        <div className="biography__mobile-image-banner">
          <img className="biography__image" src={Louise} />
        </div>
        <div className="biography__text">
          <h2 className="biography__name">{MEMBERS[2].name}</h2>
          <h4 className="biography__role">{MEMBERS[2].role}</h4>
          <p className="biography__description">{MEMBERS[2].description}</p>
        </div>
      </article>
      <section className="info-section">
        <p className="hero__description">
          Decades of Dedication. With over 15 years in the industry and more
          than a dozen enterprise applications under our belt, our team embodies
          excellence and reliability. Our journey is marked by countless
          challenges turned into opportunities, guiding businesses in Vancouver
          and beyond to expand their digital horizons. Our expertise is not just
          in coding but in crafting solutions that stand the test of time.
        </p>
        <p className="hero__description">
          From Vancouver, For the World. Hooray! is proudly local, with roots
          deeply embedded in the vibrant city of Vancouver. Our mission extends
          beyond creating software; it's about building community. We're on a
          quest to partner with local businesses, helping them to harness the
          power of digital innovation. Together, we're not just growing
          businesses; we're elevating the local tech scene to a global stage.
          Join us on our journey. Let's create something remarkable together.
        </p>
      </section>
      <section className="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default About;
