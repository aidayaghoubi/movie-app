
import { createStore } from "redux";
import LoginReducer from "../reducers/login";

const Store = createStore(LoginReducer)

export default Store;