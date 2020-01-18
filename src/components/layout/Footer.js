import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-white text-red mt-3 p-2 text-center ">
        Copyright &copy;
        {new Date().getFullYear()} Yesu It soultions
      </footer>
    );
  }
}

export default Footer;
