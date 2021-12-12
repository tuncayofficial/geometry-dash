import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import React from 'react';

function Landing(){
	 return(
    <div className = "w-61 flex flex-col items-center jusitfy-center m-auto">
      <img className = "h-60 w-60 rounded-xl" src = "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg" />
      <h2 className = "text-3xl m-5 text-black">Tuncay Qafarlı, Web-Proqramist</h2>
    </div>
  )
}

export default Landing;
