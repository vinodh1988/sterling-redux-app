import { combineReducers } from "redux";
import { firstReducer, QuoteReducer } from "../Reducers/reducer";

export const appstate = combineReducers({
    messageData : firstReducer,
    quoteData: QuoteReducer
})