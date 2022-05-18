import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import storeReducer from "./reducers/storeReducers";
import { userSigninReducer, userSignupReducer } from "./reducers/userReducers"

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo') || "") 
        : null, 
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems') || "") 
        : [], 
    }
}

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,

    storeOne: storeReducer.oneReducer,

    cart: cartReducer

});

const composeEnhancer = compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;