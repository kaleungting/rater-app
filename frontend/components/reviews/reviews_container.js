import {connect} from 'react-redux';
import Reviews from './reviews';

const msp = state => ({
    reviews: Object.value(state.entities.reviews)
});

const mdp = dispatch => ({

});