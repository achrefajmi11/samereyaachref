import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
const Login = ({login,error}) => {
  

    return (
    <form className="app">

<div className="form1">

      <h2 style={{color:"red"}}>{error ?  " nom d'utilisateur ou mot de passe invalide " : null }</h2>
      <form className="sign"  align="center" onSubmit={login}>
      
          <legend className="eya">Se connecter</legend>
          <div className="contact-us" align="center" >
            <label htmlFor="matricule"></label>
            <input 
              type="INT"
              name="matricule"
                className="form-control"align="center"
              placeholder="matricule"
              id="matricule"
              
            />
          </div>
          <div className="contact-us"  align="center">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              className="form-control" align="center"
              id="password"
              placeholder="Password"
            />
          </div>
  <button type="btn-outline-primary" className="btn-outline-primary " align="center">
            Se connecter
          </button>
          <button type="btn-outline-primary" className="btn-outline " align="center">
          <NavLink className="nav-link text-white" to="/register">
                          Register
                          </NavLink>
          </button>
      </form>
    </div>
    </form>
  );
};

export default Login;
