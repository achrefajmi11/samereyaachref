
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import React  from 'react';
  //import Search from"./components/Search";
  
  export default function HistoriquedemandeList() {
    
  
    const [data, setData] = useState([]);
    
    useEffect(()=> {
    getusers() ;
  
    }, []);
    const getusers = async () => {
  const response = await axios.get("http://localhost:3005/conge")
        if(response.status ===200) {
          setData(response.data);
  
        }
    };
   
      console.log("data=>" , data);  
  
  
  
  
  
          return (
            <div className={"container-table"}> 
            <div className={"sub-container"}>
              <table className="styled-table">
              
              <thead>
                <tr>
                  <th  style={{textAlign: "Center"}}>id</th>
                  <th  style={{textAlign: "Center"}}>type_Conge</th>
                  <th  style={{textAlign: "Center"}}>date_debut</th>
                  <th  style={{textAlign: "Center"}}>date_retour</th>
                  <th  style={{textAlign: "Center"}}>nombre_jrs</th>
                  <th  style={{textAlign: "Center"}}>status</th>
                  
            </tr>
            </thead>
            <tbody>
              {data && data.map((item, index) =>{
  
      return(
  
  
        <tr key={index}>
          <th scope="row" >{index +1}</th>
      
          <td>{item.type_Conge}</td>
          <td>{item.date_debut}</td>
          <td>{item.date_retour}</td>
          <td>{item.nombre_jrs}</td>
          
           <td>
          <button className="btn btn-edit">Accepter</button>
             
             <Link to={`/delete/${item.id}`}>
              <button className="btn btn-delete">refuser</button>
              </Link>
               </td>
      </tr>
      
      );
  })}
             </tbody>
            </table>
            </div>
            </div>
              
            
          );
           };    
        
        