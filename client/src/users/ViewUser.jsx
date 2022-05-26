// import "./paginate.css";
// import React, { useState } from "react";

// import ReactPaginate from "react-paginate";
// import EditIcon from "@material-ui/icons/Edit";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// function ViewUser() {
//   const [pageNumber, setPageNumber] = useState(0);

//   const usersPerPage = 3;
//   const pagesVisited = pageNumber * usersPerPage;

//   const displayUsers = users
//     .slice(pagesVisited, pagesVisited + usersPerPage)
//     .map((user) => {
//       return (
//         <div className="user">
//           <div style={{ marginLeft: "400px", marginBottom: "10%" }}>
//             <EditIcon color="primary" />
//             <VisibilityOutlinedIcon color="primary" />
//           </div>
//           <h3>{user.firstName}</h3>
//           <h3>{user.lastName}</h3>
//           <h3>{user.email}</h3>
//           <div>
//             <button
//               type="button"
//               style={{ height: "60px" }}
//               class="btn btn-inverse-info btn-fw"
//             >
//               Confirmer Presence
//             </button>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <button
//               type="button"
//               style={{ height: "60px" }}
//               class="btn btn-inverse-warning btn-fw"
//             >
//               Absent
//             </button>
//           </div>
//         </div>
//       );
//     });

//   const pageCount = Math.ceil(users.length / usersPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <div className="App">
//       {displayUsers}
//       <div style={{ marginLeft: "90%" }}>
//         <ReactPaginate
//           previousLabel={"Previous"}
//           nextLabel={"Next"}
//           pageCount={pageCount}
//           onPageChange={changePage}
//           containerClassName={"paginationBttns"}
//           previousLinkClassName={"previousBttn"}
//           nextLinkClassName={"nextBttn"}
//           disabledClassName={"paginationDisabled"}
//           activeClassName={"paginationActive"}
//         />
//       </div>
//     </div>
//   );
// }

// export default ViewUser;
