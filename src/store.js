import { fetchReducer } from "./FetchReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

let store = createStore(
	fetchReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store