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
export default function Sidebar() {
  return (
   
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">

            <li className="sidebarListItem active">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
           
    
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Mon Compte</h3>
          <ul className="sidebarList">

            <Link to="/cordonee" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Mes cordonnées
              </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Gestion des Employés</h3>
          <ul className="sidebarList">
            <Link to="/HistoriquedemandeList" className="link">
              <li className="sidebarListItem">
                Historique des demandes
              </li>
            </Link>
            <Link to="/userList" className="link">
              <li className="sidebarListItem">
                Liste des employés
              </li>
            </Link>
  
            <Link to="/Edituser" className="link">
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
