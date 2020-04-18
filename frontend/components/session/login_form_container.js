import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, clearErrors } from "../../actions/session_actions";

const msp = (state) => {
  return {
    business: Object.values(state.entities.businesses),
    errors: state.errors.session,
    formType: "Log In",
  };
};

const mdp = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(SessionForm);
