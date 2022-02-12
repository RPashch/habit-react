import React from 'react'
import classes from './Targets.module.css'
import FirstTarget from './FirstTarget/FirstTarget'
import SecondTarget from './SecondTarget/SecondTarget'

const Targets = (props) => {
    return (
        <div className={ classes.Targets }>
            <FirstTarget />
            <SecondTarget />
        </div>
    )
}

export default Targets