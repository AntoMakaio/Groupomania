import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import usersReducer from "./users_reducer";
import postReducer from "./post_reducer";
import errorReducer from "./error_reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
  errorReducer,
});
