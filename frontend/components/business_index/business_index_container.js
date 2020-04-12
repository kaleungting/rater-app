import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import {
  fetchBusinesses,
  searchBusinesses,
} from "../../actions/business_actions";

const msp = (state) => ({
  businesses: Object.values(state.entities.businesses),
});

const mdp = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
});

export default connect(msp, mdp)(BusinessIndex);
