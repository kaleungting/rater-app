import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { reviewer, review, currentUser } = this.props;
    var date = review.created_at.slice(0, 10);

    const editReview =
      review.author_id === parseInt(Object.keys(currentUser)) ? (
        <li className="edit-review">
          <i className="material-icons">create</i>
          <span>Edit review</span>
        </li>
      ) : (
        <li></li>
      );

    const deleteReview =
      review.author_id === parseInt(Object.keys(currentUser)) ? (
        <button className="delete-review">
          <i className="material-icons">delete</i>
        </button>
      ) : (
        <div></div>
      );

    return (
      <div className="business-review-container">
        <div className="review-sidebar">
          <div className="reviewer-profile">
            <div className="reviewer-photo">photo</div>
            <div className="reviewer-name">
              <div>
                {reviewer.first_name} {reviewer.last_name}
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
            <div className="review-stars">Rating Goes Here</div>
            <div className="review-date">{date}</div>
          </div>
          <div className="review-body">{review.body}</div>
          {deleteReview}
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
