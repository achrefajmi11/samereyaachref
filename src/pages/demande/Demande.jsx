import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";

const Demande = (props) => {
  const [token, setToken] = useState(null);
  const [jrsExceptionnel, setJrsExceptionnel] = useState(0);

  useEffect(()=>{
    setToken(localStorage.getItem("token"));
    console.log("decode token =>  ", jwtDecode(localStorage.getItem("token")).id);
  },[])

  const demande = (e)=>{
    
   e.preventDefault() ;
   const  {Date_debut , Date_fin ,nombre_jrs ,type_Conge, }=e.target.elements;
   console.log(Date_debut.value,Date_fin.value,nombre_jrs.value,type_Conge.value)
   axios.post("http://localhost:3006/congeexeptionnel",{
     Date_debut :Date_debut.value,
     Date_retour: Date_fin.value,
     nombre_jrs: nombre_jrs.value,
     type_Conge: type_Conge.value ,
     userId:jwtDecode(token).id,
   }).then(res=>{
    props.history.push("/rh/HistoriqueDemande");
  })
  .catch(error=>console.log(error))
  }
  return (
    <div className="tab-content">
      <form className="form-profile" onSubmit={demande}>
        <fieldset>
          <legend>Créer une nouvelle demande de congé</legend>
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
          <div className="form-group">
            <label htmlFor="Type">Type congé</label>
            <select className='form-control' id="type_Conge"  
              name="type_Conge">
              <option value="congé-annuel">
                congé annuel
              </option>
              <option value="maladie">
                maladie
              </option>
            </select>
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







export default Demande ;
