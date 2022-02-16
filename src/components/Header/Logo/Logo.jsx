import React from 'react'
import classes from './Logo.module.css'
import {NavLink} from 'react-router-dom'

const Logo = () => {
    return(
        <div className={ classes.logo }>
            <NavLink to={'/'}><span>Habit</span></NavLink>
        </div>
    )
}

export default Logo;