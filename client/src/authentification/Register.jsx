import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const navigate=useNavigate();
    const Register =() => {
        const data = { username: username,email:email, password: password };
        axios.post("http://localhost:3001/register", data).then((response) => {
             console.log(response.data);
             navigate('/login')
            });}
  return (
    <div className="loginContainer">
    <label>Username:</label>
    <input
      type="text"
      onChange={(event) => {
        setUsername(event.target.value);
      }}
   
    />
    <label>email:</label>
    <input
      type="email"
      onChange={(event) => {
        setEmail(event.target.value);
      }}
     
    />
    <label>Password:</label>
    <input
      type="password"
      onChange={(event) => {
        setPassword(event.target.value);
      }}
    />
 
    <button  onClick={Register}> Register </button>
  </div>
  )
}

export default Register