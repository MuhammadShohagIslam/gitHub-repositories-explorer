export const LOADING_START_GITHUB_USER_BY_USER = "LOADING_START_GITHUB_USER";
export const LOADING_SUCCESS_GITHUB_USER_BY_USER = "LOADING_SUCCESS_GITHUB_USER";
export const LOADING_ERROR_GITHUB_USER_BY_USER = "LOADING_ERROR_GITHUB_USER";
export const REMOVE_FROM_GITHUB_USER_BY_USER = "REMOVE_FROM_GITHUB_USER";

export type githubUserDataByUser = {
    repository_id: number;
    repository_owner: string;
    repositories: {
        id: number;
        repository_url: string;
        star: string;
        description: string;
    }[];
};

export interface loading_start_github_user_by_user {
    type: typeof LOADING_START_GITHUB_USER_BY_USER;
}
export interface loading_success_github_user_by_user {
    type: typeof LOADING_SUCCESS_GITHUB_USER_BY_USER;
    payload: githubUserDataByUser[];
}
export interface loading_error_github_user_by_user {
    type: typeof LOADING_ERROR_GITHUB_USER_BY_USER;
}

export interface removed_from_github_user_by_user {
    type: typeof REMOVE_FROM_GITHUB_USER_BY_USER;
    payload: string;
}

export type GithubUserByUserDispatchTypes =
    | loading_start_github_user_by_user
    | loading_success_github_user_by_user
    | loading_error_github_user_by_user
    | removed_from_github_user_by_user;
