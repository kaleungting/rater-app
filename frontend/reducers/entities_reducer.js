import { combineReducers } from "redux";
import usersReducers from "./users_reducer";
import businessesReducers from "./businesses_reducer";

const entitiesReducer = combineReducers({
  users: usersReducers,
  businesses: businessesReducers,
});

export default entitiesReducer;
