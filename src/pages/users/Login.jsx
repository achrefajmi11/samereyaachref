import React, { useEffect, useState } from "react";

const Login = ({login,error}) => {
  

    return (
    <div className="main">
      <h1 style={{color:"red"}}>{error ?  " nom d'utilisateur ou mot de passe invalide " : null }</h1>
      <form className="sign"  align="center" onSubmit={login}>
      
      
          <legend className="sign">Se connecter</legend>
          <div className="un" align="center" >
            <label htmlFor="matricule"></label>
            <input 
              type="INT"
              name="matricule"
              className="pass"  align="center"
              placeholder="matricule"
              id="matricule"
              
            />
          </div>
          <div className="un"  align="center">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              className="pass" align="center"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="submit" align="center">
            Se connecter
          </button>
         
          
      </form>
    </div>
  );
};

export default Login;
