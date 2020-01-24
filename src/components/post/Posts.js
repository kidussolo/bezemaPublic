import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/postAction";
import { spinner } from "../utils/Spinner";
import PostFeed from "./PostFeed";

class Posts extends Component {
  compononentDidMount() {
    this.props.getPosts();
  }

  render() {
    //   distructoring posts and loading from post props
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
