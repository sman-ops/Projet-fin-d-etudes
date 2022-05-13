import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "./HomePage.scss";
import Header from "../UI/Header/Header";
import socket from "../../socket";

function HomePage() {
  const navigate = useNavigate();
  const roomRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    socket.on("FE-error-user-exist", ({ error }) => {
      if (!error) {
        const roomName = roomRef.current.value;
        const userName = userRef.current.value;

        sessionStorage.setItem("user", userName);
        navigate(`/room/${roomName}`);
      } else {
        swal("Warning!", "User name already exist", "warning");
      }
    });
  }, [navigate]);

  function clickJoin() {
    const roomName = roomRef.current.value;
    const userName = userRef.current.value;
    console.log(roomName);

    if (!roomName || !userName) {
      swal("Warning!", "Enter Room Name or User Name", "warning");
    } else {
      socket.emit("BE-check-user", { roomId: roomName, userName });
    }
  }

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className="action-btn">
              <button className="btn green">
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Email" ref={userRef} />
                </div>
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Room" ref={roomRef} />
                </div>
                <button className="btn no-bg" onClick={clickJoin}>
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="">Learn more</a> about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img
              src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
