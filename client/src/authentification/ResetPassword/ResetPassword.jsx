import React,{useState} from 'react'
import styles from "./styles.module.css";
import {useParams,useNavigate} from "react-router-dom"
import { toast} from 'react-toastify';
function ResetPassword() {
	const navigate=useNavigate()
    const [password,setPassword] = useState("")
    const {token} = useParams()

    const PostData = ()=>{
        fetch("http://localhost:3001/new-password",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
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
						<h1>Enter Your password</h1>
						<input
							type="text"
							placeholder="New Password"
						
							
							onChange={(e)=>setPassword(e.target.value)}
							className={styles.input}
						/>
                        
					
						
					
                        
						<button type="submit" className={styles.green_btn}  onClick={PostData()} >
							Update Password
						</button>
                        
					</form>
				</div>
			</div>
		</div>
  )
}

export default ResetPassword