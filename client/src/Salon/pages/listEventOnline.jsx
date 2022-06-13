import React, { useState, useEffect } from "react";
import { listSalon } from "../functions/Salon";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PreviewIcon from "@mui/icons-material/Preview";
import "./salon.css";
import axios from "axios";
function ListEventOnline() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [presence, setPresence] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = user;
  console.log(id);

  const Participate = async (event, user) => {
    const data = {
      EventOnlineId: event,
      UserId: user,
    };

    await axios
      .post("http://localhost:3001/presenceonlineUser", data)
      .then((result) => {
        console.log(result);
        loadData();
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    listSalon()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const result = await axios.get("http://localhost:3001/AllPresenceOnline");
    // console.log(result);
    setPresence(result.data.result);
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
      let presenc = null;
      console.log(event.id);

      presenc = presence.find(
        ({ EventOnlineId, UserId }) =>
          EventOnlineId === event.id && UserId === id
      );
      return (
        <div className="user">
          <img
            src="assets/images/event.png"
            style={{
              width: "15%",
              marginRight: "70%",
              marginTop: "4%",
              marginBottom: "1px",
            }}
            alt="logo"
          />
          <div
            style={{ marginLeft: "400px", marginBottom: "1%", marginTop: "1%" }}
          >
            <PreviewIcon
              color="primary"
              onClick={() => {
                navigate(`/vieweventOnline/${event.id}`);
              }}
            />
          </div>
          <div
            style={{
              background: "#6495ED",
              width: "150px",
              color: "white",
              padding: "10px",
              borderRadius: 7,
              textAlign: "center",
              background: "#E6552D",
              marginBottom: "8%",
            }}
          >
            Online event
          </div>

          <h3 style={{ marginBottom: "5%", height: "50%" }}>
            Name of the event : {event.title}
          </h3>

          <div style={{ marginBottom: "15%" }}>
            {presenc ? (
              <div style={{ marginTop: "5%", color: "#E6552D" }}>
                You are participated in this event Thank you.
              </div>
            ) : (
              <button
                type="button"
                style={{
                  height: "55px",
                  width: "90px",
                  borderRadius: "3px",
                  backgroundColor: "#E6552D",
                }}
                onClick={() => Participate(event.id, id)}
              >
                Participate
              </button>
            )}
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
      <div style={{ marginBottom: "10%", marginLeft: "1%" }}>
        <Grid item xs={8} sm={3} minWidth={2} mt={5} ml={10}>
          <input
            style={{
              width: "80%",
              borderRadius: 10,
              border: "1px solid #e6552d",
              padding: 7,
            }}
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
