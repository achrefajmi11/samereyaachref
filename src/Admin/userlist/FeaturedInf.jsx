import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessibilityIcon from '@material-ui/icons/Accessibility' ;
import  "./feature.css"

  export default function FeaturedInfo() {
    return (
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">nombre travailleurs 2022</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2000 travailleurs</span>
            <span className="featuredMoneyRate">
               < AccountCircleIcon  className="featuredIcon negative"/>
            </span>
          </div>
          
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Genre</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">100% Hommes</span>
            <span className="featuredMoneyRate">

               < AccessibilityIcon className="featuredIcon negative"/>
               < AccountCircleIcon  className="featuredIcon negative"/>



            </span>
          </div>
         
        
        
        </div>
      </div>
    );
  }