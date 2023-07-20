import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loggingMiddleware from "redux-logger";
import userReducer from "./reducers/userReducer.js";

export default createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk, loggingMiddleware))
);
