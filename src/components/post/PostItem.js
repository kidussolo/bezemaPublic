import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

import { deletePost, addLike } from "../../actions/postAction";

class PostItem extends Component {
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
  // Delete a post
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  // Edit a post
  onEditClick(id) {
    this.props.editPost(id);
  }
  // Add a like on like button press
  onLikeClick(id) {
    this.props.addLike(id);
  }
  // Find number of likes for a comment
  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
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
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike })(PostItem);
