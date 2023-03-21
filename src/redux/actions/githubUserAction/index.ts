import {
    LOADING_SUCCESS_GITHUB_USER,
    REMOVE_FROM_GITHUB_USER,
} from "../../actionTypes/githubUserActionTypes";

export const loadGitHubUser = (githubUserData: any) => {
    return {
        type: LOADING_SUCCESS_GITHUB_USER,
        payload: githubUserData,
    };
};

export const removedGitHubUser = (id: string) => {
    return {
        type: REMOVE_FROM_GITHUB_USER,
        payload: id,
    };
};
