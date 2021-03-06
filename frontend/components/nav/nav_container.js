import {connect} from 'react-redux';
import Nav from './nav';
import {logout} from '../../actions/session_actions';

const msp = ({entities,session}) => ({
    currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp,mdp)(Nav);
