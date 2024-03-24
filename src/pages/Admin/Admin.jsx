import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import "./Admin.scss";
import Article from "../../components/Article/Article";
import { useNavigate, useParams } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  // login flow
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // rendering articles
  const postsCollectionRef = collection(db, "posts");
  const [postList, setPostList] = useState([]);
  const [searchText, setSearchText] = useState("");
  // previewing articles
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const authResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (authResponse) {
        setIsLoggedIn(true);
        navigateToFirstArticle();
      }
    } catch (error) {
      // todo create proper error message if unable to sign in
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

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
      setPostList(sortedData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const navigateToFirstArticle = () => {
    navigate(`/~admin/${postList[0].id}`);
  };

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

  const deleteArticleById = async (articleId) => {
    const docRef = doc(postsCollectionRef, articleId);
    setPostList((prev) => prev.filter((article) => article.id !== articleId));
    navigateToFirstArticle();
    await deleteDoc(docRef);
  };

  const saveArticle = async (articleId = null) => {
    const articleData = {
      title,
      text,
    };
    try {
      if (articleId) {
        // If articleId is provided, update the existing article
        await updateDoc(doc(postsCollectionRef, articleId), articleData);
        console.log("Article updated successfully!");
      } else {
        // If no articleId is provided, create a new article
        articleData.published = Date.now();
        const newDocRef = await addDoc(postsCollectionRef, articleData);
        console.log("New article created with ID: ", newDocRef.id);
      }
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  const toggleCreateUI = (e) => {
    e.preventDefault();
    navigate("/~admin");
    setTitle("");
    setText("");
    setIsEditing(true);
  };

  const toggleEditUI = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const toggleCancelUI = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteArticleById(id);
    setIsEditing(false);
    getArticles();
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveArticle(id);
    setIsEditing(false);
    getArticles();
  };

  // get articles for list
  useEffect(() => {
    getArticles();
  }, []);

  // populate article preview
  useEffect(() => {
    if (!id) return;
    getArticleById(id);
  }, [id]);

  // if we are NOT logged in then return a login component
  // if we ARE logged in then return the page content
  return (
    <>
      <main>
        {!isLoggedIn ? (
          <section>
            <p> Login </p>
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>
          </section>
        ) : (
          <div className="admin">
            <section className="article__list">
              {postList.map((post) => (
                <Article
                  title={post.title}
                  text={post.text}
                  publishDate={post.published}
                  id={post.id}
                />
              ))}
            </section>
            <section className="preview">
              <section className="preview__controls">
                {isEditing ? (
                  <>
                    <button onClick={toggleCancelUI}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                  </>
                ) : (
                  <>
                    {id && <button onClick={toggleEditUI}>Edit</button>}
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={toggleCreateUI}>Create</button>
                  </>
                )}
              </section>
              <div>Hello</div>
              <div>{title}</div>
              <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                  <label> Title:</label>
                  <input
                    placeholder="Title..."
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    value={title}
                  />
                </div>

                <div className="inputGp">
                  <label> Text:</label>
                  <input
                    placeholder="Text..."
                    onChange={(event) => {
                      setText(event.target.value);
                    }}
                    value={text}
                  />
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
};

export default AdminPage;
