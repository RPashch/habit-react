import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
    return(
        <div className={ classes.logo }>
            <a href={ '#' }><span>Habit</span></a>
        </div>
    )
}

export default Logo;