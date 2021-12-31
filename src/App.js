// Files
import './index.css';
import Navbar from './components/Navbar';
import Landing from "./components/Pages/Landing"
import Register from "./components/Pages/Contact"

// Modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Pages/Contact';



function App() {
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
  return (
    <Router>
           <div className="App">
             <Navbar />
             <Routes>
               <Route exact path='/' element={< Landing />}></Route>
               <Route exact path='/contact' element={< Contact />}></Route>
             </Routes>
           </div>
    </Router>
  );
}

export default App;
