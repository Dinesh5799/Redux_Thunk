import { combineReducers } from "redux";
import postReducers from "./postsReducers";
import usersReducers from "./usersReducers";

export default combineReducers({ posts: postReducers, user: usersReducers });
