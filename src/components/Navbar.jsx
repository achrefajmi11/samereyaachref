import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Notifications from '@material-ui/icons/Notifications';
import './Navbar.css';
import axios from "axios";

const Navbar = ({ logout, token, role }) => {

   const [notification, setNotification] = useState(false);

   const [notification1, setNotification1] = useState(false);


  //  setInterval(async () => {
  //    const conge = await axios.get("http://localhost:3006/notifications");
  //    const congeexeptionnel = await axios.get("http://localhost:3006/notificationss");
  //    if (conge.data.length > 0 && congeexeptionnel.data1.length > 0) {

  //      setNotification(true);
       
  //      setNotification1(true);
  //    }
  //    else {
  //      setNotification(false);
  //      setNotification1(false);
  //    }
  //   console.log("conge => ", conge)
  //  }, 2500 ,);
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
                  </li>
                  <li className="nav-item">

                    {
                      role == 'rh' ?
                        <Link
                          to="/rh/HistoriquedemandeList"
                        >
                          <Notifications
                            style={{
                              cursor: "pointer",
                              color: notification && notification1 ? 'red' : null ,
                              
                              
                            }} />
                        </Link>
                        : null
                    }
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