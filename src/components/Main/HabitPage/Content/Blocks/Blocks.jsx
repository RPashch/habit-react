import React from "react";
import classes from './Blocks.module.css'

const Blocks = (props) => {
    return (
        <div className={ classes.blocks }>
            <div className={ classes.block }>
                <div className={ classes.green_circle }/>
                <div className={ classes.text }>
                    <div className={ classes.number }>8</div>
                    <div className={ classes.category_titles }>Спорт</div>
                </div>
            </div>
            <div className={ classes.block }>
                <div className={ classes.purple_circle }/>
                <div className={ classes.text }>
                    <div className={ classes.number }>4</div>
                    <div className={ classes.category_titles }>Интеллект</div>
                </div>
            </div>
            <div className={ classes.block }>
                <div className={ classes.orange_circle }/>
                <div className={ classes.text }>
                    <div className={ classes.number }>12</div>
                    <div className={ classes.category_titles }>Саморазвитие</div>
                </div>
            </div>
            <div className={ classes.block }>
                <div className={ classes.yellow_circle }/>
                <div className={ classes.text }>
                    <div className={ classes.number }>5</div>
                    <div className={ classes.category_titles }>Деньги</div>
                </div>
            </div>
            <div className={ classes.block }>
                <div className={ classes.blue_circle }/>
                <div className={ classes.text }>
                    <div className={ classes.number }>2</div>
                    <div className={ classes.category_titles }>Отдых</div>
                </div>
            </div>
        </div>
    )
}

export default Blocks;