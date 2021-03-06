
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import moment from "moment";
//import Search from"./components/Search";

export default function HistoriquedemandeList() {


  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const getusers = async () => {
    const response = await axios.get("http://localhost:3006/conge")
    const response1 = await axios.get("http://localhost:3006/congeex")
    if (response.status === 200 && response1.status === 200) {
      setData(response.data);
      setData1(response1.data); 
      console.log("data=>", response.data);
    }
  };
  useEffect(() => {
    getusers();

  }, []);


  const updateStatus = (status, congeId ,type=null) => {
    console.log('id', congeId)

    axios
      .post("http://localhost:3006/status",
        {
          id: congeId,
          status: status,
          type
        })
      .then(res => {
        setData(data.map((value) => {
          if (value.id_Conge == congeId)
            value.status = status

          return value;
        }))
        setData1(data1.map((value) => {
          if (value.id_Conge == congeId)
            value.status = status
          return value;
        }))
      })
  }


  return (
    <div className={"container-table"}>
          
      <div className={"sub-container"}>
      <p > LISTE DES DEMANDES DES CONGES ANNUEL</p>
        <table className="styled-table">

          <thead>
            <tr>
              <th style={{ textAlign: "Center" }}>employé</th>
              <th style={{ textAlign: "Center" }}> jours utilisé </th>
              <th style={{ textAlign: "Center" }}>date debut</th>
              <th style={{ textAlign: "Center" }}>date retour</th>
              <th style={{ textAlign: "Center" }}>nombre jrs</th>
              <th style={{ textAlign: "Center" }}>status</th>

            </tr>
          </thead>
          
          <tbody>
            {data && data.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {item.user?.fullName || item.user?.matricule} </td>
                  <td> {item.usedDays} </td>
                  <td>{moment(item.Date_debut).format("D/M/Y")}</td>
                  <td>{moment(item.Date_retour).format("D/M/Y")}</td>
                  <td>{item.nombre_jrs}</td>
                  <td>
                    {
                      item.status == "0" ?
                        <>
                          <button className="btn btn-edit"
                            onClick={() => updateStatus("1", item.id_Conge)}
                          >Accepter</button>
                          <button className="btn btn-delete" onClick={() => updateStatus("-1", item.id_Conge)} >refuser</button>
                        </>
                        : item.status == "1" ? <p> accepted !  </p> : <p> refuser !  </p>
                    }

                  </td>
                </tr>
              );
            }).reverse()}
          </tbody>
        </table>
        <br></br>
      </div>
<br></br>

      <div className={"sub-container"}>
      <p> LISTE DES DEMANDES DES CONGES EXCEPTIONNEL </p>
        <table className="styled-table">

          <thead>
            <tr>
              <th style={{ textAlign: "Center" }}>employé</th>
              <th style={{ textAlign: "Center" }}> jours utilisé </th>
              <th style={{ textAlign: "Center" }}>type_Conge</th>
              <th style={{ textAlign: "Center" }}>date_debut</th>
              <th style={{ textAlign: "Center" }}>date_retour</th>
              <th style={{ textAlign: "Center" }}>nombre_jrs</th>
              <th style={{ textAlign: "Center" }}>status</th>

            </tr>
          </thead>
          
          <tbody>
            {data1 && data1.map((item, index) => {

              return (
                <tr key={index}>
                  <td> {item.user?.fullName || item.user?.matricule} </td>
                  <td>{item.usedDays}</td>
                  <td>{item.type_Conge}</td>
                  <td>{moment(item.Date_debut).format("D/M/Y")}</td>
                  <td>{moment(item.Date_retour).format("D/M/Y")}</td>
                  <td>{item.nombre_jrs}</td>
                  <td>
                    {
                      item.status == "0" ?
                        <>
                          <button className="btn btn-edit"
                            onClick={() => updateStatus("1", item.id_Conge,"exception")}
                          >Accepter</button>

                          <button className="btn btn-delete" onClick={() => updateStatus("-1", item.id_Conge,"exception")} >refuser</button>

                        </>
                        : item.status == "1" ? <p> accepted !  </p> : <p> refuser !  </p>
                    }

                  </td>
                </tr>
              );
            }).reverse()}
          </tbody>
        </table>
        <br></br>
      </div>


    </div>


  );
};

