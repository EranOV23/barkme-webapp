import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;

class Feed extends Component {
  renderCover = post => {
    if (post.image) {
      return <img src={post.image} alt={post.title} />;
    } else if (post.video) {
      return (
        <video width="100%" controls>
          <source src={post.video} type="video/mp4" />
        </video>
      );
    }
    return null;
  };

  renderPosts = () => {
    const { posts } = this.props;
    if (posts) {
      return posts.map(post => {
        return (
          <Card
            key={post.id}
            style={{ width: "50%", marginBottom: 20 }}
            cover={this.renderCover(post)}
            actions={[
              <Icon type="setting" />,
              <Icon type="edit" />,
              <Icon type="ellipsis" />
            ]}
          >
            <Meta
              avatar={<Avatar src={post.userImage} />}
              title={post.title}
              description={post.body}
            />
          </Card>
        );
      });
    }
    return null;
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {this.renderPosts()}
      </div>
    );
  }
}

export default Feed;
