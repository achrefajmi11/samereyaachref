import React from "react";
import { useState } from "react";
import Profile from "./Profile";

import Demande from "../demande/Demande";
import HistoriqueDemande from "./HistoriqueDemande";



const Account = (props) => {
  const [curentTab, setCurrentTab] = useState({ name: "profile" });
  

  const [tabs] = useState([
    { tabKey: "profile", tabTitle: "Mon profile" },
    { tabKey: "demande", tabTitle: "Demande" },
    { tabKey: "historique demande", tabTitle: "Historique Demande"},
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
      </div>
    </>
  );
};

export default Account;
