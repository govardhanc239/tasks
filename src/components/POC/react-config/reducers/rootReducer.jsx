import { combineReducers } from "redux";
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
import eventReducer from "./eventReducer";


  const rootReducer = combineReducers({
    user : userReducer,
    location : locationReducer,
    event : eventReducer
});
export default rootReducer;
 