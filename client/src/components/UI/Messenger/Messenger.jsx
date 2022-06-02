import React, { useEffect, useState, useRef, useContext } from "react";
import socket from "../../../socket";
import { SocketContext } from "../../../Contexte/socketContext";
import "./Messenger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
function Messenger({ setIsMessenger, display, roomId }) {
  let time = moment(new Date()).format("hh:mm A");
  const currentUser = sessionStorage.getItem("user");
  const [text, setText] = useState("");
  const [msg, setMsg] = useState([]);
  const messagesEndRef = useRef(null);
  const { chat } = useContext(SocketContext);
  useEffect(() => {
    socket.on("FE-receive-message", ({ msg, sender }) => {
      setMsg((msgs) => [...msgs, { sender, msg }]);
    });
  }, []);

  // Scroll to Bottom of Message List
  useEffect(() => {
    scrollToBottom();
  }, [msg]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = (e) => {
    if (text !== "") {
      socket.emit("BE-send-message", {
        roomId,
        msg: text,
        sender: currentUser,
        time,
      });
      setText("");
    }
  };
  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting details</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setIsMessenger(false);
          }}
        />
      </div>

      <div className="messenger-header-tabs">
        <div className="tab">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>People (1)</p>
        </div>
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
        {chat &&
          chat.map(({ sender, msg, time }, idx) => {
            return (
              <div key={idx} className="chat-block">
                <div className="sender">
                  {sender} <small>{time}</small>
                </div>
                {/* <p className="msg">here commes an actual msg </p> */}
                <p className="msg">{msg} </p>
              </div>
            );
          })}
        <div style={{ float: "left", clear: "both" }} ref={messagesEndRef} />
      </div>

      <div className="send-msg-section">
        <input
          placeholder="Send a message to everyone"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div onClick={sendMessage}>
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
