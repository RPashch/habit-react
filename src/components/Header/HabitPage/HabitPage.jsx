import React from 'react'
import classes from './HabitPage.module.css'
import Logo from "../Logo/Logo";
import NavigationButtons from "./NavigationButtons/NavigationButtons";

const HabitPage = (props) => {
    return (
        <div className={ classes.header }>
            <Logo/>
            <NavigationButtons/>
        </div>
    )
}

export default HabitPage;