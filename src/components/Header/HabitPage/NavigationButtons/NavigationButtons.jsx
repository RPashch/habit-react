import React from 'react'
import classes from './NavigationButtons.module.css'

const NavigationButtons = (props) => {
    return(
        <div className={ classes.functions }>
            <a href={'#'}>Календарь</a>
            <a href={'#'}>Мои привычки</a>
        </div>
    )
}

export default NavigationButtons;