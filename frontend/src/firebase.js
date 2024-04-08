// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bcbf1.firebaseapp.com",
  projectId: "mern-auth-bcbf1",
  storageBucket: "mern-auth-bcbf1.appspot.com",
  messagingSenderId: "381088364719",
  appId: "1:381088364719:web:47450c711986fbeb71bc5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);