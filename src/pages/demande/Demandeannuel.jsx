import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";

const Demandeannuel = (props) => {
  const [token, setToken] = useState(null);


  useEffect(()=>{
    setToken(localStorage.getItem("token"));
    console.log("decode token =>  ", jwtDecode(localStorage.getItem("token")).id);
  },[])

  const Demandeannuel = (e)=>{
   e.preventDefault() ;
   const  {Date_debut , Date_fin ,nombre_jrs , }=e.target.elements;
   console.log(Date_debut.value,Date_fin.value,nombre_jrs.value)
   axios.post("http://localhost:3006/congeannuel",{
     Date_debut :Date_debut.value,
     Date_retour: Date_fin.value,
     nombre_jrs: nombre_jrs.value,
     
     userId:jwtDecode(token).id,
   }).then(res=>{
    props.history.push("/account");
  })
  .catch(error=>console.log(error))
  }
  return (
    <div className="tab-content">
      <form className="form-profile" onSubmit={Demandeannuel}>
        <fieldset>
          <legend>Créer une nouvelle demande de congé annuel</legend>
          <div className="form-group">
            <label htmlFor="Date de début">Date de début</label>
            <input
              type="date"
              id="Date_debut"  
              name="Date_debut"     
              className="form-control"
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="Date de fin">Date de fin</label>
            <input
              type="date"
              id="Date_fin"  
              name="Date_fin"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">nombre de jours</label>
            <input
              type="Text"
              id="nombre_jrs"  
              name="nombre_jrs"
              className="form-control"
              
            />
          </div>
         
       

          <button type="submit" className="btn btn-outline-primary">
            CREER LA DEMANDE
          </button>
          <button type="submit" className="btn btn-outline-primary">
            ANNULER
          </button>
        </fieldset>
      </form>
    </div>
  );
};







export default Demandeannuel ;
