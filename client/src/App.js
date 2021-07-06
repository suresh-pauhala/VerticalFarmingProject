import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RegisterForm from './Registration/RegisterForm';
import LoginForm from './Login/Login';
import Home from './home';
import Welcome from './welcome';

function App() {
  

  // useEffect(()=>{
  //   if(localStorage.getItem('login') !==null)
  //     localStorage.setItem('login',"false")
  // },[])


  return (

    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/> 
    <Route exact path="/registration" component={RegisterForm}/> 
    <Route exact path="/login" component={LoginForm}/>
    <Route exact path="/welcome" component={Welcome}/>

    </Switch>
    </BrowserRouter>


  );
  

}

export default App;
