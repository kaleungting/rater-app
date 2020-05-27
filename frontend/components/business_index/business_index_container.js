import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import {
  fetchBusinesses,
  searchBusinesses,
  clearBusinesses,
} from "../../actions/business_actions";
import { updateFilter } from "../../actions/filter_actions";

const msp = (state) => {
  let filtered;
  if (state.ui.filters.bounds.northEast) {
    let { northEast, southWest } = state.ui.filters.bounds;
    filtered = Object.values(state.entities.businesses).filter((business) => {
      debugger;
      return (
        business.lng < northEast.lng &&
        business.lat < northEast.lat &&
        business.lng > southWest.lng &&
        business.lat > southWest.lat
      );
    });
  } else {
    filtered = Object.values(state.entities.businesses);
  }
  debugger;
  return {
    businesses: filtered,
    categories: Object.values(state.entities.categories),
  };
};

const mdp = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  clearBusinesses: () => dispatch(clearBusinesses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(msp, mdp)(BusinessIndex);
