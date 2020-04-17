import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    const { reviewers, currentUser } = this.props;
    const reviews = this.props.reviews.reverse().map((review, idx) => (
        <ReviewIndexItem
          key={idx}
          review={review}
          reviewer={reviewers[review.author_id]}
          currentUser={currentUser}
          deleteReview={this.props.deleteReview}
          fetchBusiness={this.props.fetchBusiness}
        />
      ));

    return <div>{reviews}</div>;
  }
}

export default ReviewIndex;
