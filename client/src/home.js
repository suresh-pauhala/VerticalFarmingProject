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
    <div>
        <div className="navDiv">
            <button  onClick={handleLoginClick}>Login</button>
            <button  onClick={handleRegisterClick}>Signup</button>
        </div>
    {/* <br></br>
    <NavLink to="/login" exact activeClassName="activeLink">Login</NavLink>
    <NavLink to="/registration">Sign up</NavLink> */}
    <br></br>
    <img src={logo} />
     
    </div>
) 
}
export default Home;
