import { connect } from "react-redux";
import {
  fetchBusiness,
  searchBusinesses,
} from "../../actions/business_actions";
import BusinessPage from "./business_page";

const msp = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
  };
};

const mdp = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  };
};

export default connect(msp, mdp)(BusinessPage);
