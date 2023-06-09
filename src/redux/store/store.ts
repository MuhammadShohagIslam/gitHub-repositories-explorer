import { composeWithDevTools } from "@redux-devtools/extension";
import { Action, applyMiddleware, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
