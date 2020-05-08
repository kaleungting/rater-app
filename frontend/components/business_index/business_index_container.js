import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import {
  fetchBusinesses,
  searchBusinesses,
  clearBusinesses,
} from "../../actions/business_actions";
import { updateFilter } from "../../actions/filter_actions";

const msp = (state) => ({
  businesses: Object.values(state.entities.businesses),
  categories: Object.values(state.entities.categories),
});

const mdp = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  clearBusinesses: () => dispatch(clearBusinesses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(msp, mdp)(BusinessIndex);
