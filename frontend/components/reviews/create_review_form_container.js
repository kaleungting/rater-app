import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview, clearErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";

const msp = (state, ownProps) => ({
  errors: state.errors.review,
  currentUserId: state.session.id,
  reviewId: null,
  review: { body: "", rating: 0 },
  businessId: ownProps.match.params.businessId,
  business: state.entities.businesses[ownProps.match.params.businessId],
  formType: "Post Review",
});

const mdp = (dispatch) => ({
  action: (review) => dispatch(createReview(review)),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(ReviewForm);
