import axios from "axios";
import React, { useState, useEffect } from "react";
import { } from "react";
import parseJwt from '../../services/parseJWT';
import "./cordonnee.css";
const Profile = (props) => {
  const [user, setUser] = useState(null);


  const [jrs, setJrs] = useState(0);

  const getusers = async () => {
    const token = localStorage.getItem('token');
    const id = parseJwt(token).id;

    const response = await axios.get(`http://localhost:3006/userConges/${id}`)
    if (response.status === 200) {
      const newJrs = response.data.reduce((acc, item)=>{
         return acc + item.nombre_jrs
      },0)
      setJrs(newJrs);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = parseJwt(token).id;
    console.log('id => ', id);
    axios.get(`http://localhost:3005/user/${id}`)
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
    axios.patch((`http://localhost:3005/user/${id}`), {
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
              <div className="">
                <div >
                  <div ></div>
                 
                </div>
              </div>
              <div className="col-12 col-md-8 myMargin myBorder">
                <div className="achref1">
                
          <legend className="eya2" align="centre">Modifier mes informations</legend>
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
                      <button className="btn-outline-primary">Update</button>
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
