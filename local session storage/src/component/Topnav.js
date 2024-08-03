import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Topnav() {
  let highlightActiveLink = (obj) => {
    if (obj.isActive == true) {
      return {
        backgroundColor: "green",
        color: "white",
        padding: "10px",
      };
    }
  };
  return (
    <nav>
      <NavLink
        style={(obj) => {
          return highlightActiveLink(obj);
        }}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={(obj) => {
          return highlightActiveLink(obj);
        }}
        to="/tasks"
      >
        Tasks
      </NavLink>
      <NavLink
        style={(obj) => {
          return highlightActiveLink(obj);
        }}
        to="/messages"
      >
        Messages
      </NavLink>
      <NavLink
        style={(obj) => {
          return highlightActiveLink(obj);
        }}
        to="/leaves"
      >
        Leaves
      </NavLink>
      <NavLink
        to="/"
        onClick={() => {
          localStorage.clear();
        }}
      >
        signout
      </NavLink>
    </nav>
  );
}

export default Topnav;
