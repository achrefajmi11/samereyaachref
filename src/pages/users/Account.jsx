import React from "react";
import { useState } from "react";
import Profile from "./Profile";

import Demande from "../demande/Demande";
import HistoriqueDemande from "./HistoriqueDemande";
import Demandeannuel from "../demande/Demandeannuel";



const Account = (props) => {
  const [curentTab, setCurrentTab] = useState({ name: "profile" });
  

  const [tabs] = useState([
    { tabKey: "profile", tabTitle: "Mon profile" },
    { tabKey: "demande", tabTitle: "Demande Congé Exceptionnel" },
    { tabKey: "demandeannuel", tabTitle: "Demande Congé Annuel" },
    { tabKey: "historique demande", tabTitle: "Historique des Demandes"},
 
  ]);

  const handleTabs = (name) => {
    setCurrentTab({ name });
  };
  return (
    <>
   <div className="tabs">
        <ul>
          {tabs.map((tab, index) => (
            <li
              className={`tabs-pane ${
                curentTab.name === tab.tabKey ? "active" : ""
              }`}
            >
              <span onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</span>
            </li>
          ))}
        </ul>
      </div> 
      {/* tabs-contents */}
      <div className=" tabs-contents">
        {curentTab.name === "profile" && <Profile />}
        {curentTab.name === "demande" && <Demande {...props} />}
        {curentTab.name === "historique demande" && <HistoriqueDemande/>}
        {curentTab.name === "demandeannuel" && <Demandeannuel {...props} />}
      </div>
    </>
  );
};

export default Account;
