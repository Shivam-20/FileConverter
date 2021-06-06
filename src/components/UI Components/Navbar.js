import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
// import AuthHelper from "../../utils/auth/authhelper";
// import ToastPopUp from "../ToastMsg/ToastPopUp";

const Nav = () => {
//   let user = useSelector((state) => state.user.currentUser);
//   let { message, isError, toastPop } = useSelector(
    // (state) => state.notification
//   );
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const toggleToast = () => {
//     dispatch({
//       type: "SET_CURRENT_NOTIFICATION_FALSE",
//       payload: { toastPop: false },
//     });
//   };


  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <ToastPopUp
          onClose={toggleToast}
          show={toastPop}
          delay={!isError}
          messageBody={message}
          isError={isError}
        /> */}
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item px-3">
              <NavLink className="navbar-brand mx-auto" to="/">
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
            </li>
            <li className="nav-item dropdown px-3">
              <div
                className="nav-link dropdown-toggle"
                id="mobileDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mobile
              </div>
              <div
                className="dropdown-menu dropdown-menu"
                aria-labelledby="mobileDropdown"
              >
                <NavLink className="dropdown-item" to="/addmobile">
                  Add Mobile
                </NavLink>
                {/* <div className="dropdown-divider"></div> */}
                <NavLink className="dropdown-item" to="/mobiles">
                  View Mobiles
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown px-3">
              <div
                className="nav-link dropdown-toggle"
                id="mobileDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Request
              </div>
              <div
                className="dropdown-menu dropdown-menu"
                aria-labelledby="mobileDropdown"
              >
                <NavLink className="dropdown-item" to="/rdevice">
                  Request Device
                </NavLink>
                {/* <div className="dropdown-divider"></div> */}
                <NavLink className="dropdown-item" to="/ralldevice">
                  View Requests
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown px-3">
              <div
                className="nav-link dropdown-toggle"
                id="mobileDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Issue
              </div>
              <div
                className="dropdown-menu dropdown-menu"
                aria-labelledby="mobileDropdown"
              >
                <NavLink className="dropdown-item" to="/issueddevice">
                  Issued Devices
                </NavLink>
                {/* <div className="dropdown-divider"></div> */}
                <NavLink className="dropdown-item" to="/retrundevice">
                  Return Device
                </NavLink>
              </div>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <NavLink className="navbar-brand mx-auto" to="/">
            IMC
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
