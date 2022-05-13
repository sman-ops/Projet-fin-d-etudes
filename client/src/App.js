import "./App.css";
import React, { useEffect, createContext, useReducer } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Register from './authentification/Register';
// import Login from './authentification/Login'

import Users from "./users/Users";
import Login from "./authentification/Login/Login";
import Register from "./authentification/Register/Register";
import ForgotPassword from "./authentification/ForgotPassword/ForgotPassword";
import ResetPassword from "./authentification/ResetPassword/ResetPassword";
import Template from "./Template/template";
import Profile from "./Profile/Profile";
import EditUser from "./users/EditUser";
import AddUser from "./users/AddUser";
import UpdatePass from "./authentification/UpdatePass";
import { AuthContext } from "./helpers/AuthContext";
import Event from "./Events/pages/event";
import ListEvents from "./Events/pages/ListEvents";
import ViewEvent from "./Events/pages/ViewEvent";
import Salon from "./Salon/pages/salon";
import ViewUser from "./users/ViewUser";
import AccountSettings from "./account-setting/index";
import Error404 from "./authentification/Error404";
import HomePage from "./components/HomePage/HomePage";
import CallPage from "./components/CallPage/CallPage";
import Dashboard from "./Dashboard/dashboard";
function App() {
  // if you able to access the value of the state and be able to change this state in any of components below here we can pass those to value={{}}

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setAuthState(true);
    }
  }, []);

  // const routes =[{
  //   path:"/profile",component:"Profile"
  // }]
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Routes>
            {authState ? (
              <>
                {/* {routes.map((item,index)=>{
         
              })} */}

                <Route
                  path="/user"
                  element={
                    <Template>
                      <Users />
                    </Template>
                  }
                />
                <Route
                  path="/template"
                  element={
                    <Template>
                      <Dashboard />
                    </Template>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Template>
                      <Profile />
                    </Template>
                  }
                />

                <Route
                  path="/profile1"
                  element={
                    <Template>
                      <AccountSettings />
                    </Template>
                  }
                />
                <Route
                  path="/edituser/:id"
                  element={
                    <Template>
                      <EditUser />
                    </Template>
                  }
                />

                <Route
                  path="/adduser"
                  element={
                    <Template>
                      <AddUser />
                    </Template>
                  }
                />
                <Route
                  path="/event"
                  element={
                    <Template>
                      <Event />
                    </Template>
                  }
                />
                <Route
                  path="/listevents"
                  element={
                    <Template>
                      <ListEvents />
                    </Template>
                  }
                />

                <Route
                  path="/viewevent/:id"
                  element={
                    <Template>
                      <ViewEvent />
                    </Template>
                  }
                />

                <Route
                  path="/salon"
                  element={
                    <Template>
                      <Salon />
                    </Template>
                  }
                />

                <Route path="/updatepass" element={<UpdatePass />} />

                <Route
                  path="/view"
                  element={
                    <Template>
                      <ViewUser />
                    </Template>
                  }
                />

                <Route path="/room/:id" element={<CallPage />} />

                <Route path="/homepage" element={<HomePage />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/forgotpass" element={<ForgotPassword />} />
                <Route path="/resetpass/:token" element={<ResetPassword />} />
                <Route path="*" element={<Error404 />} />
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
              </>
            )}
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
