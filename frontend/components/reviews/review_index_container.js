import { connect } from "react-redux";
import {
  fetchBusiness,
  fetchBusinesses,
  searchBusinesses,
} from "../../actions/business_actions";
import { deleteReview } from "../../actions/review_actions";
import {
  selectCategoriesForBusiness,
  selectReviewsForBusiness,
} from "../../reducers/selectors";
import ReviewIndex from "./review_index";

const msp = (state, ownProps) => {
  let currentUser;
  if (state.entities.users) {
    currentUser = state.entities.users;
  }


  return {
    business: Object.values(ownProps),
    categories: Object.values(state.entities.categories),
    reviews: state.entities.reviews.reviews ? Object.values(state.entities.reviews.reviews) : [],
    reviewers: state.entities.reviews.reviewers ? state.entities.reviews.reviewers : [],
    currentUser,
  };
};

const mdp = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchBusinesses: (query) => dispatch(searchBusinesses(query)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  };
};

export default connect(msp, mdp)(ReviewIndex);
