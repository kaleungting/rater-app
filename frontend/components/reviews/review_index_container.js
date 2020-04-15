import { connect } from "react-redux";
import ReviewIndex from "./review_index";

const msp = (state, ownProps) => {
  //   debugger;
  return {
    // reviews: Object.values(state.entities.reviews),
    // reviewers: Object.values(ownProps.business.reviewers),
  };
};

const mdp = (dispatch) => ({
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  deleteReviews: (businessId) => dispatch(deleteReviews(businessId)),
});

export default connect(msp, mdp)(ReviewIndex);
