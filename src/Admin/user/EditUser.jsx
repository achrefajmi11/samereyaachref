
import axios from "axios";
import React, { useEffect } from "react";

const Register = (props) => {

  useEffect(()=>{
    console.log(props)})
  const register = (e)=>{
   e.preventDefault() ;
   const  {username , fullName ,matricule ,Age,Anicienneté}=e.target.elements;
   console.log(username.value,fullName.value,matricule.value,Anicienneté.value,Age.value)
   axios.post("http://localhost:3006/employe",{
     username :username.value,
     fullName: fullName.value,
     matricule: matricule.value,
     Anicienneté: Anicienneté.value ,
     Age: Age.value 



   }).then(res=>{
    props.history.push("/userList")
  })
  .catch(error=>console.log(error))
  }
  return (
    <div className="container-table">
      <form className="col-12 col-md-10 myMargin "  onSubmit={register}>
        <fieldset>
          <p className="eya2" align="center" >Ajouter un employé </p>
          <div className="achref1" >
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
            <label htmlFor="Age">Age</label>
            <input
            id="Age"
            name="Age"
              type="INT"
              className="form-control"
              />
          </div>
          <div className="form-group">
            <label htmlFor="Anicienneté">Anicienneté</label>
            <input
            id="Anicienneté"
            name="Anicienneté"
              type="INT"
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