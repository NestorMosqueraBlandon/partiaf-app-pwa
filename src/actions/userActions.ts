import axios from "axios";
import { Console } from "console";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

// const URL = 'http://localhost:4300/api/v1'
const URL = "https://partiaf-api-v2.herokuapp.com/api/v1";

export const signin =
  (username: string, password: string) => async (dispatch: any) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
    try {
      const { data }: any = await axios.post(`${URL}/users/signin`, {
        username,
        password,
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      document.location.href = "/";
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error });
      console.log(error);
    }
  };

export const signup = (user: any) => async (dispatch: any) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: user });
  try {
    const { data }: any = await axios.post(`${URL}/users/signup`, { user });
    console.log(data);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    document.location.href = "/";
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
    console.log(error);
  }
};

export const signout = () => async (dispatch: any) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/";
};
