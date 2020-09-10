import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Header, Footer, RouterApp} from "./index"
import Style from "./app.module.css";

const App = ()=>{
  return (
    <Router>
      <div className={Style.appMainContainer}>
        <Header/>
        <RouterApp/>
        <Footer/>
      </div>
    </Router>
 )
}

export default App;