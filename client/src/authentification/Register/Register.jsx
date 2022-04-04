import React,{useState} from 'react'
import styles from "./styles.module.css";
import {Link} from "react-router-dom"
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Register() {
	const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const navigate=useNavigate();
    const Register =() => {
        const data = { username: username,email:email, password: password };
        axios.post("http://localhost:3001/register", data).then((response) => {
             console.log(response.data);
			 alert('scucce register')
             navigate('/login')
            });}
  return (
    <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
                    <Link to="/login">
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
							 
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(event) => {
								setPassword(event.target.value);
							  }}
							 
							required
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