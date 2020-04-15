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
  debugger;
  const business = state.entities.businesses[ownProps.match.params.businessId];
  return {
    business,
    // categories: Object.values(state.entities.categories),
    // reviews: Object.values(state.entities.reviews),
    categories: selectCategoriesForBusiness(state, business),
    reviews: selectReviewsForBusiness(state, business),
    reviewers: state.entities.reviews.reviewers,
    // reviewers: selectReviewersForBusiness(state, business),
  };
};

const mdp = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  };
};

export default connect(msp, mdp)(BusinessPage);
