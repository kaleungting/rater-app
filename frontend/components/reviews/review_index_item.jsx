import React from "react";
import { Link, withRouter } from "react-router-dom";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview() {
    this.props
      .deleteReview(this.props.review)
      .then(() => this.props.fetchBusiness(this.props.review.business_id));
  }

  render() {
    const { reviewer, review, currentUser } = this.props;
    const date = review.created_at.slice(0, 10);

    const editReview =
      review.author_id === parseInt(Object.keys(currentUser)) ? (
        <li className="edit-review">
          <i className="material-icons">create</i>
          <Link
            to={`/businesses/${review.business_id}/reviews/${review.id}/edit`}
          >
            Edit Review
          </Link>
        </li>
      ) : (
        <li></li>
      );

    const deleteReview =
      review.author_id === parseInt(Object.keys(currentUser)) ? (
        <button onClick={this.deleteReview} className="delete-review">
          <i className="material-icons">delete</i>
        </button>
      ) : (
        <div></div>
      );

    return (
      <div className="business-review-container">
        <div className="review-sidebar">
          <div className="reviewer-profile">
            <div className="reviewer-photo">
              <img src={reviewer.profile_picture} />
            </div>
            <div className="reviewer-name">
              {reviewer.first_name} {reviewer.last_name}
              <div className="reviewer-address">
                {reviewer.city}, {reviewer.state}
              </div>
            </div>
          </div>
          <ul className="review-links">
            <li>
              <i className="material-icons">share</i>
              <span>Share review</span>
            </li>
            <li>
              <i className="material-icons">code</i>
              <span>Embed review</span>
            </li>
            {editReview}
          </ul>
        </div>
        <div className="review-content">
          <div className="review-content-top">
            <img
              className={
                `stars-medium-${Math.round(review.rating * 2)}` +
                " stars-medium"
              }
              src="https://i.imgur.com/UkZkm0D.png"
            ></img>
            <div className="review-date">{date}</div>
          </div>
          <div className="review-body">{review.body}</div>
          {deleteReview}
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewIndexItem);
