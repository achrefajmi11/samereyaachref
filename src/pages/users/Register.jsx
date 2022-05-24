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
    props.history.push("/login")
  })
  .catch(error=>console.log(error))
  }
  return (
    <div className="app" align="center"> 
  <form className="contact-us1" align="center" onSubmit={register}>
        
          <legend>S'enregistrer</legend>
          <div className="contact-us1"  align="center"> 
            <label htmlFor="fullName">fullName</label>
            <input
            id="fullName"
            name="fullName"
              type="text"
              className="form-control" align="center"
              placeholder="fullName"
              required
            
            />
          </div>
          <div className="contact-us1" align="center">
            <label htmlFor="username">username</label>
            <input
            id="username"
            name="username"
              type="text"
              className="form-control" align="center"
              placeholder="username"
              required
            />
          </div>
          <div className="contact-us1" align="center">
            <label htmlFor="matricule">matricule</label>
            <input
            id="matricule"
            name="matricule"
              type="INT"
              className="form-control" align="center"
              placeholder="matricule"
              required
            />
          </div>
          <div className="contact-us1" align="center">
            <label htmlFor="password">Password</label>
            <input
            id="Password"
            name="Password"
              type="password"
              className="form-control" align="center"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn-outline-primary " align="center">
            Save
          </button>
        
      </form>
    </div>
  );
};

export default Register;
