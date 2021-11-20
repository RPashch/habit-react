import {Route, Routes} from 'react-router-dom';
import NotFoundPage from "./components/NotFoundPage";
import React from "react";
import App from "./App";
import CalendarPage from "./components/Main/CalendarPage/CalendarPage";
import HabitPage from "./components/Main/HabitPage/HabitPage";
import SignUpSignInPages from "./components/Main/Sign-upSign-inPages/SignUpSignInPages";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="calendar" element={<CalendarPage/>}/>
            <Route path="habits" element={<HabitPage/>}/>
            <Route path="login" element={<SignUpSignInPages/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
);

export default AppRoutes;