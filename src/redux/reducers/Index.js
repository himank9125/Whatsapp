import { combineReducers } from "redux";
import reducer from "./App";
import chatreducer from "./chat";

const allReducers = combineReducers({
  myReducer: reducer,
  chatReducer: chatreducer,
});
export default allReducers;
