import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { useState } from "react"

import React from 'react';
import { RiRedditFill } from "react-icons/ri"
import { AiFillInstagram } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"

function Landing(){
   const [email, setEmail] = useState();
  


	 return(
    <div className = "w-61 flex flex-col items-center jusitfy-center m-auto">
      <img width = "300px" height = "300px" className = "rounded-xl m-10" src = "https://media.discordapp.net/attachments/879005101124124712/922112877857505300/IMG_20210802_014213.jpg?width=336&height=417" />
      <h2 className = "text-3xl m-1 text-black">Tuncay Qafarlı, <span className='p-3 rounded-3xl bg-red-600'>Web-Proqramist</span></h2><br />
      <div className='flex flex-row items-center justify-center'>
       <abbr title='Reddit' className='cursor-pointer m-3'><RiRedditFill size = {50} color = "red" /></abbr> 
       <abbr title='Instagram' className='cursor-pointer m-3'><AiFillInstagram size = {50} color = "pink" /></abbr>
       <abbr title = 'Discord' className='cursor-pointer m-3'><BsDiscord size = {50} color='blue' /></abbr>
       <abbr title = 'LinkedIn' className='cursor-pointer m-3'><AiFillLinkedin size = {50} color='cyan' /></abbr>
       <abbr title = 'Github' className='cursor-pointer m-3'><AiFillGithub size = {50} color='black' /></abbr>
      </div>
      <div className='about text-center '>
        <span className = "m-auto font-3xl"><h1>Haqqımda</h1></span>
      Salam, mənim adım Tuncaydır! 5 illik təcrübə ilə web-programming və web-design ilə məşğul oluram.<br /><br />
      Əsasən, ReactJS və ExpressJS ilə işləyirəm. Bundan başqa Flutter və Python kimi dillər ilə tanışlığım var!<br /><br />
      Newsletter-a qoşularaq yeniliklərdən xəbərdar ol! <br /><br />
      <div className = 'news-register flex flex-row m-auto justify-center items-center'>
        <input onChange = {(e) => setEmail(e.target.value)} placeholder='E-mail' type = "email" className='mx-6' />
        <button>Qoşul</button>
      </div>
    </div>
    <br />
    <div className='abilitiescontainer flex flex-col items-center justify-center rounded-xl'>
      <h1>Bacarıqlar</h1><br />
      <div className='abilities'>
        <span className='p-4 rounded-xl bg-blue-700 m-4 cursor-pointer'>Github ilə işləmək</span>
     <span className='p-4 rounded-xl bg-purple-700 m-4 cursor-pointer'>Full-Stack bacarığı</span>
     <span className='p-4 rounded-xl bg-red-700 m-4 cursor-pointer'>UX/UI Dizayn</span>
     <span className='p-4 rounded-xl bg-green-700 m-4 cursor-pointer'>Mobil proqramlaşdırma</span>
      </div>
    </div>
    </div>
  )
}

export default Landing;
