import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import storeReducer from "./reducers/storeReducers";
import { userSigninReducer, userSignupReducer } from "./reducers/userReducers"

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo') || "") 
        : null, 
    }
}

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,

    storeOne: storeReducer.oneReducer
});

const composeEnhancer = compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;