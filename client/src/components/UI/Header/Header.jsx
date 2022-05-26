import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="logotalanaa.png" />
      </div>
    </div>
  );
}

export default Header;
