import { Home } from '@material-ui/icons'
import React from 'react'
import './HeroStyles.css'
import { NavLink, useHistory } from "react-router-dom";

const Homepage = () => {
    return (
        <div className='app'>
            <div className="container">
                <div className="eya">
                    <h1> Application de Gestion des Congés  </h1>
                    
                    <h1>et des Autorisations d’Absence</h1>
                    <NavLink className="btn-outline-primary" to="/login">
                          Login
                          </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Homepage