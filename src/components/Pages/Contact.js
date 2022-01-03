import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useState } from "react"


function Contact(){
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  return(
    <div align = "center">
      <form className="contact">
     <label for = "username">
       <input id = "username" placeholder="İstifadəçi adı" />
     </label>
     <label for = "email">
       <input id = "email" placeholder="E-poçt" type = "email" />
     </label>
     <label for = "description">
       <textarea id = "username" placeholder="Açıqlama" />
     </label>
     <label for = "submit">
       <button id = "submit">Göndər</button>
     </label>
    </form>
    </div>
  )
}

export default Contact
