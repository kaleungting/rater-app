import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBusiness(this.props.business[0].id);
  }
  render() {
    const { reviewers, currentUser } = this.props;
    let reviewList;
    if (this.props.reviews !== {} || this.props.reviews !== undefined) {
      reviewList = this.props.reviews
        .reverse()
        .map((review, idx) => (
          <ReviewIndexItem
            key={idx}
            review={review}
            reviewer={reviewers[review.author_id]}
            currentUser={currentUser}
            deleteReview={this.props.deleteReview}
            fetchBusiness={this.props.fetchBusiness}
          />
        ));
    } else {
      reviewList = <div></div>;
    }
    return <div>{reviewList}</div>;
  }
}

export default ReviewIndex;
