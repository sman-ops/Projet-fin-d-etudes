import React, { useState, useEffect } from "react";
import { listEvent } from "../functions/createEvent";
import ReactPaginate from "react-paginate";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./event.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function ListEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //  const  present =async (id,etat)=>{

  //  }
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
    .filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((event) => {
      return (
        <div
          className="user"
          onClick={() => {
            navigate(`/vieweventPresent/${event.id}`);
          }}
        >
          <img
            src="assets/images/event.png"
            style={{
              width: "15%",
              marginRight: "70%",
              marginTop: "10%",
              marginBottom: "10px",
            }}
            alt="logo"
          />
          <h6 style={{ background: "#6495ED", color: "white" }}>
            Present Event
          </h6>
          <div style={{ marginLeft: "400px", marginBottom: "15%" }}>
            {/* <EditIcon color="primary" /> */}
            {/* <VisibilityOutlinedIcon color="primary" /> */}
          </div>
          <h3 style={{ marginBottom: "30%", height: "50%" }}>
            Name of event : {event.title}
          </h3>

          {/* <div style={{ marginBottom: "10%" }}>
            <button
              type="button"
              style={{ height: "55px", width: "90px", borderRadius: "3px" }}
              class="btn btn-inverse-info btn-fw"
              // onClick={()=>{present(event.id,"Present")}}
            >
              Present
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              style={{ height: "55px", width: "90px", borderRadius: "3px" }}
              class="btn btn-inverse-warning btn-fw"
              // onClick={()=>{present(event.id,"Absent")}}
            >
              Absent
            </button>
          </div> */}
        </div>
      );
    });

  const pageCount = Math.ceil(events.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <div style={{ marginBottom: "10%", marginLeft: "1%" }}>
        <Grid item xs={8} sm={3} minWidth={2} mt={5} ml={10}>
          <TextField
            label="Search"
            placeholder="search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Grid>
      </div>
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
