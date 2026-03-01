// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoRh0P-Wyi1waPUNGtnMenfDMfG-2I6zQ",
  authDomain: "skill-learning-2d191.firebaseapp.com",
  projectId: "skill-learning-2d191",
  storageBucket: "skill-learning-2d191.firebasestorage.app",
  messagingSenderId: "349577554393",
  appId: "1:349577554393:web:798a25c34898da0df651c8",
  measurementId: "G-CMRDM87YNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
