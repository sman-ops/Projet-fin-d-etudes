import React, { useState, useEffect } from "react";
import { listSalon } from "../functions/Salon";
import ReactPaginate from "react-paginate";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./salon.css";
function ListEventOnline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listSalon()
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
          <h4>Online Event</h4>
          <div style={{ marginLeft: "400px", marginBottom: "5%" }}>
            <VisibilityOutlinedIcon color="primary" />
          </div>

          <h3>{event.title}</h3>
          <h3>{event.start}</h3>
          <h3>{event.end}</h3>

          <div style={{ marginTop: "5%" }}>
            <button
              type="button"
              style={{ height: "55px", width: "90px", borderRadius: "3px" }}
              class="btn btn-inverse-info btn-fw"
            >
              Present
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              style={{ height: "55px", width: "90px", borderRadius: "3px" }}
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

export default ListEventOnline;
