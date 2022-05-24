
  import "./cordonnee.css";

  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import React  from 'react';  
    
    
    export default function User() {
      
        return (
         
        
 <div className="userContainer">
    
            <div className="achref">
              <div className="userShowTop">
              </div>

              <div className="tab-content">
                <fieldset className="sss">
                  <legend className="aa">Mes cordonnées : </legend>
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <span className="form-group"></span>
                  </div>
                  <div className="userShowInfo">

                    <span className="userShowInfoTitle"></span>
                  </div>
                  <div className="userShowInfo">

                    <span className="userShowInfoTitle"></span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">

                    <span className="userShowInfoTitle">Numéro</span>
                  </div>
                  <div className="userShowInfo">

                    <span className="userShowInfoTitle">Email</span>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="achref1">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm" onSubmit>
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="********"
                      className="form-control"
                      defaultValue
                      id="username"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="********"
                      className="form-control"
                      id="fullName"
                      defaultValue

                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Matricule</label>
                    <input
                      type="text"
                      placeholder="********"
                      className="form-control"
                      id="matricule"
                      defaultValue

                    />
                  </div>
                  
                 

                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">


                    <label htmlFor="file">

                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="btn btn-outline-primary">Update</button>

                </div>

              </form>

            </div>
        
          
    
    
    </div>
  
  );
};