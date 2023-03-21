import {
    GithubUserByUserDispatchTypes,
    githubUserDataByUser,
    LOADING_ERROR_GITHUB_USER_BY_USER,
    LOADING_START_GITHUB_USER_BY_USER,
    LOADING_SUCCESS_GITHUB_USER_BY_USER,
} from "../actionTypes/githubUserByUserActionTypes";

interface IDefaultState {
    isLoading: boolean;
    isError: boolean;
    gitHubUsersByUser: githubUserDataByUser[];
}
const defaultState: IDefaultState = {
    isLoading: false,
    isError: false,
    gitHubUsersByUser: [],
};

const gitHubUserReducer = (
    state: IDefaultState = defaultState,
    action: GithubUserByUserDispatchTypes
): IDefaultState => {
    switch (action.type) {
        case LOADING_START_GITHUB_USER_BY_USER:
            return {
                ...state,
                isLoading: true,
            };
        case LOADING_SUCCESS_GITHUB_USER_BY_USER:
            return {
                ...state,
                gitHubUsersByUser: action.payload,
                isLoading: false,
            };
        case LOADING_ERROR_GITHUB_USER_BY_USER:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};

export default gitHubUserReducer;
