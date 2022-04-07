import React,{useState} from 'react'
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom"
import { toast,Zoom } from 'react-toastify';
function ForgotPassword() {
	const navigate=useNavigate()
    const [email,setEmail] = useState("")

	
	const Resetpassword = ()=>{
	
	
	
     if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
			toast.error("email invalid ",{
				transition:Zoom,
				theme:"colored"
				
				
			} )
        return
        }
    fetch('http://localhost:3001/reset-password',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
			toast.error(data.error,{
				theme: "colored"
			  })
           }
           else{
			toast.success(data.message,{
				theme:"colored"
				
			})
			navigate('/')
          
           }
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
	

				</div>
				<div className={styles.right}>
					<form className={styles.form_container} >
						<h1>Enter Your Email</h1>
						<input
							type="text"
							placeholder="Email"
							name="Email"
							value={email}
							onChange={(e)=>setEmail(e.target.value)}
							className={styles.input}
						/>
			
						<button type="submit" className={styles.green_btn}  onClick={Resetpassword()} >
							Reset Password
						</button>
                        
					</form>
				</div>
			</div>
		</div>
  )
}

export default ForgotPassword