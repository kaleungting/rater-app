import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.review.body}</div>
        <div>{this.props.reviewer.first_name}</div>
        <div>{this.props.reviewer.last_name}</div>
      </div>
    );
  }
}

export default ReviewIndexItem;
