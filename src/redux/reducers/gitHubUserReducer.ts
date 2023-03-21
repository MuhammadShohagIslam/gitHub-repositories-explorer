import {
    githubUserData,
    GithubUserDispatchTypes,
    LOADING_START_GITHUB_USER,
    LOADING_SUCCESS_GITHUB_USER,
    LOADING_ERROR_GITHUB_USER,
    REMOVE_FROM_GITHUB_USER,
} from "../actionTypes/githubUserActionTypes";

interface IDefaultState{
    isLoading: boolean;
    isError: boolean;
    gitHubUsers: githubUserData;
};
const defaultState: IDefaultState = {
    isLoading: false,
    isError: false,
    gitHubUsers: [],
};

const gitHubUserReducer = (
    state:IDefaultState = defaultState,
    action:GithubUserDispatchTypes
):IDefaultState => {
    switch (action.type) {
        case LOADING_START_GITHUB_USER:
            return {
                ...state,
                isLoading: true,
            };
        case LOADING_SUCCESS_GITHUB_USER:
            return {
                ...state,
                gitHubUsers: action.payload,
            };
        case LOADING_ERROR_GITHUB_USER:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case REMOVE_FROM_GITHUB_USER:
            return {
                ...state,
                gitHubUsers: state.gitHubUsers.filter(
                    (gitHubUser) => gitHubUser.username !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default gitHubUserReducer;
