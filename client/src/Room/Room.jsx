import React, { useState, useEffect } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "../users/paginate.css";
function Room() {
  const [rooms, setRooms] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const navigate = useNavigate();

  const getRooms = async () => {
    const { data } = await axios.get("http://localhost:3001/allRoom");

    setRooms(data.result);
  };
  useEffect(() => {
    getRooms();
  }, []);

  const pageCount = Math.ceil(rooms.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div style={{ marginBottom: "2%", marginLeft: "1%" }}>
        <Grid item xs={8} sm={3} minWidth={2} mt={5} ml={1}>
          <input
            style={{
              width: "35%",
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
      <Container>
        <Row className="mt-5 mb-5 ">
          {rooms
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.EventOnline.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((item, key) => (
              <Col md={4}>
                <Card
                  onClick={() => {
                    navigate(`/viewroom/${item.id}`);
                  }}
                  style={{
                    width: "280px",
                    height: "150px",
                    border: "1px solid #E6552D",
                  }}
                  className=" shadow mt-md-2 rounded"
                >
                  <Card.Body>
                    <Row>
                      <Col>
                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                          Room
                        </span>
                        <span
                          className="h4 font-bold mb-0"
                          style={{ marginBottom: "10%" }}
                        >
                          Title : {item.EventOnline.title}
                        </span>
                        <br />

                        <span className="h5 font-bold mb-0 mt-1">
                          {" "}
                          url : {item.url}
                        </span>
                      </Col>
                      <div className="">
                        <div
                          className="icon icon-shape bg-primary text-white text-lg rounded-circle"
                          style={{ width: "40px", paddingLeft: "10px" }}
                        >
                          <i
                            className="fa fa-video-camera"
                            style={{ height: "25px" }}
                          ></i>
                        </div>
                      </div>
                    </Row>

                    <div className="mt-2 mb-0 text-sm">
                      <span className="text-nowrap text-xs text-muted"></span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <div style={{ marginLeft: "10%", marginTop: "5%" }}>
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
          breakLinkClassName={{
            background: "red",
          }}
        />
      </div>
    </div>
  );
}

export default Room;
