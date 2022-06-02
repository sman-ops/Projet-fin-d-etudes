import React, { useState, useEffect } from "react";
import { listSalon } from "../functions/Salon";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./salon.css";
function ListEventOnline() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
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
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = events
    .filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })

    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((event) => {
      return (
        <div
          className="user"
          onClick={() => {
            navigate(`/vieweventOnline/${event.id}`);
          }}
        >
          <img
            src="assets/images/event.png"
            style={{
              width: "15%",
              marginRight: "70%",
              marginTop: "4%",
              marginBottom: "10px",
            }}
            alt="logo"
          />
          <div
            style={{
              background: "#6495ED",
              width: "150px",
              color: "white",
              padding: "10px",
              borderRadius: 7,
              textAlign: "center",
            }}
          >
            Online event
          </div>

          <div style={{ marginLeft: "400px", marginBottom: "15%" }}>
            {/* <VisibilityOutlinedIcon color="primary" /> */}
          </div>

          <h3 style={{ marginBottom: "30%" }}>
            Name of the event : {event.title}
          </h3>

          {/* <div style={{ marginTop: "5%" }}>
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

export default ListEventOnline;
