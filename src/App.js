import React, { useEffect, useState } from "react";
import Sidebar from "./Admin/sidebar/sidebar";

import Navbar from "./components/Navbar";
import userList from "./Admin/userlist/UserList"
import EditUser from "./Admin/user/EditUser";
import Cordonnee from "./Admin/Cordonee/Cordonnee";
import HistoriquedemandeList from "./Admin/Historiquedemande/Historiquedemande";

import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Account from "./pages/users/Account";
import Login from "./pages/users/Login";
import Profile from "./pages/users/Profile";
import Register from "./pages/users/Register";
import Homepage from "./pages/Homepage";
import Demande from "./pages/demande/Demande";
import parseJwt from "./services/parseJWT";
import axios from "axios";
import { useHistory } from "react-router-dom";



function App() {

  const history = useHistory();
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [role, setRole] = useState(null);

  useEffect(() => {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    console.log(" begin .");
  }, [])

  useEffect(()=>{
    console.log(" my role =>  ", role  );
    console.log(" my token =>  ", token );
  },[role,token]);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    history.push("/login")
  }

  const login = async (e) => {
    e.preventDefault();
    const { matricule, password } = e.target.elements;
    console.log(matricule.value, password.value)
    await axios.post("http://localhost:3005/login", {
      matricule: matricule.value,
      password: password.value
    }).then(res => {
      console.log("decoded token =>", parseJwt(res.data.token))
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("role", parseJwt(res.data.token).role)
      setRole(parseJwt(res.data.token).role);
      console.log(parseJwt(res.data.token).role)
      setToken(res.data.token)
      if (parseJwt(res.data.token).role === "rh") {
        history.push("/cordonnee");
      }
      else if (parseJwt(res.data.token).role === "user") {
        history.push("/account")
      }
    })
      .catch(error => {
        setError(true);
        console.log(error.msg)
      })
  }

  useEffect(() => {
    axios.get("http://localhost:3005/users")
      .then(res => {
        console.log(res)
      })
      .catch(error => console.log)
  }, [])

  return (

        <Switch>
          {
            token ?
              <>
                    <Navbar logout={logout}
                      token={token}
                    />
                    <div className="main-container">
                      {role == "rh" ||  role == "admin"  ? <Sidebar  role={role}/> : null}
                      <div className="subContainer">
                        <div className="sub-subContainer">
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/account" component={Account} />
                            <Route exact path="/demande" component={Demande} />
                            <Route exact path="/home" component={Homepage} />  
                            <Route exact path="/rh/cordonnee" component={Profile} />
                            <Route exact path="/rh/HistoriquedemandeList" component={HistoriquedemandeList} />
                            <Route exact path="/rh/userList" component={userList} />
                            <Route exact path="/rh/EditUser" component={EditUser} />
                            <Route exact path="/admin/userList" component={userList} />
                         
                          </div>
                      </div>
                    </div>  
              </>
              :
                <>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={() => <Login login={login} error={error} ></Login>} />
                  <Route  exact path="/" >
                    <p>  404 page !  </p>
                  </Route>
                </>   
          }

        </Switch>
  );
}

export default App;
