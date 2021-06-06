import React from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import BusinessNavContainer from "../business_nav/business_nav_container";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.review.body,
      author_id: this.props.currentUserId,
      business_id: this.props.businessId,
      rating: this.props.review.rating,
      reviewId: this.props.reviewId,
    };

    this.update = this.update.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearErrors = this.handleClearErrors.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.setState({ ...this.props.review });
    this.props.clearErrors();
  }

  componentDidUpdate(preProps) {
    if (preProps.review !== this.props.review) {
      this.setState({ ...this.props.review });
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(() => this.props.history.push(`/biz/${this.props.businessId}`));
  }

  addStars(index) {
    const element = document.getElementById("starlist");
    const lastClass = element.classList[element.classList.length - 1];
    element.classList.remove(lastClass);
    element.classList.add("stars-extra-large-" + index);
  }

  mouseEnter(index) {
    return () => {
      this.addStars(index);
    };
  }

  mouseLeave() {
    return () => {
      this.addStars(this.state.rating);
    };
  }

  handleClearErrors(e) {
    e.preventDefault();
    this.props.clearErrors();
  }

  render() {
    const { business, errors } = this.props;
    const textArray = [
      "Select your rating",
      "Eek! Methinks not.",
      "Meh. I've experienced better.",
      "A-OK.",
      "Yay! I'm a fan.",
      "Woohoo! As good as it gets!",
    ];
    if (!business) {
      return <div></div>;
    }

    return (
      <div>
        <BusinessNavContainer />
        <div className="review-form-content">
          <div className="review-form-title">
            <Link to={`/biz/${business.id}`}>{business.name}</Link>
          </div>
          <div
            className={this.props.errors.length === 0 ? "" : "errors-container"}
          >
            <div className="error-icon">
              <i
                onClick={this.handleClearErrors}
                className={this.props.errors.length === 0 ? "" : "fas fa-times"}
              />
            </div>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}.</li>
              ))}
            </ul>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="review-form-container">
                <div className="review-form-stars">
                  <ul
                    id="starlist"
                    className={`review-form-stars-list stars-extra-large stars-extra-large-${this.state.rating}`}
                  >
                    <li
                      className="review-form-stars-container"
                      onMouseEnter={this.mouseEnter(1)}
                      onMouseLeave={this.mouseLeave()}
                    >
                      <input
                        type="radio"
                        name="stars-input"
                        value="1"
                        onChange={this.update("rating")}
                        className="review-form-stars-input"
                      />
                    </li>
                    <li
                      className="review-form-stars-container"
                      onMouseEnter={this.mouseEnter(2)}
                      onMouseLeave={this.mouseLeave()}
                    >
                      <input
                        type="radio"
                        name="stars-input"
                        value="2"
                        onChange={this.update("rating")}
                        className="review-form-stars-input"
                      />
                    </li>
                    <li
                      className="review-form-stars-container"
                      onMouseEnter={this.mouseEnter(3)}
                      onMouseLeave={this.mouseLeave()}
                    >
                      <input
                        type="radio"
                        name="stars-input"
                        value="3"
                        onChange={this.update("rating")}
                        className="review-form-stars-input"
                      />
                    </li>
                    <li
                      className="review-form-stars-container"
                      onMouseEnter={this.mouseEnter(4)}
                      onMouseLeave={this.mouseLeave()}
                    >
                      <input
                        type="radio"
                        name="stars-input"
                        value="4"
                        onChange={this.update("rating")}
                        className="review-form-stars-input"
                      />
                    </li>
                    <li
                      className="review-form-stars-container"
                      onMouseEnter={this.mouseEnter(5)}
                      onMouseLeave={this.mouseLeave()}
                    >
                      <input
                        type="radio"
                        name="stars-input"
                        value="5"
                        onChange={this.update("rating")}
                        className="review-form-stars-input"
                      />
                    </li>
                  </ul>
                  <span className="review-form-stars-description">
                    <p id="rating-text">{textArray[this.state.rating]}</p>
                  </span>
                </div>

                <textarea
                  className="review-form-content"
                  maxLength="5000"
                  placeholder="Your review helps others learn about great local businesses. Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
                  value={this.state.body}
                  onChange={this.update("body")}
                ></textarea>

                <div className="review-form-error-messages"></div>
              </div>

              <div className="review-form-submit">
                <button
                  className="review-form-submit-btn"
                  onClick={this.handleSubmit}
                >
                  <span>{this.props.formType}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
