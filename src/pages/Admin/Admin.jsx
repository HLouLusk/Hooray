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

const Admin = () => {
  const navigate = useNavigate();
  // login flow
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // !change use state above for editing
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // rendering articles
  const postsCollectionRef = collection(db, "posts");
  const [postList, setPostList] = useState([]);
  const [searchText, setSearchText] = useState("");
  // previewing articles
  const { id } = useParams();
  const [initialTitle, setInitialTitle] = useState("");
  const [initialText, setInitialText] = useState("");
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
      setPostList((prev) => sortedData);
      return sortedData;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const navigateToFirstArticle = () => {
    if (postList.length === 0) {
      navigate("/~admin/");
    } else {
      navigate(`/~admin/${postList[0].id}`);
    }
  };

  const getArticleById = async (articleId) => {
    try {
      console.log(articleId);
      const docRef = doc(postsCollectionRef, articleId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const article = docSnap.data();
        setInitialTitle(article.title);
        setInitialText(article.text);

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
    setInitialTitle("");
    setInitialText("");
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
    setTitle(initialTitle);
    setText(initialText);
    setIsEditing(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteArticleById(id);
    setIsEditing(false);
    await getArticles();
    navigateToFirstArticle();
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await saveArticle(id);
    setIsEditing(false);
    const articles = await getArticles();
    if (!id) navigate(`/~admin/${articles[0].id}`);
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
      {!isLoggedIn ? (
        <section className="login-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email-address">Email address</label>
              <input
                className="login__input"
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="login__input"
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
              <button className="btn-login" onClick={onLogin}>
                Login
              </button>
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
                published={post.published}
                id={post.id}
                callback={() => setIsEditing(false)}
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
                  {id && <button onClick={handleDelete}>Delete</button>}
                  <button onClick={toggleCreateUI}>Create</button>
                </>
              )}
            </section>
            <div className="preview__content">
              <input
                className={`preview__title ${
                  isEditing && "preview__title--editing"
                }`}
                placeholder="Title..."
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                value={title}
                disabled={!isEditing}
              />

              <textarea
                className={`preview__text ${
                  isEditing && "preview__text--editing"
                }`}
                placeholder="Text..."
                onChange={(event) => {
                  setText(event.target.value);
                }}
                value={text}
                disabled={!isEditing}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Admin;
