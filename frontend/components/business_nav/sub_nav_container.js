import { connect } from "react-redux";
import SubNav from "./sub_nav";
import { searchBusinesses } from "../../actions/business_actions";

const mdp = (dispatch) => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
});

export default connect(null, mdp)(SubNav);
