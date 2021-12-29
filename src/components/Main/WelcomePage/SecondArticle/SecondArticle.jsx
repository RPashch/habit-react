import React from 'react'
import classes from './SecondArticle.module.css'
import SecondInf from './SecondInf/SecondInf'
import Targets from './Targets/Targets'

const SecondArticle = (props) => {
    return(
        <div className={ classes.secondArticle }>
            <SecondInf />
            <Targets />
        </div>
    )
}

export default SecondArticle