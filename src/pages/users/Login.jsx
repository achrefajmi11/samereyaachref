import React, { useEffect, useState } from "react";

const Login = ({login,error}) => {
  

    return (
    <div className="app">
      <h1 style={{color:"red"}}>{error ?  " nom d'utilisateur ou mot de passe invalide " : null }</h1>
      <form className="sign"  align="center" onSubmit={login}>
      
      
          <legend className="contact-us">Se connecter</legend>
          <div className="contact-us" align="center" >
            <label htmlFor="matricule"></label>
            <input 
              type="INT"
              name="matricule"


               className="form-control"  align="center"
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

          <button type="btn-outline-primary" className="submit" align="center">
            Se connecter
          </button>
         
          
      </form>
    </div>
  );
};

export default Login;
