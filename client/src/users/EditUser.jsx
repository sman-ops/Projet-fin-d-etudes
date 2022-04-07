import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast,Zoom } from 'react-toastify';
function EditUser() {

  const { id } = useParams()
  const navigate=  useNavigate()
  


  const [username, setUsername] = useState("")
  const [email,setEmail] = useState("")

 

  useEffect(() => {
      const getSingleUser = async () => {
          const {data} = await axios.get(`http://localhost:3001/user/${id}`)
          setUsername(data.username)
          setEmail(data.email)
     
      }

      getSingleUser()
  },[id])

  const updateUser =  (e) => {

    e.preventDefault()
    // update by put request
    const data = {
        username:username,
        email:email,  
    }
     axios.put(`http://localhost:3001/user/${id}`, data)
     .then(response=>{
       
       if(response.status===200){
         console.log(response)
         toast.success(response.data.message)
       }
     })
    
     
         navigate('/user')
  
 
   

}
  return (
    <div class="card">
    <div class="card-body">
      <h4 class="card-title">Edit User</h4>
      <form class="form-sample">
        <p class="card-description">Personal info</p>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Username</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">email</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Gender</label>
              <div class="col-sm-9">
                <select class="form-control">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Date of Birth</label>
              <div class="col-sm-9">
                <input class="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Category</label>
              <div class="col-sm-9">
                <select class="form-control">
                  <option>Category1</option>
                  <option>Category2</option>
                  <option>Category3</option>
                  <option>Category4</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Membership</label>
              <div class="col-sm-4">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked=""/> Free <i class="input-helper"></i></label>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2" /> Professional <i class="input-helper"></i></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="card-description">Address</p>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Address 1</label>
              <div class="col-sm-9">
                <input type="text" class="form-control"/>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">State</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Address 2</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Postcode</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">City</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Country</label>
              <div class="col-sm-9">
                <select class="form-control">
                  <option>America</option>
                  <option>Italy</option>
                  <option>Russia</option>
                  <option>Britain</option>
                </select>
              </div>
              <button type="button" class="btn btn-primary btn-rounded btn-fw"> Primary </button>
            </div>
          </div>
        </div> */}

<button type="button" class="btn btn-primary btn-rounded btn-fw" onClick={updateUser}  > Primary </button>
      </form>
    </div>
  </div>
  )
}

export default EditUser