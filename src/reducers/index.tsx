import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import posts from "./posts";

const rootReducer = combineReducers({
  todos,
  counter,
  posts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
