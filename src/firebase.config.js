// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW3ym9FYTIVGP4PlbhL7uudprUk9LnPCo",
  authDomain: "portfolio-a1b82.firebaseapp.com",
  projectId: "portfolio-a1b82",
  storageBucket: "portfolio-a1b82.appspot.com",
  messagingSenderId: "373242789869",
  appId: "1:373242789869:web:52189a9942d917eaddf1e4",
  measurementId: "G-Q4BCCLLGG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export default db