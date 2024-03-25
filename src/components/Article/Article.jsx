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

  const formatDate = (timestampInMs) => {
    const date = new Date(timestampInMs);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Pad single digit day and month with leading zeros if needed
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    // Return formatted date string in day/month/year format
    return `${formattedDay}/${formattedMonth}/${year}`;
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
      <div className="post__body">
        <p>{truncateText(text, 125)}</p>
        <p className="timestamp">{published ? formatDate(published) : ""}</p>
      </div>
    </section>
  );
};

export default Article;
