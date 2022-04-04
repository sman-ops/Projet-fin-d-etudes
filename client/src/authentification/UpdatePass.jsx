import React from 'react'

import {TextField} from '@material-ui/core'
function UpdatePass() {
  return (
    <div class="col-md-6 grid-margin stretch-card" style={{margin:"0% 20%"}}>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title" style={{marginLeft:"30%"}}>Change the password</h4>
      
        <div class="form-group" style={{marginLeft:"30%"}}>
         
        <TextField
          id="outlined-password-input"
          label="Current password password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div class="form-group" style={{marginLeft:"30%"}}>
          
        <TextField
          id="outlined-password-input"
          label="New Pass"
          type="password"
          autoComplete="current-password"
        />
        </div>
       
        <button type="button" class="btn btn-primary btn-rounded btn-fw" style={{width:"40px",height:"40px",marginLeft:"30%"}}> Change  </button>
      </div>
    </div>
  </div>
  
  )
}

export default UpdatePass