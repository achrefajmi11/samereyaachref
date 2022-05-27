import axios from "axios";
import React, { useState, useEffect } from "react";
import { } from "react";
import parseJwt from '../../services/parseJWT';
import "./profile.css";
const Profile = (props) => {
  const [user, setUser] = useState(null);


  const [jrs, setJrs] = useState(0);
  const [jrsExceptionnel, setJrsExceptionnel] = useState(0);
  const getusers = async () => {
    const token = localStorage.getItem('token');
    const id = parseJwt(token).id;

    const response = await axios.get(`http://localhost:3006/userConges/${id}`)
    const responseExceptionnel = await axios.get(`http://localhost:3006/userCongess/${id}`)
    if (response.status === 200 && responseExceptionnel.status === 200) {
      const newJrs = response.data.reduce((acc, item)=>{
         return acc + item.nombre_jrs
      },0)
      const newJrsExceptionnel = responseExceptionnel.data.reduce((acc, item)=>{
        return acc + item.nombre_jrs
     },0)
      setJrs(newJrs);
      setJrsExceptionnel(newJrsExceptionnel);
    }
  };



  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = parseJwt(token).id;
    console.log('id => ', id);
    axios.get(`http://localhost:3006/user/${id}`)
      .then(res => {
        console.log("tag => ", res.data);
        setUser(res.data)
      })
      .catch(error => {
        console.log(" error =>  ", error.message);
      })
      getusers();
  }, [])

  const update = (e) => {
    e.preventDefault();
    const { username, fullName, matricule } = e.target.elements;
    const token = localStorage.getItem('token');
    const id = parseJwt(token).id;
    console.log(username.value, fullName.value, matricule.value)
    axios.patch((`http://localhost:3006/user/${id}`), {
      username: username.value,
      fullName: fullName.value,
      matricule: matricule.value,
    }).then(res => {
      setUser({ username: username.value, fullName: fullName.value, matricule: matricule.value })
    })
      .catch(error => console.log(error))
  }
  return (
    <div className="userContainer">
      {
        user ?
          <div className="ProfileParent container">
            <div className="row justify-content-evenly">
              <div className="col-12 col-md-5 myBorder">
                <div className="achref">
                  <div className="userShowTop"></div>
                  <div className="tab-content">
                    <fieldset className="sss">
                      <p className="ajou">congé details: </p>
                      <span className="aa">Solde congé annuel : 21 jrs</span>
                      <br/>
                      <span className="aa">Solde congé utilisé : {jrs} </span>
                      <div className="userShowInfo">
                        <span className="aa">Solde congé restant {21 - jrs}</span>
                      </div>
                      
                    </fieldset>
                  </div>


                  <div className="tab-content">
                    <fieldset className="sss">
                      <p className="ajou">congé details: </p>
                      <span className="aa">Solde congé exeptionnel : 10 jrs</span>
                      <br/>
                      <span className="aa">Solde congé utilisé : {jrsExceptionnel} </span>
                      <div className="userShowInfo">
                        <span className="aa">Solde congé restant {10- jrsExceptionnel}</span>
                      </div>
                      
                    </fieldset>
                  </div>



                </div>
              </div>


              <div className="col-12 col-md-5 myMargin myBorder">
                <div className="achref1">
                  <p className="eya2">Edit</p>
                  <form className="userUpdateForm" onSubmit={update}>
                    <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input
                          type="text"
                          placeholder="********"
                          className="form-control"
                          defaultValue={user.username}
                          id="username"
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input
                          type="text"
                          placeholder="********"
                          className="form-control"
                          id="fullName"
                          defaultValue={user.fullName}
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Matricule</label>
                        <input
                          type="text"
                          placeholder="********"
                          className="form-control"
                          id="matricule"
                          defaultValue={user.matricule}
                        />
                      </div>
                    </div>
                    <div className="userUpdateRight">
                      <div className="userUpdateUpload">
                        <label htmlFor="file"></label>
                        <input type="file" id="file" style={{ display: "none" }} />
                      </div>
                      <button className="btn btn-outline-primary">Update</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        :<p> loading ... </p>
      }
    </div>
  );
};
export default Profile;
