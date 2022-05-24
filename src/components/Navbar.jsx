import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = ({ logout, token }) => {





  return (


    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="navbar-brand">Duravit</span>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Accueil
            </NavLink>
          </li>


        </ul>
        <ul className="navbar-nav ml-auto">


          {!token ?
            <>
              <li className="nav-item">

                <NavLink className="nav-link" to="/login">
                  Se connecter
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  S'enregistrer
                </NavLink>
              </li>
         
            </>

            : <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                  Mon compte
                </NavLink>
              </li>
              <li className="nav-item">
                 
                <NavLink className="nav-link" to= "/admin/userList">
                  Liste des Compte
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn Mywhitecolor">Déconnexion</button>


              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
