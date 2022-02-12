import React from 'react'
import classes from './FirstArticle.module.css'
import Cloud from './Cloud/Cloud'
import Inform from './Inform/Inform'


const FirstArticle = (props) => {
    return(
        <div className={ classes.firstArticle}>
            <Inform />
            <Cloud />
        </div>
    )
}

export default FirstArticle