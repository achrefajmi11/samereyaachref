import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import './Navbar.css';
const Navbar = ({ logout, token }) => {

  return (
      <>
        <nav className="navbar navbar-expand-md bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Duravit</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/">Accueil</NavLink> 
                </li>
              </ul>
              <div className="navbar-nav">
                  {!token ?
                      <>
                        <li className="nav-item">
                          <NavLink className="nav-link text-white" to="/login">
                            Se connecter
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link text-white" to="/register">
                            S'enregistrer
                          </NavLink>
                        </li>
                      </>
                          : 
                      <>
                        <li className="nav-item">
                          <NavLink className="nav-link text-white" to="/account">
                            Mon compte
                          </NavLink>
                        </li>
                        
                        <li className="nav-item">
                          <button onClick={logout} className="btn Mywhitecolor">Déconnexion</button>
                        </li>
                      </>
                    }
                </div>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Navbar;