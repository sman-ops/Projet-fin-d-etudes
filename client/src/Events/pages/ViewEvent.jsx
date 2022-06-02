import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";

function ViewEvent() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [typeEvent, setTypeEvent] = useState("");
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getSingleUser();
  }, []);

  const getSingleUser = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/event/${id}`);
    setTitle(data.title);
    setStart(data.start);
    setEnd(data.end);
    setTypeEvent(data.typeEvent);
    setLieu(data.lieu);
    setDescription(data.description);
  };

  return (
    <div
      className="user"
      style={{
        width: "100%",
        marginLeft: "5%",
        height: "90%",
        marginRight: "5%",
        position: "relative",
        paddingBottom: 40,
        paddingInline: 20,
      }}
    >
      <div
        style={{
          background: "#6495ED",
          width: "150px",
          color: "white",
          padding: "10px",
          borderRadius: 7,
          textAlign: "center",
          position: "absolute",
          top: -23,
        }}
      >
        Present Event
      </div>
      <h3>
        Name of event :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{title}{" "}
      </h3>
      <h3 style={{ marginLeft: "6%", marginBottom: "25px", marginTop: "25px" }}>
        Start in :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {start}
      </h3>
      <h3 style={{ marginLeft: "7%", marginBottom: "25px" }}>
        {" "}
        End in :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {end}
      </h3>

      <h3 style={{ marginLeft: "-3%", marginBottom: "25px" }}>
        Type of event :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {typeEvent}
      </h3>
      <h3 style={{ marginLeft: "0%", marginBottom: "25px" }}>
        {" "}
        Location :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {lieu}
      </h3>
      <h3 style={{ marginLeft: "9%", marginBottom: "25px" }}>
        Details :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {description}
      </h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ViewEvent;
