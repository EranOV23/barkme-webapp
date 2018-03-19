import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="layout">
        <div>
          <h1>BarkMe</h1>
        </div>
        <div>
          <NavLink to="/">News feed</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
