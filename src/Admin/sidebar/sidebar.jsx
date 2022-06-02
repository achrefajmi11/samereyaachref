import React from 'react';
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar({role}) {
  return (

    <div className="sidebar">
      <div className="sidebarWrapper">
      {role == 'rh'
            ? 
            <>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to="/rh/dashbord" className="link">
            <li className="sidebarListItem active">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Mon Compte</h3>
          <ul className="sidebarList">

            <Link to="/rh/cordonnee" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Mes cordonnées
              </li>
            </Link>

          </ul>
        </div>
        </>
        :null
      }
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Gestion des Employés</h3>
          <ul className="sidebarList">
           {role == 'rh'
            ? 
            <Link to="/rh/HistoriquedemandeList" className="link">
              <li className="sidebarListItem">
                Demandes des employés
              </li>
            </Link>
            :null
           }
            <Link to="/rh/userList" className="link">
              <li className="sidebarListItem">
                Liste des employés
              </li>
            </Link>
  
            <Link to="/rh/Edituser" className="link">
              <li className="sidebarListItem">
                Ajouter un employé
              </li>
            </Link>
         
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contact</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="MuiSVIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
    

          </ul>
     
        </div>
      </div>
    </div>
  );
}