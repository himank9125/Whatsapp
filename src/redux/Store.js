import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/Index";

const store = createStore(allReducers, applyMiddleware(thunk));
export default store;
