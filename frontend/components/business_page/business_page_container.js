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
import BusinessPage from "./business_page";

const msp = (state, ownProps) => {
  let currentUser;
  if (state.entities.users) {
    currentUser = state.entities.users[1];
  }
  const business = state.entities.businesses[ownProps.match.params.businessId];
  const businessId = parseInt(ownProps.match.params.businessId);
  let hasReview;
  let reviewId;
  if (business && currentUser) {
    business.reviews.forEach(review => {
      if (review.author_id === currentUser.id) {
        hasReview = true;
        reviewId = review.id;
      } else {
        hasReview = false;
      }
    });
  }

  return {
    business,
    businessId,
    categories: selectCategoriesForBusiness(state, business),
    currentUser,
    hasReview,
    reviewId
  };
};

const mdp = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchBusinesses: (query) => dispatch(searchBusinesses(query)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};

export default connect(msp, mdp)(BusinessPage);
