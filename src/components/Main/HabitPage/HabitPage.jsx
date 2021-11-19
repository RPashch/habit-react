import React from 'react'
import classes from './HabitPage.module.css'
import Title from "./Title/Title";
import Content from "./Content/Content";

const HabitPage = (props) => {
    return (
        <div className={ classes.main }>
            <Title />
            <Content />
        </div>
    )

}

export default HabitPage;