import { combineReducers } from "redux";
import gitHubUsersReducer from "./gitHubUsers";
import gitHubUserByUserReducer from "./gitHubUsersByUserReducer";

const rootReducer = combineReducers({
    gitHubUsers: gitHubUsersReducer,
    gitHubUsersByUser: gitHubUserByUserReducer
});

export default rootReducer;
