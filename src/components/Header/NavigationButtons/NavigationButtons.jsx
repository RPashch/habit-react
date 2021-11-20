import React from 'react'
import classes from './NavigationButtons.module.css'

const NavigationButtons = (props) => {
    return(
        <div className={ classes.functions }>
            <span>Календарь</span>
            <span>Мои привычки</span>
        </div>
    )
}

export default NavigationButtons;