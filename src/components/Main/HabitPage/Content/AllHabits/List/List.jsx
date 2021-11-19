import React from "react";
import classes from './List.module.css'

const List = (props) => {
    return (
        <div className={ classes.list }>
            <div className={ classes.circles_and_habits }>
                <div className={ classes.small_green_circles }/>
                <div className={ classes.habits }>Бегать по утрам</div>
            </div>
            <div className={ classes.circles_and_habits }>
                <div className={ classes.small_purple_circles }/>
                <div className={ classes.habits }>Читать 30 минут в день</div>
            </div>
            <div className={ classes.circles_and_habits }>
                <div className={ classes.small_orange_circles }/>
                <div className={ classes.habits }>Выходить на 15 минут раньше чем планировал</div>
            </div>
            <div className={ classes.circles_and_habits }>
                <div className={ classes.small_yellow_circles }/>
                <div className={ classes.habits }>Откладывать 10% от зарплаты</div>
            </div>
            <div className={ classes.circles_and_habits }>
                <div className={ classes.small_blue_circles }/>
                <div className={ classes.habits }>Спать не менее 4 часов в сутки</div>
            </div>
        </div>
    )
}

export default List;