import { connect } from "react-redux";
import SubNav from "./sub_nav";
import {
  searchBusinesses,
  fetchBusinesses,
} from "../../actions/business_actions";

const mdp = (dispatch) => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(null, mdp)(SubNav);
