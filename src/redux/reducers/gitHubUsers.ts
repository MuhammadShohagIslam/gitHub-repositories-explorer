import {
    githubUsersData,
    GithubUsersDispatchTypes,
    LOADING_SUCCESS_GITHUB_USERS,
    LOADING_START_GITHUB_USERS,
    LOADING_ERROR_GITHUB_USERS,
} from "../actionTypes/githubUsersActionTypes";

interface IDefaultState {
    isLoading: boolean;
    isError: boolean;
    gitHubUsers: githubUsersData[];
}
const defaultState: IDefaultState = {
    isLoading: false,
    isError: false,
    gitHubUsers: [],
};

const gitHubUsersReducer = (
    state: IDefaultState = defaultState,
    action: GithubUsersDispatchTypes
): IDefaultState => {
    switch (action.type) {
        case LOADING_START_GITHUB_USERS:
            return {
                ...state,
                isLoading: true,
            };
        case LOADING_SUCCESS_GITHUB_USERS:
            return {
                ...state,
                gitHubUsers: action.payload,
            };
        case LOADING_ERROR_GITHUB_USERS:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};

export default gitHubUsersReducer;
