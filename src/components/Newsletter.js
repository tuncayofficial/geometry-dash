import { useState, useEffect } from "react";
import db from "../firebase.config"
import { collection, addDoc } from "firebase/firestore"; 
import AlertPass from "./AlertPass";

function Newsletter(){
    const [email, setEmail] = useState();
    const [name, setName] = useState()
    const [alert, setAlert] = useState(false)
    const [disabled, setDisabled] = useState(false) 

    const handleSubmit = async(event) =>{
        event.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "emails"), {
              name,
              email
            });
            setDisabled(true)
            setAlert(true)
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <div className='about text-center'>
        <span className = "m-auto font-3xl"><h1>Haqqımda</h1></span>
      Salam, mənim adım Tuncaydır! 5 illik təcrübə ilə web-programming və web-design ilə məşğul oluram.<br /><br />
      Əsasən, ReactJS və ExpressJS ilə işləyirəm. Bundan başqa Flutter və Python kimi dillər ilə tanışlığım var!<br /><br />
      Newsletter-a qoşularaq yeniliklərdən xəbərdar ol! <br /><br />
      <div className = 'newsregister flex m-auto justify-center items-center'>
        <form onSubmit={handleSubmit}>
         <input onChange = {(e) => setEmail(e.target.value)} placeholder='Adınız' type = "text" className='mx-6' />
         <input onChange = {(e) => setName(e.target.value)} placeholder='E-mail' type = "email" className='mx-6' />
         <button disabled={disabled}>Qoşul</button>
         {alert && (<AlertPass />)}
          </form>
      </div>
    </div>
    )
}

export default Newsletter