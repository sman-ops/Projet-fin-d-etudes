import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { color } from '@mui/system';
import {Link} from 'react-router-dom'
import { toast,Zoom } from 'react-toastify';
// imports

import {TextField} from '@material-ui/core'
// render


function Users() {

    const [users,setUsers]=  useState([]);
    const [searchTerm,setSearchTerm]=useState("")

    const getUser =async ()=> {
     await axios.get("http://localhost:3001/users").then((response)=>{
        // console.log(response.data)
        setUsers(response.data)

      })
   }
    useEffect(()=>{
      getUser();
      
    },[])
<<<<<<< HEAD

    const onDeleteUser  =async (id) =>{
      if(window.confirm("Are you sure that  you wanted to delete that user ")) {
        const response = await axios.delete(`http://localhost:3001/user/${id}`)
        if(response.status===200){
          toast.success("deleted success"  )
          getUser()
        }
        
      }


    }
  return (
    <div class="card">

            <div class="card-body px-0 overflow-auto">
              {/* <input type="text" placeholder='search...' onChange={event=> {setSearchTerm(event.target.value)}} /> */}

              <TextField id="standard-basic" label="Search" variant="standard" style={{textAlign:"center"}} />
              <br/>
        
=======
  return (

          <div class="card">

            <div class="card-body px-0 overflow-auto">
              {/* <input type="text" placeholder='search...' onChange={event=> {setSearchTerm(event.target.value)}} /> */}

              <TextField id="standard-basic" label="Search" variant="standard" style={{textAlign:"center"}} />
              <br/>
        
>>>>>>> 1493e7aabaa5b1612be2e0f83104d9898581c8b8
              <h4 class="card-title pl-4">All Users</h4>
              <div class="table-responsive">
                <table class="table">
                  <thead class="bg-light">
                    <tr>
                      <th>No</th>
                      <th>username</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.filter((val)=>{
                        if (searchTerm==""){
                            return val
                        } else if(val.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                            return val
                        }
                    }).map((value,key)=>{
                    return (
                      <tr key={key}>
                          <th>{key+1}</th>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src="assets/images/faces/face1.jpg" alt="image" />
                            <div class="table-user-name ml-3">
                              <p class="mb-0 font-weight-medium"> {value.username} </p>
                          
                            </div>
                          </div>
                        </td>
                        <td>{value.email}</td>
                        <td>
                            
                          {/* <button style={{width:'50px' ,color:"green"}}>Edit</button>
                          <button style={{width:'50px' ,color:"red"}}>Delete</button> */}

                          <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
<<<<<<< HEAD
                         <Link to={`/edituser/${value.id}`}><a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons" style={{color:"orange"}}>&#xE254;</i></a></Link> 
                          <a href="#myModal" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={()=> onDeleteUser(value.id)} style={{color:"#ff4500"}}>&#xE872;</i></a>
                                                {/* <Link class=" mr-2" to="/">
                          <i class="fa fa-edit" aria-hidden="true" style={{color:"orange",fontSize:"30px"}}></i> 
                          </Link>  */}

=======

                          <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons" style={{color:"orange"}}>&#xE254;</i></a>
                          <a href="#myModal" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"  style={{color:"#ff4500"}}>&#xE872;</i></a>
                                                {/* <Link class=" mr-2" to="/">
                          <i class="fa fa-edit" aria-hidden="true" style={{color:"orange",fontSize:"30px"}}></i> 
                          </Link>  */}

>>>>>>> 1493e7aabaa5b1612be2e0f83104d9898581c8b8
                        </td>
                      </tr> 
                    ); })}
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                          <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </tbody>
                </table>
              </div>
              <a class="text-black mt-3 d-block pl-4" href="#">
                <span class="font-weight-medium h6">View all order history</span>
                <i class="mdi mdi-chevron-right"></i></a>
              </div>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 1493e7aabaa5b1612be2e0f83104d9898581c8b8
      
        
  )
}

export default Users