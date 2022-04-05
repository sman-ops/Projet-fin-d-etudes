
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
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
import {AuthContext} from './helpers/AuthContext'
import Profile from './Profile/Profile';
import EditUser from './users/EditUser';
import AddUser from './users/AddUser';
import UpdatePass from './authentification/UpdatePass';
function App() {
  const [authState,setAuthState]=useState(false);
  // if you able to access the value of the state and be able to change this state in any of components below here we can pass those to value={{}}
  return (
    <div className="App">
      <AuthContext.Provider value={{authState,setAuthState}}>

      <ToastContainer/>
    <Router>
    

      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/user" element={<Users/>} />
      <Route path="/ex" element={<Exemple/>} />
      <Route path="/forgotpass" element={<ForgotPassword/>} />
      <Route path="/resetpass" element={<ResetPassword/>} />
      <Route path="/template" element={<Template/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/edituser" element={<EditUser/>} />
      <Route path="/adduser" element={<AddUser/>} />
      <Route path="/updatepass" element={<UpdatePass/>} />

     
      </Routes>
    </Router>
    </AuthContext.Provider>
    </div>
  );
  
}

export default App;
