import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    return <div>{this.props.review.body}</div>;
  }
}

export default ReviewIndexItem;
