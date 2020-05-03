import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import {
  fetchBusinesses,
  searchBusinesses,
  clearBusinesses,
} from "../../actions/business_actions";

const msp = (state) => ({
  businesses: Object.values(state.entities.businesses),
  categories: Object.values(state.entities.categories),
});

const mdp = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  clearBusinesses: () => dispatch(clearBusinesses()),
});

export default connect(msp, mdp)(BusinessIndex);
