import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    // this.props.fetchReviews(this.props.business.id);
  }

  render() {
    // const { reviewers } = this.props;
    // debugger;
    const reviews = this.props.reviews.reverse().map((review, idx) => {
      return (
        <ReviewIndexItem
          key={idx}
          review={review}
          fetchReview={this.props.fetchReviews}
          businessId={review.business_id}
          //   reviewer={reviewers[review.author_id]}
        />
      );
    });

    return <div>{reviews}</div>;
  }
}

export default ReviewIndex;
