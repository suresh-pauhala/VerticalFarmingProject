import React from 'react';
import logo from './images/verticalfarming.jpg'
import {Link , BrowserRouter, NavLink} from 'react-router-dom';
import './App.css';
function Home(props)
{
    console.log(props);
   const handleLoginClick = () =>{
       props.history.push("/login");
}
   const handleRegisterClick = () =>{
    props.history.push("/registration");
}
return(
    <div className="relative">
            <div className="absolute">
            <button className="btn" onClick={handleLoginClick}>Login</button>
            <button  className="btn" onClick={handleRegisterClick}>Register</button>
            </div>
    {/* <br></br>
    <NavLink to="/login" exact activeClassName="activeLink">Login</NavLink>
    <NavLink to="/registration">Sign up</NavLink> */}
    <br></br>
    <img src={logo} width="100%" height="660px" margin-top="0px" />
    
    </div>
) 
}
export default Home;
