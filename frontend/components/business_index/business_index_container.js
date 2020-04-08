import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import { fetchBusinesses } from "../../actions/business_actions";

const msp = (state) => ({
  businesses: Object.values(state.entities.businesses),
});

const mdp = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(msp, mdp)(BusinessIndex);
