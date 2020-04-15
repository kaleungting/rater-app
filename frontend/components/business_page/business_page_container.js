import { connect } from "react-redux";
import {
  fetchBusiness,
  searchBusinesses,
} from "../../actions/business_actions";
import {
  selectCategoriesForBusiness,
  selectReviewsForBusiness,
  selectReviewersForBusiness,
} from "../../reducers/selectors";
import BusinessPage from "./business_page";

const msp = (state, ownProps) => {
  const business = state.entities.businesses[ownProps.match.params.businessId];
  return {
    business,
    categories: selectCategoriesForBusiness(state, business),
    reviews: selectReviewsForBusiness(state, business),
    reviewers: state.entities.reviews.reviewers,
  };
};

const mdp = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  };
};

export default connect(msp, mdp)(BusinessPage);
