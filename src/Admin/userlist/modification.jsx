import axios from "axios";
import React, { useState, useEffect } from "react";
import { } from "react";
import parseJwt from '../../services/parseJWT';
//import "./profile.css";
const EditUser = (props) => {
  const [user, setUser] = useState(null);



  const getusers = async () => {
    const token = localStorage.getItem('token');
    const id = parseJwt(token).id;


  };



  useEffect(() => {
    console.log("props => ♥ ",props);

    console.log('id => ', props.userId);
    axios.get(`http://localhost:3006/user/${props.location.userId}`)
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
    const { username, fullName, matricule , Password} = e.target.elements;

    
    axios.patch((`http://localhost:3006/user/${props.location.userId  }`), {
      username: username.value,
      fullName: fullName.value,
      matricule: matricule.value,
      password: Password.value 

    }).then(res => {
      setUser({ username: username.value, fullName: fullName.value, matricule: matricule.value,password: Password.value  })
      props.history.push("/admin/userList")
    })
      .catch(error => console.log(error))
  }
  return (
    <div className="userContainer">
      {
        user ?
          <div className="ProfileParent container">
            <div className="row justify-content-evenly">
            


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
                    <div className="userUpdateItem">
                        <label>Password</label>
                        <input
                          type="Password"
                          placeholder="********"
                          className="form-control"
                          id="Password"
                          defaultValue={user.Password}
                        />
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
export default EditUser;
