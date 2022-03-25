import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { SigninScreen } from "./screens/SigninScreen";
import './App.css';
import { SignupScreen } from "./screens/SignupScreen";
import { StoreScreen } from "./screens/StoresScreen";

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {

    const [login, setLogin] = useState(false);

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<SigninScreen />} />
                <Route path="/register" element={<SignupScreen />} />

                <Route path="/homepage" element={<StoreScreen />} />
            </Routes>
        </BrowserRouter>)
}

export default Application;