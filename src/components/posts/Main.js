import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="contaier">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href="#home" className="nav-link active" data-toggle="tab">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#profile" className="nav-link" data-toggle="tab">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="#messages" className="nav-link" data-toggle="tab">
              Messages
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="home">
            <p>Home tab content ...</p>
          </div>
          <div className="tab-pane fade" id="profile">
            <p>Profile tab content ...</p>
          </div>
          <div className="tab-pane fade" id="messages">
            <p>Messages tab content ...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
