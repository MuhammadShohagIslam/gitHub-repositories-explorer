import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { loadGitHubUsers } from "../../../actions/githubUsersAction";
import { RootState } from "../../../store/store";
import {
    LOADING_START_GITHUB_USERS,
    LOADING_ERROR_GITHUB_USERS,
    githubUsersData,
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
            // loading all of the repository based on given input user
            const promiseData: Promise<any>[] = [];
            usersResponse.data.forEach((ur: any) => {
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
            const gitHubUsers = data?.map((gitHubUser) => {
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
                // calculating total star per user
                const calTotalStar = repository.reduce((acc, cur) => {
                    acc = acc + cur.star;
                    return acc;
                }, 0);
                const userObject: githubUsersData = {
                    repository_id: gitHubUser.data[0]?.id,
                    owner_url: gitHubUser.data[0]?.owner?.html_url,
                    avatar_url: gitHubUser.data[0]?.owner?.avatar_url,
                    repository_owner: gitHubUser.data[0]?.owner?.login,
                    repositories: repository,
                    totalStar: calTotalStar,
                };
                return userObject;
            });
            // success dispatch with github custom gitHub users
            dispatch(loadGitHubUsers(gitHubUsers));
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOADING_ERROR_GITHUB_USERS,
            });
        }
    };
};

export default loadGitHubUsersData;
