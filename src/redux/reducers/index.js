/*
 * combines all th existing reducers
 */
import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";

const rootReducers = combineReducers({
  commentsReducer: commentsReducer,
});

export default rootReducers;
