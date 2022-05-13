import React, { useState, useEffect } from "react";
import { listEvent } from "../functions/createEvent";
import ReactPaginate from "react-paginate";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
function ListEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listEvent()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = events
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((event) => {
      return (
        <div className="user">
          <h4>Event Presentiel</h4>
          <div style={{ marginLeft: "400px", marginBottom: "10%" }}>
            <EditIcon color="primary" />
            <VisibilityOutlinedIcon color="primary" />
          </div>
          <h3>{event.title}</h3>
          <h3>{event.start}</h3>
          <h3>{event.typeEvent}</h3>
          <div>
            <button
              type="button"
              style={{ height: "60px" }}
              class="btn btn-inverse-info btn-fw"
            >
              Present
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              style={{ height: "60px" }}
              class="btn btn-inverse-warning btn-fw"
            >
              Absent
            </button>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(events.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      <div style={{ marginLeft: "90%" }}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default ListEvents;

// import React from 'react'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Chip from '@mui/material/Chip'
// import Table from '@mui/material/Table'
// import TableRow from '@mui/material/TableRow'
// import TableHead from '@mui/material/TableHead'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import Typography from '@mui/material/Typography'
// import TableContainer from '@mui/material/TableContainer'
// import {useState,useEffect} from 'react'
// import {listEvent} from '../functions/createEvent'
// import PreviewIcon from '@mui/icons-material/Preview';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import {Link} from 'react-router-dom'

// function ListEvents() {

//     const [events,setEvents] = useState([])

//     useEffect(()=>{
//         loadData()

//       },[])

//       const loadData = ()=>{

//         listEvent()
//         .then(res=>{
//         setEvents(res.data)
//         }).catch(err=>{
//           console.log(err)
//         })
//       }

//   return (
//     <Card>
//     <TableContainer>
//       <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
//         <TableHead>
//           <TableRow>
//             <TableCell>title</TableCell>
//             <TableCell>Start at </TableCell>
//             <TableCell>End at</TableCell>
//             <TableCell>Type event</TableCell>
//             <TableCell>Langue event</TableCell>
//             <TableCell>Actions</TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {events.map(event => (
//             <TableRow hover key={event.title} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
//               <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
//                 <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                   <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{event.title}</Typography>

//                 </Box>
//               </TableCell>
//               <TableCell>{event.start}</TableCell>
//               <TableCell>{event.end}</TableCell>
//               <TableCell>{event.typeEvent}</TableCell>
//               <TableCell>{event.langueEvent}</TableCell>
//               <TableCell>
//               <Link to={`/viewevent/${event.id}`}><PreviewIcon color="primary"/></Link>
//                   <ModeEditIcon color="warning"/>
//             </TableCell>

//              </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </Card>
//   )
// }

// export default ListEvents
