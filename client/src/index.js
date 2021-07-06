import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';
import RegisterForm from './Registration/RegisterForm';
import LoginForm from './Login/Login';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


ReactDOM.render(
<App />, document.getElementById('root')
);
