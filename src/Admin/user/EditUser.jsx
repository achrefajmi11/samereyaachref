
import axios from "axios";
import React, { useEffect } from "react";

const Register = (props) => {

  useEffect(()=>{
    console.log(props)})
  const register = (e)=>{
   e.preventDefault() ;
   const  {username , fullName ,matricule ,Password}=e.target.elements;
   console.log(username.value,fullName.value,matricule.value,Password.value)
   axios.post("http://localhost:3005/register",{
     username :username.value,
     fullName: fullName.value,
     matricule: matricule.value,
     password: Password.value 

   }).then(res=>{
    props.history.push("/userList")
  })
  .catch(error=>console.log(error))
  }
  return (
    <div className="tab-content">
      <form className="form-profile" onSubmit={register}>
        <fieldset>
          <legend>ADD USER</legend>
          <div className="form-group">
            <label htmlFor="fullName">fullName</label>
            <input
            id="fullName"
            name="fullName"
              type="text"
              className="form-control"
              
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input
            id="username"
            name="username"
              type="text"
              className="form-control"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="matricule">matricule</label>
            <input
            id="matricule"
            name="matricule"
              type="INT"
              className="form-control"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            id="Password"
            name="Password"
              type="password"
              className="form-control"
              
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Save
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;