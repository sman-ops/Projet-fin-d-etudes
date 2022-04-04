import React from 'react'
import styles from "./styles.module.css";
import {Link} from "react-router-dom"
function ResetPassword() {
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
							name="Email"
							
							required
							className={styles.input}
						/>
                        	<input
							type="text"
							placeholder="Confirm New Password"
							name="Email"
							
							required
							className={styles.input}
						/>
					
						
					
                        
						<button type="submit" className={styles.green_btn}>
							Reset
						</button>
                        
					</form>
				</div>
			</div>
		</div>
  )
}

export default ResetPassword