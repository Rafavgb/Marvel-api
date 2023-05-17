import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";
import ResetPassword from "../pages/ResetPassword";
import Confirmation from "../pages/Confirmation";
import Select from "../pages/Select/index";
import Profile from "../pages/Profile";
import Overview from "../pages/Overview";
import Teams from "../pages/Teams";
import Powers from "../pages/Powers";
import Species from "../pages/Species";
import Authors from "../pages/Authors";
import Home from "../pages/Home";

{/*const Private = ({ Item }) => {
    const login = true;

    return login > 0 ? <Item /> : <Login />;
} */}

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Error />} />
                <Route path="/home" element={<Home />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/select" element={<Select />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/powers" element={<Powers />} />
                <Route path="/species" element={<Species />} />
                <Route path="/authors" element={<Authors />} />
            </Routes>
        </BrowserRouter>

    )
}

export default RouterApp;