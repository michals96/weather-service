import React, { Component } from "react";
import { dataSrc } from "./datasrc";
import withSubscription from "./indexThree";

class CommentList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
      </div>
    );
  }
}

export default withSubscription(CommentList, (dataSrc, props) => {
    return dataSrc.getComments();
});