import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { reviewers, currentUser } = this.props;
    const reviews = this.props.reviews.reverse().map((review, idx) => {
      return (
        <ReviewIndexItem
          key={idx}
          review={review}
          reviewer={reviewers[review.author_id]}
          currentUser={currentUser}
        />
      );
    });

    return <div>{reviews}</div>;
  }
}

export default ReviewIndex;
