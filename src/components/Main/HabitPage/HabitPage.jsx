import React, {useState, useEffect} from 'react'
import classes from './HabitPage.module.css'
import Title from "./Title/Title";
import Content from "./Content/Content";
import HabitService from "../../../services/HabitService";


export const HabitPage = () => {
    const [habitsData, setHabitsData] = useState([]);

    useEffect(() => {
        setHabitsData([]);
        fetchHabitsData();
    }, [])

    const fetchHabitsData = () => {
        HabitService.findHabitById("2").then((res) =>
        {
            console.log(res)
        })
    }

    return (
        <div className={classes.main}>
            <Title/>
            <Content/>
        </div>
    )

}

export default HabitPage;