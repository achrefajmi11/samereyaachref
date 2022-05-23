//import axios from "axios";
import React, {} from "react";


const HistoriqueDemande = (props) => {
    return (
      <div className="tab-content">
        <div className="">
          <div className="card border-info mb-3">
            <div className="card-header">Informations</div>
            <div className="card-body">
              <div className="tablehis">
                  <h4>
                    votre historique de demande
                  </h4>
                  <table>
                  <tr>

    <th>Date demande </th>
    <th>Date de début</th>
    <th>Date de fin</th>
    <th>Nombre de jours</th>
    <th>Date de retour </th>
    <th>Type congé</th>
    <th>Etat de demande </th>
  </tr>
  <tr>
    <td>11/12/2022</td>
    <td>01/01/2023</td>
    <td>15/01/2023</td>
    <td>15</td>
    <td>16/01/2023</td>
    <td>vacance </td>
    <td>en cour de traitement</td>

  </tr>

 
  <tr>
    <td>9/05/2022</td>
    <td>12/05/2022</td>
    <td>15/01/2023</td>
    <td>15</td>
    <td>16/01/2023</td>
    <td>vacance </td>
    <td>Resuser</td>

  </tr>
  <tr>
    <td>11/12/2022</td>
    <td>21/12/2022</td>
    <td>15/01/2023</td>
    <td>10</td>
    <td>16/01/2023</td>
    <td>vacance </td>
    <td>Accepter</td>

  </tr>
  <tr>
    <td>11/12/2022</td>
    <td>01/01/2023</td>
    <td>15/01/2023</td>
    <td>15</td>
    <td>16/01/2022</td>
    <td>maladie </td>
    <td> Accepter</td>

  </tr>
  <tr>
   
  </tr>

                  </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default HistoriqueDemande;