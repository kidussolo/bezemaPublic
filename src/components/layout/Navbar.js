import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <a href="" id="welcome" className="nav-link ">
            {" "}
            Wellcome kidus
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            {" "}
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Bezema
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        {authLinks};
      </nav>
    );
  }
}

export default Navbar;
