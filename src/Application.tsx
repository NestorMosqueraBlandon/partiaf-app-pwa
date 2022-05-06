import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { SigninScreen } from "./screens/SigninScreen";
import './App.css';
import { SignupScreen } from "./screens/SignupScreen";
import { StoresScreen } from "./screens/StoresScreen";
import { BussinessScreen } from "./screens/BussinessScreen";
import { useSelector } from "react-redux";
import { StoreScreen } from "./screens/StoreScreen";
import ProfileScreen from "./screens/ProfileScreen";

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {

    const userSignin = useSelector((state: any) => state.userSignin);
    const { userInfo } = userSignin;

    
    return (
        <BrowserRouter>

            <Routes>
                {userInfo ? (
                    <>
                        <Route path="/" element={<StoresScreen />} />
                        <Route path="/bussines" element={<BussinessScreen />} />
                        <Route path="/store/:id" element={<StoreScreen/>}  />
                        <Route path="/profile" element={<ProfileScreen/>}  />
                    </>

                ) : (
                    <>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/login" element={<SigninScreen />} />
                        <Route path="/register" element={<SignupScreen />} />
                    </>

                )}


            </Routes>
        </BrowserRouter>)
}

export default Application;