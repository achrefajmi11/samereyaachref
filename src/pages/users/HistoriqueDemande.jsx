//import axios from "axios";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import parseJwt from "../../services/parseJWT";


const HistoriqueDemande = (props) => {



  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const getusers = async () => {
    const token = localStorage.getItem('token');
    const id = parseJwt(token).id;
  

    const response = await axios.get(`http://localhost:3006/userConges/${id}`)
    const response1 = await axios.get(`http://localhost:3006/userCongess/${id}`)
    if (response.status === 200 && response1.status === 200) {
      setData(response.data);
      setData1(response1.data);
      console.log("data user conge =>", response.data);
    }
  };


  useEffect(() => {
    getusers();
  }, []);

  return (
    <>
      <div className={"container-table"}>
  
        <div class="table-responsive" align="center">
        <p> LISTE DES DEMANDES DES CONGES ANNUEL </p>
          <table class="table" >

            <thead>
              <tr>
                <th scope="col">Date demande</th>
               <th scope="col">Date de début</th>
                <th scope="col">Date de fin</th>
                <th scope="col">Etat de demande</th>
                
              </tr>
            </thead>
            <tbody>
              {data && data.map((item, index) => {

                return (
                  <tr key={index}>
                    <td> {moment(item.createdAt).format("D/M/Y")} </td>
                 
                    <td>{moment(item.Date_debut).format("D/M/Y")}</td>
                    <td>{moment(item.Date_retour).format("D/M/Y")}</td>
                    <td>
                      <span>
                        {
                          item.status == "0" ?
                            "en cours"
                            :
                            item.status == "-1"
                              ?
                              "refuser"
                              :
                              "accepter"
                        }
                      </span>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={"container-table"}>
        <div class="table-responsive" align="center">
        <p> LISTE DES DEMANDES DES CONGES EXCEPTIONNEL </p>
          <table class="table" >

            <thead>
              <tr>
                <th scope="col">Date demande</th>
                <th scope="col">Type congé</th>
                <th scope="col">Date de début</th>
                <th scope="col">Date de fin</th>
                <th scope="col">Etat de demande</th>

              </tr>
            </thead>
            <tbody>
              {data1 && data1.map((item, index) => {

                return (
                  <tr key={index}>
                    <td> {moment(item.createdAt).format("D/M/Y")} </td>
                    <td>{item.type_Conge}</td>
                    <td>{moment(item.Date_debut).format("D/M/Y")}</td>
                    <td>{moment(item.Date_retour).format("D/M/Y")}</td>
                    <td>
                      <span>
                        {
                          item.status == "0" ?
                            "en cours"
                            :
                            item.status == "-1"
                              ?
                              "refuser"
                              :
                              "accepter"
                        }
                      </span>

                    </td>
                    
                    
              
                    
                 
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>


    </>
  );
};

export default HistoriqueDemande;