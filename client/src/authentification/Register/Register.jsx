import React,{useState} from 'react'
import styles from "./styles.module.css";
import {Link} from "react-router-dom"
// import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import M from 'materialize-css'
import { toast,Zoom } from 'react-toastify';

function Register() {
	const navigate=useNavigate();
	const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Register =(e) => {
		e.preventDefault();
	
        // const data = { username: username,email:email, password: password };
        // axios.post("http://localhost:3001/register", data).then((response) => {
        //      console.log(response.data);
        //      navigate('/login')
        //     });
		
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.error("email invalid ",{
				transition:Zoom,
				theme: "colored" 
				
				
			}
			
			)
            return
        }
		fetch("http://localhost:3001/register",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,
				email,
                password
                
                
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
              toast.error(data.error,{
				theme: "colored"
			  })
            }else {
              toast.success(data.message,{
				  theme:"colored"
			  })
                navigate("/")
            }
        }).catch(err=>{
            console.log(err)
        })
       
    
	}
  return (
    <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
                    <Link to="/">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
                        </Link>
				

				</div>
				<div className={styles.right}>
					<form className={styles.form_container} >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="UserName"
							name="UserName"
							onChange={(event) => {
								setUsername(event.target.value);
							  }}
							
					
							className={styles.input}
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
						
							onChange={(event) => {
								setEmail(event.target.value);
							  }}
							 
						
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(event) => {
								setPassword(event.target.value);
							  }}
							 
						
							className={styles.input}
						/>
                        
						<button type="submit" className={styles.green_btn} onClick={Register} >
							Sing Up
						</button>
                        
					</form>
				</div>
			</div>
		</div>
  )
}

export default Register