import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import React, { useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { toast,Zoom } from 'react-toastify';
// imports

import {TextField} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteSweep';

function Users() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.success.light
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
  
    // hide last border
    '&:last-of-type td, &:last-of-type th': {
      border: 0
    }
  }))
  
 
  
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
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label='customized table'>
      <TableHead>
        <TableRow>
         <StyledTableCell>Num</StyledTableCell>
          <StyledTableCell>firstname</StyledTableCell>
          <StyledTableCell align='right'>lastname</StyledTableCell>
          <StyledTableCell align='right'>email</StyledTableCell>
          <StyledTableCell align='right'>grade</StyledTableCell>
          <StyledTableCell align='right'>picture</StyledTableCell>
          <StyledTableCell align='right'>Actions</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user,key) => (
          <StyledTableRow key={key}>
          <StyledTableCell component='th' scope='row'>
              {key+1}
            </StyledTableCell>
            <StyledTableCell component='th' scope='row'>
              {user.firstname}
            </StyledTableCell>
            <StyledTableCell align='right'>{user.lastname}</StyledTableCell>
            <StyledTableCell align='right'>{user.email}</StyledTableCell>
            <StyledTableCell align='right'>{user.grade}</StyledTableCell>
            <StyledTableCell align='right'>{user.picture}</StyledTableCell>
            <StyledTableCell align='right'>
            <Link to={`/edituser/${user.id}`}><EditIcon color="primary"/></Link>
              <DeleteIcon color="secondary" onClick={()=> onDeleteUser(user.id)}/>
            </StyledTableCell>
            
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
      
        
  )
}

export default Users