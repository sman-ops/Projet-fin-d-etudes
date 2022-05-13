import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCommentAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./CallPageHeader.scss";
function CallPageHeader({
  isMessenger,
  setIsMessenger,
  messageAlert,
  setMessageAlert,
}) {
  return (
    <div className="frame-header">
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon" icon={faUserFriends} />
      </div>
      <div
        className="header-items icon-block"
        onClick={() => {
          setIsMessenger(true);
          setMessageAlert({});
        }}
      >
        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        <span className="alert-circle-icon"></span>
      </div>
      <div className="header-items date-block">1:30pm</div>
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
      </div>
    </div>
  );
}

export default CallPageHeader;
