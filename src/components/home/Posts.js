import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      img: "",
      loading: false,
      errors: {}
    };
  }
  render() {
    return (
      <div
        className="card mb-3 mx-auto"
        style={{
          width: "50rem"
        }}
      >
        <div className="card-header">
          <div className="row">
            <div className="col-1">
              <img
                className="rounded-circle d-none d-md-block"
                src="logo192.png"
                alt=""
                width="50px"
                height="50px"
              />
            </div>
            <div className="col-11">
              <h1>Bezema</h1>
            </div>
          </div>
        </div>
        <div className="card-text">
          <p className="lead m-2">
            SSH is an alternate, secure way to connect to GitHub. It's
            convenient because once it's properly set up, you won't have to type
            your username and password every time you push or pull from a GitHub
            repo. But setting it up does require some experience with the
            terminal.
          </p>
        </div>
        <div className="card-body">
          <img
            className="card-img-bottom "
            src="photo1130.jpg"
            alt=""
            height="300"
          />
        </div>
        <div className="card-body">
          <span>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-info fas fa-thumbs-up" />
              <span className="badge badge-light">4</span>
            </button>
            <Link className="btn btn-info mr-1">Comments</Link>
          </span>
        </div>
        <div className="card-footer ">
          <button className="btn btn-primary mr-3 ">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>

      //   <div className="card mb-3 ">
      //     {/*for the image and title part with column length of 1 and 11*/}
      //     <div className="row">
      //       {/*For the image part*/}
      //       <div className="col-1">
      //         <a href="profile.html">
      //           <img
      //             className="rounded-circle d-none d-md-block align-right"
      //             src="logo192.png"
      //             alt=""
      //             width="20px"
      //             height="20px"
      //           />
      //         </a>
      //       </div>
      //       {/*For the title part*/}
      //       <div className="col-11">
      //         <p className="text-left">Title for the post will go here</p>
      //       </div>
      //     </div>

      //     {/*For the description about the post part*/}
      //     <div className="card-img-overlay ">
      //       <p className="lead">
      //         SSH is an alternate, secure way to connect to GitHub. It's
      //         convenient because once it's properly set up, you won't have to type
      //         your username and password every time you push or pull from a GitHub
      //         repo. But setting it up does require some experience with the
      //         terminal.
      //       </p>
      //     </div>
      //     <a href="profile.html">
      //       <img
      //         className="card-img-bottom"
      //         src="logo192.png"
      //         alt=""
      //         width="100px"
      //         height="400px"
      //       />
      //     </a>

      //     {true ? (
      //       <span>
      //         <button type="button" className="btn btn-light mr-1">
      //           <i className="text-info fas fa-thumbs-up" />
      //           <span className="badge badge-light">4</span>
      //         </button>
      //         <button type="button" className="btn btn-light mr-1">
      //           <i className="text-secondary fas fa-thumbs-down" />
      //         </button>
      //         <Link className="btn btn-info mr-1">Comments</Link>
      //         {true ? (
      //           <button type="button" className="btn btn-danger mr-1">
      //             <i className="fas fa-times" />
      //           </button>
      //         ) : null}
      //       </span>
      //     ) : null}
      //     <div className="card-header float-right">
      //       <div className="btn btn-primary">edit</div>
      //       <div className="btn btn-primary">delete</div>
      //     </div>
      //   </div>
    );
  }
}

export default Posts;
