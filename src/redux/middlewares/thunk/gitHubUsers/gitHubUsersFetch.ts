import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { loadGitHubUsers } from "../../../actions/githubUsersAction";
import { RootState } from "../../../store/store";
import {
    LOADING_START_GITHUB_USERS,
    LOADING_ERROR_GITHUB_USERS,
} from "../../../actionTypes/githubUsersActionTypes";

const loadGitHubUsersData = (): ThunkAction<
    void,
    unknown,
    RootState,
    AnyAction
> => {
    return async (dispatch) => {
        try {
            // loading start dispatch
            dispatch({
                type: LOADING_START_GITHUB_USERS,
            });
            // loading all of the user based on given input user
            const usersResponse = await axios.get(
                `${process.env.REACT_APP_GITHUB_API}/users`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            // success dispatch with github custom gitHub users
            dispatch(loadGitHubUsers(usersResponse.data));
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOADING_ERROR_GITHUB_USERS,
            });
        }
    };
};

export default loadGitHubUsersData;
