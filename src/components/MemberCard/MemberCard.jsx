import "./MemberCard.scss";

const MemberCard = ({ name, role, image }) => {
  return (
    <article className="member">
      <img className="member__image" src={image}></img>
      <div className="member__info">
        <h2 className="member__name">{name}</h2>
        <p className="member__role">{role}</p>
      </div>
    </article>
  );
};

export default MemberCard;
