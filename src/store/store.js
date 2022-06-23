

import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../reducers/login";

const Store = configureStore(LoginReducer)

export default Store;