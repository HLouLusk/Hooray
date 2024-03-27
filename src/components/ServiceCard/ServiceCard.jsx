import "./ServiceCard.scss";

const ServiceBlobs = ({ title, text, technologies }) => {
  return (
    <div className="services-cards_container">
      <article className="cards-container__block">
        <div className="cards-container__titles">
          <h2>{title}</h2>
        </div>
        <p className="cards-container__description">{text}</p>
        <div className="service-provided_blob">
          {technologies.map((tech) => (
            <div className="service-blob_container">
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ServiceBlobs;
