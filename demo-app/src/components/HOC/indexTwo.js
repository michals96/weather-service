import React, { Component } from "react";
import { dataSrc } from "./datasrc";
import withSubscription from "./indexThree";

class BlogPost extends React.Component {
  render() {
    return <div>{this.props.data}</div>;
  }
}

export default withSubscription(BlogPost, (dataSrc, props) => {
    return dataSrc.getBlogPost(props.id);
});