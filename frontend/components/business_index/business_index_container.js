import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import {
  fetchBusinesses,
  searchBusinesses,
  fetchAllCategories,
} from "../../actions/business_actions";

const msp = (state) => ({
  businesses: Object.values(state.entities.businesses),
  categories: Object.values(state.entities.categories),
});

const mdp = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
});

export default connect(msp, mdp)(BusinessIndex);
