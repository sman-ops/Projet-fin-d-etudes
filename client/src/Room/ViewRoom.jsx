import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewRoom() {
  const [url, setUrl] = useState([]);
  const [message, setMessage] = useState([]);

  const { id } = useParams();
  // console.log(id);

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/roomById/${id}`);

      if (res.data) {
        setUrl(res.data.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMessage = async () => {
    try {
      const res = await axios.get("http://localhost:3001/allData/" + url.url);

      if (res.data) {
        setMessage(res.data.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getMessage();
  }, [id, url]);

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
        Room details
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>N°</th>
            <th>sender</th>
            <th>msg</th>
            <th>room</th>
          </tr>
        </thead>
        <tbody>
          {message.map((item, key) => (
            <tr>
              <td>{key + 1}</td>
              <td>{item?.sender}</td>
              <td>{item?.msg}</td>
              <td>{item?.room}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewRoom;
