import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';



import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Select from '@mui/material/Select'

function EditUser() {

  const { id } = useParams()
  const navigate=  useNavigate()
  


  const [firstname,setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [grade,setGrade] = useState("")

 

  useEffect(() => {
      const getSingleUser = async () => {
          const {data} = await axios.get(`http://localhost:3001/user/${id}`)
          setFirstName(data.firstname)
          setLastName(data.lastname)
          setEmail(data.email)
          setPhone(data.telephone)
          setGrade(data.grade)
     
      }

         getSingleUser()
  },[id])

  const updateUser =  (e) => {

    e.preventDefault()
    // update by put request
    const data = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        telephone:phone,
        grade:grade

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
    
    
    <Card style={{width:"80%",marginTop:"3%",marginLeft:"10%"}}>
     <CardHeader title='Edit User' titleTypographyProps={{ variant: 'h6' }} />< CreditScoreIcon/> 
    <Divider sx={{ margin: 0 }} />
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              1. Account Details
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Firstname' placeholder='Alberto' value={firstname}
                            onChange={(e) => setFirstName(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='email' label='Lastname' placeholder='Jhon' value={lastname}
                            onChange={(e) => setLastName(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com'  value={email}
                            onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='text' label='Phone' placeholder='3232323' value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='text' label='Grade' placeholder='Stagiaire,inge...' value={grade}
                            onChange={(e) => setGrade(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='email' label='Phone' placeholder='2222222' />
          </Grid>
          
          </Grid>
          </CardContent>
        
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button style={{width:"25%",height:"50px"}} type='submit' sx={{ mr: 2 }} variant='contained' onClick={updateUser} >
            Save change
          </Button>
        
        </CardActions>
        </form>
        
    </Card>
        
   
  )
}

export default EditUser