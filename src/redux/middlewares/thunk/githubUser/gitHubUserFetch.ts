import axios from "axios";
import { loadGitHubUser } from "../../../actions/githubUserAction";
import { RootState } from "../../../store/store";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import {
    LOADING_START_GITHUB_USER,
    LOADING_ERROR_GITHUB_USER,
} from "../../../actionTypes/githubUserActionTypes";

const loadGitHubUserDataByUser = (
    user: string
): ThunkAction<void, unknown, RootState, AnyAction> => {
    return async (dispatch) => {
        try {
            // loading start dispatch
            dispatch({
                type: LOADING_START_GITHUB_USER,
            });
            // loading all of the user based on given input user
            const usersResponse = await axios.get(
                `${process.env.REACT_APP_GITHUB_API}/search/users?q=${user}`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            // loading all of the repository based on given input user
            const promiseData: Promise<any>[] = [];
            usersResponse.data.items.forEach((ur: any) => {
                const response = axios.get(`${ur.repos_url}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                });
                return promiseData.push(response);
            });
            // handling array of promise
            const data = await Promise.all(promiseData);

            // make gitHub Users object
            const gitHubUsers = data?.map((gitHubUser: any) => {
                const repository = [];
                for (let rep of gitHubUser.data) {
                    const repObj = {
                        repository_owner: rep?.owner.login,
                        repository_name: rep?.full_name,
                        star: rep?.stargazers_count,
                        description: rep?.description,
                    };
                    repository.push(repObj);
                }
                return repository;
            });
            // success dispatch with github custom gitHub users
            dispatch(loadGitHubUser(gitHubUsers));
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOADING_ERROR_GITHUB_USER,
            });
        }
    };
};

export default loadGitHubUserDataByUser;
