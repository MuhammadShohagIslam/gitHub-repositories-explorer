import {
    githubUserDataByUser,
    LOADING_SUCCESS_GITHUB_USER_BY_USER
} from "../../actionTypes/githubUserByUserActionTypes";

export const loadGitHubUserByUser = (githubUserData: githubUserDataByUser[]) => {
    return {
        type: LOADING_SUCCESS_GITHUB_USER_BY_USER,
        payload: githubUserData,
    };
};

