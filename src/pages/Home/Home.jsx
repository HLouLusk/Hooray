import "./Home.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () => {
  return (
    <>
      {" "}
      <section className="hero-banner">
        <div className="hero-banner__left">
          <h1>Elevate Your Business: Custom Web & Mobile Solutions</h1>
          <p className="hero-banner__description">
            Welcome to Hooray!—your Canadian tech ally. Led by seasoned web
            experts, we empower small and mid-sized businesses with tailor-made
            web and mobile solutions. Our mission? To launch your business goals
            into new heights with sleek, enduring software. Your success story
            starts here.
          </p>
          <button>Get In Touch</button>
        </div>
      </section>
      <section className="services-section">
        <h2 className="services-section_header">Services We Provide</h2>
        <div className="services-section__card-container">
          <ServiceCard
            title={"Mobile App Development"}
            text={
              "Simplify your customer's journey with our custom-built mobile apps. We make your app not just functional but a joy to use."
            }
            technologies={["Typescript", "Kotlin", "React Native", "Swift"]}
          />
          <ServiceCard
            title={"Web Development"}
            text={
              "Capture your audience's attention with our cutting-edge web designs. Your website is the front door to your business; we make sure it's unforgettable."
            }
            technologies={["NodeJS", "AWS", "Redux", "NextJS", "Express"]}
          />
          <ServiceCard
            title={"Database Design"}
            text={
              "Your data is gold. We ensure it's structured perfectly to serve your business, recommending the best solutions to meet your needs."
            }
            technologies={[
              "MySQL",
              "Mongo",
              "Firestore",
              "Cassandra",
              "GraphQL",
            ]}
          />
          <ServiceCard
            title={"Staff Augmentation"}
            text={
              "Need an extra hand? Our full-stack developers integrate seamlessly with your team, boosting productivity and accelerating your project timelines."
            }
            technologies={[
              "Quality Control",
              "Efficiency",
              "Cost-Saving",
              "Growth",
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
