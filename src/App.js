// Files
import './index.css';
import Navbar from './components/Navbar';
import Landing from "./components/Pages/Landing"
import Register from "./components/Pages/Register"

// Modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



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
    <Router>
           <div className="App">
             <Navbar />
             <Routes>
               <Route exact path='/' element={< Landing />}></Route>
               <Route exact path='/register' element={< Register />}></Route>
             </Routes>
           </div>
    </Router>
  );
}

export default App;
