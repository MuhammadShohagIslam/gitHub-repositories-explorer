import { combineReducers } from "redux";
import gitHubUserReducer from "./gitHubUserReducer";

const rootReducer = combineReducers({
    gitHubUsers: gitHubUserReducer,
});

export default rootReducer;
