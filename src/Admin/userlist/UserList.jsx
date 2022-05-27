import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import "./userList.css";    

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

export default function UserList() {
  
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  
  
  
    useEffect(() => {
      axios.get(`http://localhost:3006/employes`).then((res) => {
        setData(res.data);
      });
    }, []);
  
    console.log(data);
    

    function loadUsers() {
      axios.get("http://localhost:3006/employes").then((res) => {
        setData(res.data.reverse());
      });
    }
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    function deleteUser(id) {
      axios.delete(`http://localhost:3006/employe/${id}`).then(loadUsers());
    }
  
              console.log("data=>" , data);

          return (
            <div className={"container-table"}> 
            <div className={"sub-container"}>
              <table className="styled-table">
                
                <thead>
                  <tr>
                    <th  style={{textAlign: "Center"}}>id</th>
                    <th  style={{textAlign: "Center"}}>fullName</th>
                    <th  style={{textAlign: "Center"}}>username</th>
                    <th  style={{textAlign: "Center"}}>matricule</th>
                    <th  style={{textAlign: "Center"}}>Anicienneté</th>
                    <th  style={{textAlign: "Center"}}>Age</th>
                    <th  style={{textAlign: "Center"}}>Edit</th>

                    
              </tr>
              </thead>
              <tbody>
                {data && data.map((item, index) =>{
  
        return(
          <tr key={index}>
            <th scope="row" >{index +1}</th>
        
            <td>{item.fullName}</td>
            <td>{item.username}</td>
            <td>{item.Anicienneté}</td> 
            <td>{item.matricule}</td> 
            <td>{item.Age}</td> 
            
            <td>
           
                <button className="btn btn-edit">Edit</button>
             
                <Link
                            onClick={()=>deleteUser(data.id)}
                            to={"#"}
                             className="btn btn-delete">
                          
                            Delete
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