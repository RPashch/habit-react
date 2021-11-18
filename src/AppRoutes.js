import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Profile from "./components/Profile";
import NotFoundPage from "./components/NotFoundPage";
import React from "react";
import App from "./App";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
);

export default AppRoutes;