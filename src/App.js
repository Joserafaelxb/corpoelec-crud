import React from "react";
import  PrivateRoute  from "./components/PrivateRoute";
import Login from "./components/Login";
import Links from "./components/Links";
import Usuarios from "./components/Usuarios";
import Singup from "./components/Singup";
import ForgotPassword from "./components/ForgotPassword";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";


function App() {

  

  return (
   
      
        
        <Container classname="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100">

              <Router>
                 <AuthProvider>
                   <Switch>
                     <PrivateRoute exact path="/" component={Dashboard} />
                     <Route path="/registrarse" component={Singup} />
                     <Route path="/iniciarsesion" component={Login} />
                     <Route path="/registrar_usuario" component={Links} />
                     <Route path="/verusuarios" component={Usuarios} />
                     <Route path="/forgot-password" component={ForgotPassword} />
                   </Switch>
                 </AuthProvider>
              </Router>
            </div>
        </Container>
  
  );
}

export default App;
