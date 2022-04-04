import React from 'react'

function AddUser() {
  return (
    <div class="col-12 grid-margin stretch-card" style={{margin:"70px 50px 200px 200px",alignItems:"center",width:"65%",height:"20%",marginRight:"90px"}}>
    <div class="card">
      <div class="card-body" style={{marginRight:"80px"}}>
        <h4 class="card-title">Add New User</h4>
        <p class="card-description">Basic form elements</p>
        <form class="forms-sample" >
          <div class="form-group">
            
            <label for="exampleInputName1">Name</label>
            <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail3">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword4">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password" />
          </div>
          <div class="form-group">
            <label for="exampleSelectGender">Gender</label>
            <select class="form-control" id="exampleSelectGender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="form-group">
            <label>File upload</label>
            <input type="file" name="img[]" class="file-upload-default" />
            <div class="input-group col-xs-12">
              <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload Image" />
              <span class="input-group-append">
                <button class="file-upload-browse btn btn-primary" type="button"> Upload </button>
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputCity1">City</label>
            <input type="text" class="form-control" id="exampleInputCity1" placeholder="Location" />
          </div>
  
          <div class="form-group">
            <label for="exampleTextarea1">Textarea</label>
            <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
          </div>
          <button type="button" class="btn btn-success btn-rounded btn-fw"> Success </button>
          <button class="btn btn-light">Cancel</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AddUser