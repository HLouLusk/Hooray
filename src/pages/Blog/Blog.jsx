import { collection, getDocs } from "firebase/firestore";
import Article from "../../components/Article/Article";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";

const Blog = () => {
  const postsCollectionRef = collection(db, "posts");
  const [postList, setPostList] = useState([]);

  const getArticles = async () => {
    try {
      const data = (await getDocs(postsCollectionRef)).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const sortedData = data.sort((a, b) => {
        // Compare publishDate fields and return appropriate value
        if (a.published < b.published) return 1; // b comes before a
        if (a.published > b.published) return -1; // a comes before b
        return 0; // dates are equal
      });
      setPostList((prev) => sortedData);
      return sortedData;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // get articles for list
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <section className="main-content article__list">
        {postList.map((post, index) => (
          <Article
            key={"article" + index}
            truncated={false}
            title={post.title}
            text={post.text}
            published={post.published}
            id={post.id}
            baseURL="blog"
            // callback={() => setIsEditing(false)}
          />
        ))}
      </section>
    </>
  );
};

export default Blog;
