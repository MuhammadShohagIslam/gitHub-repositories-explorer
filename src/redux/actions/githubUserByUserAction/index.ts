import {
    githubUserDataByUser,
    LOADING_SUCCESS_GITHUB_USER_BY_USER,
    REMOVE_FROM_GITHUB_USER_BY_USER,
} from "../../actionTypes/githubUserByUserActionTypes";

export const loadGitHubUserByUser = (githubUserData: githubUserDataByUser[]) => {
    return {
        type: LOADING_SUCCESS_GITHUB_USER_BY_USER,
        payload: githubUserData,
    };
};

export const removedGitHubUserByUser = (id: string) => {
    return {
        type: REMOVE_FROM_GITHUB_USER_BY_USER,
        payload: id,
    };
};
