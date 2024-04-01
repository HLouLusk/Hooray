// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMnugoDbEBbO2kl23_SLxrHGfeR38U5k0",
  authDomain: "hooray-64afd.firebaseapp.com",
  projectId: "hooray-64afd",
  storageBucket: "hooray-64afd.appspot.com",
  messagingSenderId: "515482849457",
  appId: "1:515482849457:web:7fc7aa9155c6aaf8c89290",
  measurementId: "G-WP681D77KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
