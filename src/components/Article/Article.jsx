import { useNavigate } from "react-router-dom";
import "./Article.scss";

const Article = ({ title, text, published, id, callback }) => {
  const navigate = useNavigate();

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  const handleClick = () => {
    navigate(`/~admin/${id}`);
    callback();
  };

  return (
    <section
      className="post"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="post__header">
        <h2>{truncateText(title, 25)}</h2>
      </div>
      <div className="post__body">{truncateText(text, 125)}</div>
      <h4>{published}</h4>
    </section>
  );
};

export default Article;
