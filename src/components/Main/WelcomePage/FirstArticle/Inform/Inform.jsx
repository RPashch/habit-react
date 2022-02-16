import React from 'react'
import classes from './Inform.module.css'
import {NavLink} from 'react-router-dom'


const Inform = (props) => {
    return (
        <div className={ classes.inform }>
            <div className={ classes.text1 }>Распланируй привычки</div>
            <div className={ classes.text2 }>Сделай свою жизнь лучше</div>
            <div className={ classes.buttons }>
                <NavLink to={'/signPages/SignUp'} className={ classes.singUp }><input type="button" value="Sign up"/></NavLink>
                <NavLink to={'/welcome'} className={ classes.moreInf }><input type="button" value="Learn more"/></NavLink>
            </div>
        </div>

    )
}

export default Inform