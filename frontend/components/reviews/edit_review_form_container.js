import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { updateReview, clearErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.review,
    currentUserId: state.session.id,
    reviewId: ownProps.match.params.reviewId,
    review: state.entities.reviews.reviews[ownProps.match.params.reviewId],
    businessId: ownProps.match.params.businessId,
    business: state.entities.businesses[ownProps.match.params.businessId],
    formType: "Edit Review",
  };
};

const mdp = (dispatch) => ({
  action: (review) => dispatch(updateReview(review)),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(ReviewForm);
