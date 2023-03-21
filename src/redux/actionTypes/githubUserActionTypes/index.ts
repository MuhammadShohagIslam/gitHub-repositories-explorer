export const LOADING_START_GITHUB_USER = "LOADING_START_GITHUB_USER";
export const LOADING_SUCCESS_GITHUB_USER = "LOADING_SUCCESS_GITHUB_USER";
export const LOADING_ERROR_GITHUB_USER = "LOADING_ERROR_GITHUB_USER";
export const REMOVE_FROM_GITHUB_USER = "REMOVE_FROM_GITHUB_USER";

export type githubUserData = {
    username: string;
    repository_title: string;
    repository_url: string;
    star: number;
}[];

export interface loading_start_github_user {
    type: typeof LOADING_START_GITHUB_USER;
}
export interface loading_success_github_user {
    type: typeof LOADING_SUCCESS_GITHUB_USER;
    payload: githubUserData;
}
export interface loading_error_github_user {
    type: typeof LOADING_ERROR_GITHUB_USER;
}

export interface removed_from_github_user {
    type: typeof REMOVE_FROM_GITHUB_USER;
    payload: string
}

export type GithubUserDispatchTypes =
    | loading_start_github_user
    | loading_success_github_user
    | loading_error_github_user
    | removed_from_github_user;
