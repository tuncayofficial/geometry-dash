import './index.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navbar from './components/Navbar';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function App() {
const firebaseConfig = {
  apiKey: "AIzaSyC-0OueXIOzPKj0i3lHRSb3PH85xTtiTls",
  authDomain: "gdash-community.firebaseapp.com",
  projectId: "gdash-community",
  storageBucket: "gdash-community.appspot.com",
  messagingSenderId: "296474599182",
  appId: "1:296474599182:web:4471ac390f1128e4c8815f",
  measurementId: "G-CH8KERKS2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  return (
    <Navbar />
  );
}

export default App;
