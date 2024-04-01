import { useNavigate } from "react-router-dom";
import "./Article.scss";

const Article = ({
  truncated,
  title,
  text,
  published,
  id,
  baseURL,
  callback,
}) => {
  const navigate = useNavigate();

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  const handleClick = () => {
    navigate(`/${baseURL}/${id}`);
    callback && callback();
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
        <h2>{truncated ? truncateText(title, 25) : title}</h2>
      </div>
      <div className="post__body">
        <p>{truncated ? truncateText(text, 125) : truncateText(text, 500)}</p>
        <p className="timestamp">{published ? formatDate(published) : ""}</p>
      </div>
    </section>
  );
};

export default Article;
