import { combineReducers } from "redux";
import { change } from "./change";

export const rootReducer = combineReducers({change: change});
