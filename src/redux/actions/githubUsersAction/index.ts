import { LOADING_SUCCESS_GITHUB_USERS } from "../../actionTypes/githubUsersActionTypes";

export const loadGitHubUsers = (githubUsers: any) => {
    return {
        type: LOADING_SUCCESS_GITHUB_USERS,
        payload: githubUsers,
    };
};
