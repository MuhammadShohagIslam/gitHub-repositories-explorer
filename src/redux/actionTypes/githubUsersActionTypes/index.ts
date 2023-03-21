export const LOADING_START_GITHUB_USERS = "LOADING_START_GITHUB_USERS";
export const LOADING_SUCCESS_GITHUB_USERS = "LOADING_SUCCESS_GITHUB_USERS";
export const LOADING_ERROR_GITHUB_USERS = "LOADING_ERROR_GITHUB_USERS";

export type githubUsersData = {
    repository_id: number;
    repository_owner: string;
    repositories: {
        id: number;
        repository_url: string;
        star: string;
        description: string;
    }[];
};

export interface loading_start_github_users {
    type: typeof LOADING_START_GITHUB_USERS;
}
export interface loading_success_github_users {
    type: typeof LOADING_SUCCESS_GITHUB_USERS;
    payload: any;
}
export interface loading_error_github_users {
    type: typeof LOADING_ERROR_GITHUB_USERS;
}

export type GithubUsersDispatchTypes =
    | loading_start_github_users
    | loading_success_github_users
    | loading_error_github_users;
