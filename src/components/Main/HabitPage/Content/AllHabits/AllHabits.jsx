import React from "react";
import classes from './AllHabits.module.css'
import AllHabitsTitle from "./AllHabitsTitle/AllHabitsTitle";
import List from "./List/List";

const AllHabits = (props) => {
    return (
        <div className={ classes.all_habits }>
            <AllHabitsTitle/>
            <List/>
        </div>
    )
}

export default AllHabits;