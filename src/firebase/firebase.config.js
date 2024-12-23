// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsQk6oPecCxNG00uMZu_5m2gU6q5pdwjc",
  authDomain: "dragon-news-eadcc.firebaseapp.com",
  projectId: "dragon-news-eadcc",
  storageBucket: "dragon-news-eadcc.firebasestorage.app",
  messagingSenderId: "330037364404",
  appId: "1:330037364404:web:2e48b72987fffcec36f9e1" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

