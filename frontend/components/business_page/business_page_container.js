import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import BusinessPage from "./business_page";

const msp = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
  };
};

const mdp = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  };
};

export default connect(msp, mdp)(BusinessPage);
