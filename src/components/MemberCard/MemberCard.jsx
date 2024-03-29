import "./MemberCard.scss";

const MemberCard = ({ name, role, image }) => {
  return (
    <article className="member">
      {/* Long-term idea (post-demo): 
        on hover, tech logos to represent the member's skillset expand 
        from behind the image and then orbit it */}
      <img className="member__image" src={image}></img>
      <div className="member__info">
        <h2 className="member__name">{name}</h2>
        <p className="member__role">{role}</p>
      </div>
    </article>
  );
};

export default MemberCard;
