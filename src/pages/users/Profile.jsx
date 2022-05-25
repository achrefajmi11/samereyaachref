import axios from "axios";
import React, { useState, useEffect } from "react";
import { } from "react";
import parseJwt from '../../services/parseJWT';
import "./profile.css";
const Profile = (props) => {
  const [user, setUser] = useState(null);
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
  }, [])

  const update = (e) => {
    e.preventDefault();
    const { username, fullName, matricule } = e.target.elements;
    console.log(username.value, fullName.value, matricule.value)
    axios.patch(("http://localhost:3005/user/1"), {
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
                      <legend className="aa">Mes cordonnées : </legend>
                      <span className="userShowTitle">Account Details</span>
                      <div className="userShowInfo">
                        <span className="form-group">{user.fullName}</span>
                      </div>
                      <div className="userShowInfo">
                        <span className="userShowInfoTitle">{user.username}</span>
                      </div>
                      <div className="userShowInfo">
                        <span className="userShowInfoTitle">{user.matricule}</span>
                      </div>
                      <span className="userShowTitle">Contact Details</span>
                      <div className="userShowInfo">
                        <span className="userShowInfoTitle">Numéro</span>
                      </div>
                      <div className="userShowInfo">
                        <span className="userShowInfoTitle">Email</span>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 myMargin myBorder">
                <div className="achref1">
                  <span className="userUpdateTitle">Edit</span>
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
                      <button className="btn btn-primary pb-1">Update</button>
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
