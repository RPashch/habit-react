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
/*
import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return(
        <div className={'app-wrapper'}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
export default App;
 */
