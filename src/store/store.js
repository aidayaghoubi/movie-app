
import { configureStore } from "react-redux"
import LoginReducer from "../reducers/login";

const Store = configureStore({

    login:LoginReducer

})

export default Store;