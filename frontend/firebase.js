// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kalli-ai-yc.firebaseapp.com",
  projectId: "kalli-ai-yc",
  storageBucket: "kalli-ai-yc.firebasestorage.app",
  messagingSenderId: "150541420379",
  appId: "1:150541420379:web:d217abaec265d6bf05bc7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}