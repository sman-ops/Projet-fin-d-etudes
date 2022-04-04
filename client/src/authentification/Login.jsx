import React,{useState} from 'react'
import axios from 'axios';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");

const login =() =>{
    const data={email:email,password:password};
    axios.post("http://localhost:3001/login",data).then((response)=>{
        console.log(response.data.token)
        
      sessionStorage.setItem("accessToken",response.data.token.token)
        });
        
    


        
}
  return (
    <div className="loginContainer">
   
    <input
      type="text"
      onChange={(event)=>{setEmail(event.target.value);}}
   
    />
    <label>Password:</label>
    <input
      type="password"
     onChange={(event)=>{
         setPassword(event.target.value);
     }}
    />

    <button onClick={login} > Login </button></div>
  

  )
}

export default Login