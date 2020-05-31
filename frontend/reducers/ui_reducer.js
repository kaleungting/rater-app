import {combineReducers} from 'redux';
import filterReducer from './filter_reducer';
import keywordReducer from './keyword_reducer';

const uiReducer = combineReducers({
    filters: filterReducer,
    keyword: keywordReducer
});

export default uiReducer;