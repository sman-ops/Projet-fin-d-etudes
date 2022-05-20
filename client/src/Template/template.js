import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import TodayIcon from "@mui/icons-material/Today";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

function Template({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const { id } = user;

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");

  const getSingleUser = async () => {
    const { data } = await axios.get(`http://localhost:3001/user/${id}`);
    setFirstName(data.firstname);
    setLastName(data.lastname);
    setAvatar(data.picture);
  };

  useEffect(() => {
    getSingleUser();
  }, [id]);

  // const user=localStorage.getItem("user")
  return (
    <div className="container-scroller">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src="assets/images/logo-talan.png" alt="logo" />
          </a>
          <a
            className="sidebar-brand brand-logo-mini pl-4 pt-3"
            href="index.html"
          >
            <img src="assets/images/logo-mini.svg" alt="logo" />
          </a>
        </div>

        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img
                  src={`http://localhost:3001/Images/${avatar}`}
                  alt="profile"
                />
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column pr-3">
                <span className="font-weight-medium mb-2">{firstname}</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="mdi mdi-home menu-icon"></i>
              <Link to="/template">
                <span className="menu-title">Dashboard</span>
              </Link>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#event"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <TodayIcon color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="menu-title">Event</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="event">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link to="/listeventsPresentiel">
                    <a
                      className="nav-link"
                      href="pages/ui-features/buttons.html"
                    >
                      Liste event presentiel
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/addevent">
                    <a
                      className="nav-link"
                      href="pages/ui-features/dropdowns.html"
                    >
                      Add Event
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/listeventonline">
                    <a
                      className="nav-link"
                      href="pages/ui-features/typography.html"
                    >
                      Liste event en ligne
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <PeopleOutlineIcon color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/user">
                <span className="menu-title">Users</span>
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <PeopleOutlineIcon color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/user">
                <span className="menu-title">Salon</span>
              </Link>
            </a>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="pages/forms/basic_elements.html">
              <PersonAddIcon color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/adduser">
                <span className="menu-title"> ADD Users</span>
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <i className="mdi mdi-chart-bar menu-icon"></i>
              <Link to="/edituser/:id">
                <span className="menu-title"> edit Users</span>
              </Link>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <TodayIcon color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/event">
                <span className="menu-title"> Event</span>
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <TodayIcon color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/listevents">
                <span className="menu-title"> List of events</span>
              </Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <TodayIcon color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/salon">
                <span className="menu-title"> Event EN ligne</span>
              </Link>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <i className="mdi mdi-table-large menu-icon"></i>
              <Link to="/view">
                <span className="menu-title"> view user</span>
              </Link>
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <i className="mdi mdi-table-large menu-icon"></i>
              <Link to="/homepage">
                <span className="menu-title"> Join room</span>
              </Link>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              <i
                className="mdi mdi-logout mr-2 text-primary"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                logout
              </i>
            </a>
          </li>
        </ul>
      </nav>

      <div className="container-fluid page-body-wrapper">
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close mdi mdi-close"></i>
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div
            className="sidebar-bg-options selected"
            id="sidebar-default-theme"
          >
            <div className="img-ss rounded-circle bg-light border mr-3"></div>{" "}
            Default
          </div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-dark border mr-3"></div>{" "}
            Dark
          </div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles light"></div>
            <div className="tiles dark"></div>
          </div>
        </div>
        <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
          <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
            <a
              className="navbar-brand brand-logo-mini align-self-center d-lg-none"
              href="index.html"
            >
              <img src="assets/images/logo-mini.svg" alt="logo" />
            </a>
            <button
              className="navbar-toggler navbar-toggler align-self-center mr-5"
              type="button"
              data-toggle="minimize"
            >
              <i className="mdi mdi-menu"></i>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item nav-search border-0 ml-1 ml-md-1 ml-lg-2 d-none d-md-flex">
                <form className="nav-link form-inline mt-2 mt-md-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-magnify"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-bell-outline"></i>
                  <span
                    className="count count-varient1"
                    style={{ color: "blue" }}
                  >
                    7
                  </span>
                </a>
                <div
                  className="dropdown-menu navbar-dropdown navbar-dropdown-large preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="assets/images/faces/face4.jpg"
                        alt=""
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0">
                        {" "}
                        Dany Miles{" "}
                        <span className="text-small text-muted">
                          commented on your photo
                        </span>
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="assets/images/faces/face3.jpg"
                        alt=""
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0">
                        {" "}
                        James{" "}
                        <span className="text-small text-muted">
                          posted a photo on your wall
                        </span>
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="assets/images/faces/face2.jpg"
                        alt=""
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0">
                        {" "}
                        Alex{" "}
                        <span className="text-small text-muted">
                          just mentioned you in his post
                        </span>
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0">View all activities</p>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right ml-lg-auto">
              <li className="nav-item dropdown d-none d-xl-flex border-0">
                <a
                  className="nav-link dropdown-toggle"
                  id="languageDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-earth"></i> English{" "}
                </a>
                <div
                  className="dropdown-menu navbar-dropdown"
                  aria-labelledby="languageDropdown"
                >
                  <a className="dropdown-item" href="#">
                    {" "}
                    French{" "}
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Spain{" "}
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Latin{" "}
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Japanese{" "}
                  </a>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown border-0">
                <a
                  className="nav-link dropdown-toggle"
                  id="profileDropdown"
                  data-toggle="dropdown"
                >
                  <img
                    className="nav-profile-img mr-2"
                    alt=""
                    src={`http://localhost:3001/Images/${avatar}`}
                  />
                  <span className="profile-name">{firstname}</span>
                </a>
                <div
                  className="dropdown-menu navbar-dropdown w-100"
                  aria-labelledby="profileDropdown"
                >
                  <a className="dropdown-item" href="/">
                    <i
                      className="mdi mdi-logout mr-2 text-primary"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                      }}
                    >
                      logout
                    </i>
                  </a>
                  <a className="dropdown-item" href="#">
                    <Link to="/profile1">
                      <i className="mdi mdi-cached mr-2 text-success"></i>{" "}
                      Profile
                    </Link>
                  </a>
                </div>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        <div className="main-panel">
          <div className="row mt-2 mx-1">
            <div className="col-xl-12 col-xs-6 grid-margin stretch-card">
              {/* content will be changed as we change th children */}

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
