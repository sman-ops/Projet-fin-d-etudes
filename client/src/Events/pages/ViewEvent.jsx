import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
        height: "65%",
        marginRight: "5%",
      }}
    >
      <h2
        style={{ background: "#6495ED", color: "white", borderRadius: "3px" }}
      >
        Present Event
      </h2>
      <div>
        <h3>Name of event&nbsp; {title}</h3>
        <h3>Start in {start}</h3>
      </div>
      <h3>Name of event&nbsp; {title}</h3>
      <h3>Start in {start}</h3>
      <h3>End in {end}</h3>
      <h3>type of event {typeEvent}</h3>
      <h3>location {lieu}</h3>
      <h3>Details {description}</h3>
    </div>
  );
}

export default ViewEvent;
