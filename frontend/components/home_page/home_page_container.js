import { connect } from "react-redux";
import HomePage from "./home_page";
import { fetchBusiness, clearBusinesses } from "../../actions/business_actions";

const msp = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    categories: Object.values(state.entities.categories),
  };
};

const mdp = (dispatch) => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  clearBusinesses: () => dispatch(clearBusinesses()),
});

export default connect(msp, mdp)(HomePage);
