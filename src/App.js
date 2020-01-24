import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

//components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/layout/Login";
import Main from "./components/home/Main";
import Newpost from "./components/home/Newpost";
import Posts from "./components/post/Posts";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Login} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/Newpost" component={Newpost} />
              <Route exact path="/Posts" component={Posts} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
