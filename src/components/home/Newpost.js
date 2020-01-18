import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";

class Newpost extends Component {
  // Component state
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      image: "",
      loading: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image
    };
    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div id="Newpost" className="container-fluid">
        <h1 className="text-center">New Post</h1>
        <p className="lead text-center">Add New Public Post to Bezema</p>
        <form role="form " onSubmit={this.onSubmit}>
          <div className="form-group ">
            <label class="sr-only" for="email">
              Title:
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label class="sr-only" for="pwd">
              Description:
            </label>
            <textarea
              type="password"
              name="description"
              className="form-control"
              placeholder="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label for="fileupload"> Select image to upload</label>
            <input
              type="file"
              name="image"
              className="form-control"
              placeholder="image"
              value={this.state.image}
              onChange={this.onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary  btn-block float-right"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

// Map any property in the component to proptypes and defines its datatype and wheter it is required
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Get state to our component props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect()(Newpost);
