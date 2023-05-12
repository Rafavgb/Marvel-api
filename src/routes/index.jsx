import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginn from "../pages/Login";
import Error from "../pages/Error";
import Agents from "../pages/Agents";
import ResetPassword from "../pages/ResetPassword";
import Confirmation from "../pages/Confirmation";
import Select from "../pages/Select/index";

const RouterApp = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Loginn/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/agents" element={<Agents/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>}/>
            <Route path="/confirmation" element={<Confirmation/>}/>
            <Route path="/select" element={<Select/>}/>
        </Routes>
        </BrowserRouter>
 
    )
}

export default RouterApp;