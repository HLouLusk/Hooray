import "./ServiceCard.scss";

const ServiceBlobs = ({ title, text, technologies }) => {
  return (
    <article className="service">
      <h2 className="service__title">{title}</h2>
      <p className="service__text">{text}</p>
      <div className="service__tech-container">
        {technologies.map((tech) => (
          <div className="service__tech">
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ServiceBlobs;
