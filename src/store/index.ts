import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { charactersReducer } from "./reducers/charactersReducer";
import { userReducer } from "./reducers/userReducer";

export const reducer = combineReducers({
  user: userReducer,
  characters: charactersReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type iState = ReturnType<typeof reducer>;
