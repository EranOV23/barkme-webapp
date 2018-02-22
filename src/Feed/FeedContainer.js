import React, { Component } from "react";
import Feed from "./Feed";
import gql from "graphql-tag";
import { graphql } from "react-apollo/index";

const POSTS_QUERY = gql`
  {
    posts {
      userId
      userImage
      title
      body
      image
      video
    }
  }
`;

class FeedContainer extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (data.posts) {
      console.log(data.posts);
      this.setState({ posts: data.posts });
    }
  }

  render() {
    const { posts } = this.state;
    return <Feed posts={posts} />;
  }
}

export default graphql(POSTS_QUERY)(FeedContainer);
