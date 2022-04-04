import { combineReducers } from "redux";
import { firstReducer } from "../Reducers/reducer";

export const appstate = combineReducers({
    messageData : firstReducer
})