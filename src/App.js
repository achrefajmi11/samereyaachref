import React, { useEffect, useState } from "react";
import Sidebar from "./Admin/sidebar/sidebar";

import Navbar from "./components/Navbar";
import userList from "./Admin/userlist/UserList"
import EditUser from "./Admin/user/EditUser";
import Cordonnee from "./Admin/Cordonee/Cordonnee";
import HistoriquedemandeList from "./Admin/Historiquedemande/Historiquedemande";

import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router,  Rout } from "react-router-dom";
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
    axios.get("http://localhost:3005/users")
      .then(res => {
        console.log(res)
      })
      .catch(error => console.log)
    setToken(localStorage.getItem("token"))
    console.log(history)
  }, [])
  useEffect(() => {
    setToken(localStorage.getItem("token"))

  }, [])

  const logout = () => {

    setToken(null);
    localStorage.removeItem("token");
    history.push("/login")

  }



  const login = (e) => {
    e.preventDefault();
    const { matricule, password } = e.target.elements;
    console.log(matricule.value, password.value)
    axios.post("http://localhost:3005/login", {
      matricule: matricule.value,
      password: password.value
    }).then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("role", parseJwt(res.data.token).role)
      setRole(parseJwt(res.data.token));
      console.log(parseJwt(res.data.token).role)
      setToken(res.data.token)
      if(role === "admin")
       history.push("/cordonnee")
      else if (role === "user"){
        history.push("/user")
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
    <Router>

<Navbar logout={logout}
        token={token}
      />
    <div className="container">

  

      <Switch>
        
        {
          token ?
            <>

              <Route exact path="/account" component={Account} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/demande" component={Demande} />
              <Route exact path="/" component={Homepage} />
              
            </>
            :
            <>
            <>
            
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={() => <Login login={login} error={error} ></Login>} />
         
            
            </>
            <Sidebar/>
               <Route exact path="/cordonnee" component={Cordonnee} />
               <Route exact path="/HistoriquedemandeList" component={HistoriquedemandeList} />
                <Route exact path="/userList" component={userList} />
                <Route exact path="/EditUser" component={EditUser} />
                
               
                 
                
               
          </>
          
        }

      </Switch>
    </div>
    </Router>
  );
}

export default App;
