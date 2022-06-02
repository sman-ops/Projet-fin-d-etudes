import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { UserData } from "./Data";
import { Chart as ChartJS } from "chart.js/auto";
import { Col, Row, Card, Container } from "react-bootstrap";
import axios from "axios";
import Linechart from "./Linechart";
import Lineechart from "./Lineechart";
function Dashboard() {
  // const [userDATA, setUserData] = useState({
  //   labels: months,
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],

  //       borderWidth: 2,
  //     },
  //   ],
  // });
  const [countusers, setCountUsers] = useState("");
  const [countpresevents, setPreEvents] = useState("");
  const [countonlineevents, setOnlineEvents] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/countusers").then((result) => {
      setCountUsers(result.data.users);
      // console.log(result.data.users);
    });
  });
  useEffect(() => {
    axios.get("http://localhost:3001/countPevents").then((resultat) => {
      setPreEvents(resultat.data.events);
      // console.log(result.data.users);
    });
  });
  useEffect(() => {
    axios.get("http://localhost:3001/countOEvents").then((online) => {
      setOnlineEvents(online.data.eventsonline);
      // console.log(result.data.users);
    });
  });

  return (
    <Container>
      <Row>
        <Row className="mt-12 ml-md-5  d-flex justify-content-center mb-5 ">
          <Col md={4}>
            <Card
              style={{ width: "270px", height: "130px" }}
              className=" shadow mt-md-2  rounded"
            >
              <Card.Body>
                <Row>
                  <Col>
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                      Nouveaux
                    </span>
                    <span className="h3 font-bold mb-0">{countusers}</span>{" "}
                  </Col>
                  <div className="">
                    <div
                      className="icon icon-shape bg-primary text-white text-lg rounded-circle"
                      style={{ width: "40px", paddingLeft: "10px" }}
                    >
                      {" "}
                      <i className="bi bi-people" />{" "}
                    </div>
                  </div>
                </Row>
                <div className="mt-2 mb-0 text-sm">
                  <span className="badge badge-pill bg-soft-success text-success me-2">
                    <i className="bi bi-arrow-up me-1" />
                  </span>
                  <span className="text-nowrap text-xs text-muted">
                    Number of users
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{ width: "270px", height: "130px" }}
              className=" shadow mt-md-2  rounded"
            >
              <Card.Body>
                <Row>
                  <Col>
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                      Nouveaux
                    </span>{" "}
                    <span className="h3 font-bold mb-0">{countpresevents}</span>{" "}
                  </Col>
                  <div className="">
                    <div
                      className="icon icon-shape bg-primary text-white text-lg rounded-circle"
                      style={{ width: "40px", paddingLeft: "10px" }}
                    >
                      {" "}
                      <i className="bi bi-calendar2-event"></i>
                    </div>
                  </div>
                </Row>
                <div className="mt-2 mb-0 text-sm">
                  {" "}
                  <span className="badge badge-pill bg-soft-success text-success me-2">
                    {" "}
                    <i className="bi bi-arrow-up me-1 " />
                  </span>{" "}
                  <span className="text-nowrap text-xs text-muted">
                    Event Presentiel
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{ width: "270px", height: "130px" }}
              className=" shadow mt-md-2 rounded"
            >
              <Card.Body>
                <Row>
                  <Col>
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                      Nouveaux
                    </span>{" "}
                    <span className="h3 font-bold mb-0">
                      {countonlineevents}
                    </span>{" "}
                  </Col>
                  <div className="">
                    <div
                      className="icon icon-shape bg-primary text-white text-lg rounded-circle"
                      style={{ width: "40px", paddingLeft: "10px" }}
                    >
                      <i className="bi bi-calendar2-event"></i>
                    </div>
                  </div>
                </Row>
                <div className="mt-2 mb-0 text-sm">
                  {" "}
                  <span className="badge badge-pill bg-soft-success text-success me-2">
                    {" "}
                    <i className="bi bi-arrow-up me-1" />
                  </span>{" "}
                  <span className="text-nowrap text-xs text-muted">
                    Event Online
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Col md={6}>
          <div style={{ width: 500, height: 300 }}>
            {/* <Bar data={userDATA} /> */}
            {/* <Pie data={userDATA} />{" "}  */}
            <Linechart />
          </div>
        </Col>
        <Col md={6}>
          <div style={{ width: 500, height: 300 }}>
            {/* <Bar data={userDATA} />
        <Pie data={userDATA} />{" "} */}
            <Lineechart />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
