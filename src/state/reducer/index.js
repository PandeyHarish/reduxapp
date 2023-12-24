import { combineReducers } from "redux";
import amountReducers from "./amountReducer";

const reducer = combineReducers({
    amount: amountReducers
})


export default reducer;