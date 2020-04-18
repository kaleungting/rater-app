import { connect } from "react-redux";
import SessionForm from "./session_form";
import { clearErrors, signup, login } from "../../actions/session_actions";

const msp = (state) => {
  return {
    business: Object.values(state.entities.business),
    errors: state.errors.session,
    formType: "Sign Up",
  };
};

const mdp = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(SessionForm);
