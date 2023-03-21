import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { loadGitHubUserByUser } from "../../../actions/githubUserByUserAction";
import {
    githubUserDataByUser,
    LOADING_ERROR_GITHUB_USER_BY_USER,
    LOADING_START_GITHUB_USER_BY_USER,
} from "../../../actionTypes/githubUserByUserActionTypes";
import { RootState } from "../../../store/store";

const loadGitHubUserDataByUser = (
    user: string
): ThunkAction<void, unknown, RootState, AnyAction> => {
    return async (dispatch) => {
        try {
            // loading start dispatch
            dispatch({
                type: LOADING_START_GITHUB_USER_BY_USER,
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
            const gitHubUsersByUser = data?.map((gitHubUser) => {
                const repository: {
                    id: number;
                    repository_url: string;
                    repository_name: string;
                    star: number;
                    description: string;
                }[] = [];
                for (let rep of gitHubUser.data) {
                    const repObj = {
                        id: rep?.id,
                        repository_name: rep?.name,
                        repository_url: rep?.html_url,
                        star: rep?.stargazers_count,
                        description: rep?.description,
                    };
                    repository.push(repObj);
                }
                const userObject: githubUserDataByUser = {
                    repository_id: gitHubUser.data[0]?.id,
                    repository_owner: gitHubUser.data[0]?.owner?.login,
                    repositories: repository,
                };
                return userObject;
            });
            // success dispatch with github custom gitHub users
            dispatch(loadGitHubUserByUser(gitHubUsersByUser));
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOADING_ERROR_GITHUB_USER_BY_USER,
            });
        }
    };
};

export default loadGitHubUserDataByUser;
