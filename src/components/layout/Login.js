import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authAction";
import PropTypes from "prop-types";

class Login extends Component {
  // Component state
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      rememberMe: "",
      loading: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div id="login" className="container-fluid">
        <h1 className="text-center">Sign In</h1>
        <p className="lead text-center">
          Sign In to Bezema Public Posts Admin Page
        </p>
        <form noValidate role="form " onSubmit={this.onSubmit}>
          <div className="form-group ">
            <label class="sr-only" for="email">
              Email address:
            </label>
            <input
              className={classnames({
                "is-invalid": errors
              })}
              type="email"
              name="email"
              className="form-control"
              placeholder="username or email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <label class="sr-only" for="pwd">
              Password:
            </label>
            <input
              className={classnames({
                "is-invalid": errors
              })}
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="rememnerMe"
                value={this.state.rememberMe}
                onChange={this.onChange}
              />{" "}
              Remember me
            </label>
          </div>
          <Link to="/main">
            <button
              type="submit"
              className="btn btn-primary  btn-block float-right"
            >
              Login
            </button>
          </Link>
        </form>
        <div id="form-footer">
          <Link to="/reset"> Forgot password ?</Link>
        </div>
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

export default connect(mapStateToProps, { loginUser })(Login);
