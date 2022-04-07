
import './App.css';
import React,{useEffect,createContext,useReducer} from 'react';
import {useState} from 'react';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Register from './authentification/Register';
// import Login from './authentification/Login'
import Exemple from './authentification/Exemple'
import Users from './users/Users';
import Login from './authentification/Login/Login';
import Register from './authentification/Register/Register';
import ForgotPassword from './authentification/ForgotPassword/ForgotPassword';
import ResetPassword from './authentification/ResetPassword/ResetPassword';
import Template from './Template/template';
import Profile from './Profile/Profile';
import EditUser from './users/EditUser';
import AddUser from './users/AddUser';
import UpdatePass from './authentification/UpdatePass';
import {AuthContext} from './helpers/AuthContext'






function App() {
  
  // if you able to access the value of the state and be able to change this state in any of components below here we can pass those to value={{}}
<<<<<<< HEAD
  
  const [authState,setAuthState]=useState(false);

  useEffect(()=>{
    if(localStorage.getItem("jwt")) {
      setAuthState(true)
  
    }
  },[])
=======
  let auth = false;
>>>>>>> 1493e7aabaa5b1612be2e0f83104d9898581c8b8
  return (
    <div className="App">
   
   <ToastContainer position="top-center" />
   <AuthContext.Provider value={{authState,setAuthState}}>
  <Router>
  

    <Routes>
    { authState ? (
      <>
          <Route path="/user" 
            element={
              <Template>
                <Users/> 
              </Template>
            }
          />
          <Route path="/ex" element={<Exemple/>} />
          <Route path="/template" element={<Template/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/edituser/:id" 
            element={
              <Template>
                <EditUser/> 
              </Template>
            }
          />

          <Route path="/adduser" element={
              <Template>
                <AddUser/> 
              </Template>
            }
          />
          <Route path="/updatepass" element={<UpdatePass/>} />
      
    </> ) : <>
      
          
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/forgotpass" element={<ForgotPassword/>} />
          <Route path="/resetpass/:token" element={<ResetPassword/>} />
          
          </>

}
      
    
    

<<<<<<< HEAD
   
    </Routes>
  </Router>
  </AuthContext.Provider>
 
  </div>
=======
      <Routes>

        {auth ?(
          <>
            <Route path="/user" 
              element={
                <Template>
                  <Users/> 
                </Template>
              }
            />
            <Route path="/ex" element={<Exemple/>} />
            <Route path="/forgotpass" element={<ForgotPassword/>} />
            <Route path="/resetpass" element={<ResetPassword/>} />
            <Route path="/template" element={<Template/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/edituser" 
              element={
                <Template>
                  <EditUser/> 
                </Template>
              }
            />

            <Route path="/adduser" element={
                <Template>
                  <AddUser/> 
                </Template>
              }
            />
            <Route path="/updatepass" element={<UpdatePass/>} />
          </>
        ):
          <>
            <Route path="/login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
          </>
        }
      
      

     
      </Routes>
    </Router>
    </AuthContext.Provider>
    </div>
>>>>>>> 1493e7aabaa5b1612be2e0f83104d9898581c8b8
  );
  
}

export default App;
