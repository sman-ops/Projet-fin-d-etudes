import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
function ViewEvenOnline() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [typeEvent, setTypeEvent] = useState("");
  const [languageEvent, setLanguageEvent] = useState("");
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    getSingleOnlineEvent();
    getParticipantsByEvent();
  }, []);

  const getParticipantsByEvent = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/participantsonline/${id}`
    );

    console.log(data, "daaas");
    setParticipants(data?.result);
  };

  const getSingleOnlineEvent = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/api/getEventOnline/${id}`
    );
    setTitle(data.title);
    setStart(data.start);
    setEnd(data.end);
    setDescription(data.description);
    setLanguageEvent(data.langueEvent);
    setTypeEvent(data.typeEvent);
  };

  const keys = useMemo(
    () => [
      {
        key: "Name of event",
        value: title,
      },
      {
        key: "Event Start in",
        value: start,
      },
      {
        key: " Event End in  ",
        value: end,
      },

      {
        key: "Type of event",
        value: typeEvent,
      },
      {
        key: "Langue event",
        value: languageEvent,
      },
      {
        key: "Description  ",
        value: description,
      },
    ],
    [end, description, start, title, typeEvent, languageEvent]
  );

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        width: "100%",
        paddingInline: 55,
        paddingBlock: 20,
        background: "white",
        borderRadius: 15,
        marginTop: 50,
        border: "1px solid #e6552d ",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          background: "#e6552d",
          padding: 7,
          color: "white",
          fontWeight: "bold",
          borderRadius: 15,
          width: "40%",
          alignSelf: "center",
        }}
      >
        Online Event
      </div>
      {keys.map((i, index) => (
        <div className="d-flex justify-content-start align-items-center">
          <h3 key={index} style={{ marginBottom: 20, fontSize: "15px" }}>
            {i.key} :
          </h3>
          <p className="ml-20" style={{ marginLeft: "30%", fontSize: "15px" }}>
            {i.value}
          </p>
        </div>
      ))}

      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          background: "#e6552d",
          padding: 7,
          color: "white",
          fontWeight: "bold",
          borderRadius: 15,
          width: "40%",
          alignSelf: "center",
        }}
      >
        Event Participants
      </div>
      {participants.length > 0 ? (
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{el.id}</td>
                  <td>{el.firstname}</td>
                  <td>{el.lastname}</td>
                  <td>{el.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div
          style={{
            background: "#f6f0ea",
            padding: 15,
            borderRadius: 5,
            fontFamily: "Rubik, sans-serif",
          }}
          className="d-flex align-items-center justify-content-center align-self-center"
        >
          There is no participants for this event
        </div>
      )}
    </div>
  );
}

export default ViewEvenOnline;
