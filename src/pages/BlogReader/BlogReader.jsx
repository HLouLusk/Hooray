import { collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
import "./BlogReader.scss";

const BlogReader = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const postsCollectionRef = collection(db, "posts");
  const { id } = useParams();

  const getArticleById = async (articleId) => {
    try {
      console.log(articleId);
      const docRef = doc(postsCollectionRef, articleId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const article = docSnap.data();
        setTitle(article.title);
        setText(article.text);
      } else {
        console.log("No such document exists!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  useEffect(() => {
    getArticleById(id);
  }, []);

  return (
    <section className="main-content">
      <h1 className="blog-title">{title}</h1>
      <p className="blog-text">{text}</p>
    </section>
  );
};

export default BlogReader;
