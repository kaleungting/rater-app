import { UPDATE_KEYWORD } from "../actions/business_actions";

const defaultKeyword = Object.freeze({
    keyword: {},
});

const keywordReducer = (state = defaultKeyword, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_KEYWORD) {
        const newKeyword = {
            [action.keyword]: action.value,
        };
        return Object.assign({}, state, newKeyword);
    } else {
        return state;
    }
};

export default keywordReducer;
