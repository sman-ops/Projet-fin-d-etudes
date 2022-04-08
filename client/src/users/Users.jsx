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
    <div className="card">

            <div className="card-body px-0 overflow-auto">
              {/* <input type="text" placeholder='search...' onChange={event=> {setSearchTerm(event.target.value)}} /> */}

              <TextField id="standard-basic" label="Search" variant="standard" style={{textAlign:"center"}} />
              <br/>
        
              <h4 className="card-title pl-4">All Users</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead className="bg-light">
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
                          <div className="d-flex align-items-center">
                            <img src="assets/images/faces/face1.jpg" alt="image" />
                            <div className="table-user-name ml-3">
                              <p className="mb-0 font-weight-medium"> {value.username} </p>
                          
                            </div>
                          </div>
                        </td>
                        <td>{value.email}</td>
                        <td>
                            
                          {/* <button style={{width:'50px' ,color:"green"}}>Edit</button>
                          <button style={{width:'50px' ,color:"red"}}>Delete</button> */}

                          <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                         <Link to={`/edituser/${value.id}`}><a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{color:"orange"}}>&#xE254;</i></a></Link> 
                          <a href="#myModal" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" onClick={()=> onDeleteUser(value.id)} style={{color:"#ff4500"}}>&#xE872;</i></a>
                                                {/* <Link className=" mr-2" to="/">
                          <i className="fa fa-edit" aria-hidden="true" style={{color:"orange",fontSize:"30px"}}></i> 
                          </Link>  */}

                        </td>
                      </tr> 
                    ); })}
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </tbody>
                </table>
              </div>
              <a className="text-black mt-3 d-block pl-4" href="#">
                <span className="font-weight-medium h6">View all order history</span>
                <i className="mdi mdi-chevron-right"></i></a>
              </div>
          </div>
      
        
  )
}

export default Users