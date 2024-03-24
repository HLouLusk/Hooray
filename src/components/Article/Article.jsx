import { useNavigate } from "react-router-dom";

const Article = ({ title, text, published, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/~admin/${id}`);
  };

  return (
    <section
      className="post"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="post__header">
        <h2>{title}</h2>
      </div>
      <div className="post__body">{text}</div>
      <h4>{published}</h4>
    </section>
  );
};

export default Article;
