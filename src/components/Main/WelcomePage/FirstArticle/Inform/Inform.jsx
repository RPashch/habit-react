import React from 'react'
import classes from './Inform.module.css'


const Inform = (props) => {
    return (
        <div className={ classes.inform }>
            <div className={ classes.text1 }>Распланируй привычки</div>
            <div className={ classes.text2 }>Сделай свою жизнь лучше</div>
            <div className={ classes.buttons }>
                <a href={ "#" } className={ classes.singUp }><input type="button" value="Sign up"/></a>
                <a href={ "#" } className={ classes.moreInf }><input type="button" value="Learn more"/></a>
            </div>
        </div>

    )
}

export default Inform