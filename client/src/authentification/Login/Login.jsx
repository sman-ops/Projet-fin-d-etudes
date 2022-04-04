import React,{useState,useContext} from 'react'
import styles from "./styles.module.css";

import axios from 'axios';
import {Link} from "react-router-dom"
import {useNavigate} from'react-router-dom'
import { AuthContext } from '../../helpers/AuthContext'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");
    const {setAuthState} = useContext(AuthContext)
const navigate =useNavigate();
const login =(e) =>{
    e.preventDefault();
    const data={email:email,password:password};
    axios.post("http://localhost:3001/login",data).then((response)=>{
        console.log(response.data.token)
        
      localStorage.setItem("accessToken",response.data.token.token)
      setAuthState(true)
      navigate('/template')
    
        });

   
      

}

  return (
    <div className={styles.login_container}>
    <div className={styles.login_form_container}>
   
        <div className={styles.left}>
            <form className={styles.form_container} >
                <h1>Login to Your Account</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                   
                   
      onChange={(event)=>{setEmail(event.target.value);}}
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                   
                   
      onChange={(event)=>{setPassword(event.target.value);}}
                    required
                    className={styles.input}
                />
       
                <button type="submit" className={styles.green_btn} onClick={login}>
                    Sing In
                </button>
            </form>
        </div>
        <div className={styles.right}>
            <h1>New Here ?</h1>
           <Link to="/register">
                <button type="button" className={styles.white_btn}>
                    Sing Up
                </button>
                </Link>
               

        </div>
    </div>
  
</div>
  )
}

export default Login