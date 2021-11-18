import './App.css';
import React from "react";
import {Outlet} from "react-router-dom";


export default function App() {
    return (
        <div>
            <h1>Some header text!</h1>
            <Outlet/>
        </div>
    );
}
