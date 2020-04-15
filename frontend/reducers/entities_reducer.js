import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import businessesReducer from "./businesses_reducer";
import reviewsReducer from "./reviews_reducer";
import categoriesReducer from "./categories_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer,
  categories: categoriesReducer,
});

export default entitiesReducer;
