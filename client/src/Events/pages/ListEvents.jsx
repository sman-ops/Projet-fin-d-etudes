import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import {useState,useEffect} from 'react'
import {listEvent} from '../functions/createEvent'
import PreviewIcon from '@mui/icons-material/Preview';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {Link} from 'react-router-dom'

function ListEvents() {

    
    const [events,setEvents] = useState([])

    useEffect(()=>{
        loadData()
        
      
      },[])

      const loadData = ()=>{
     
        listEvent()
        .then(res=>{
        setEvents(res.data)
        }).catch(err=>{
          console.log(err)
        })
      }
  
  return (
    <Card>
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>Start at </TableCell>
            <TableCell>End at</TableCell>
            <TableCell>Type event</TableCell>
            <TableCell>Langue event</TableCell>
            <TableCell>Actions</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(event => (
            <TableRow hover key={event.title} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{event.title}</Typography>
               
                </Box>
              </TableCell>
              <TableCell>{event.start}</TableCell>
              <TableCell>{event.end}</TableCell>
              <TableCell>{event.typeEvent}</TableCell>
              <TableCell>{event.langueEvent}</TableCell>
              <TableCell>
              <Link to={`/viewevent/${event.id}`}><PreviewIcon color="primary"/></Link>
                  <ModeEditIcon color="warning"/>
            </TableCell>
            
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}

export default ListEvents