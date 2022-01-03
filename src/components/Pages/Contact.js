import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useState } from "react"
import db from "../../firebase.config"
import { collection, addDoc } from "firebase/firestore"; 
import AlertPass from "../AlertPass";

function Contact(){
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [desc, setDesc] = useState()
  const [disabled, setDisabled] = useState(false)
  const [alert, setAlert] = useState(false)
   
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        desc
      });
      setDisabled(true)
      setAlert(true)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  return(
    <div align = "center">
      <div align = "center">
        <h1 style={{ fontSize : "30px", color : "black"}}>Əlaqə yarat</h1><br />
      </div>
      <form className="contact" onSubmit={handleSubmit}>
     <label for = "username">
       <input onChange = {(e) => setName(e.target.value)} id = "username" placeholder="İstifadəçi adı" />
     </label>
     <label for = "email">
       <input onChange = {(e) => setEmail(e.target.value)} id = "email" placeholder="E-poçt" type = "email" />
     </label>
     <label for = "description">
       <textarea onChange = {(e) => setDesc(e.target.value)} id = "username" placeholder="Açıqlama" />
     </label>
     <label for = "submit">
       <button id = "submit" disabled={disabled}>Göndər</button>
     </label>
    </form>
    {alert && (<AlertPass />)}
    </div>
  )
}

export default Contact
