import React from "react";
import { BrowserRouter, Routes, Switch, } from "react-router-dom"

import Auth from './Auth';
import Login from './Login';
import Register from './Register';

export default() =>(
    <BrowserRouter>
        <Switch>
      <Routes exact path="/login" render={props => <Login{...props} />}/>
      <Routes exact path="/register" render={props => <Register{...props} />}/>
      <Routes exact path="/auth" render={props => <Auth{...props}/>}/>
      </Switch>
  </BrowserRouter> 
);