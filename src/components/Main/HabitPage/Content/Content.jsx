import React from "react";
import classes from './Content.module.css'
import Blocks from "./Blocks/Blocks";
import AllHabits from "./AllHabits/AllHabits";

const Content = (props) => {
    return (
        <div className={ classes.content }>
            <Blocks />
            <AllHabits />
        </div>
    )
}

export default Content;