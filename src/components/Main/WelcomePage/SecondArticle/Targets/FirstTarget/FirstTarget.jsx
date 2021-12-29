import React from 'react'
import classes from './FirstTarget.module.css'
import img1 from '../../../../Photos/bag.png'


const FirstTarget = (props) => {
    return (
        <div className={ classes.firstTarget }>
            <div className={ classes.bag }><img src={ img1 } alt={''} draggable={"false"}/></div>
            <div className={ classes.text6 }>Выучить JavaScript</div>
            <div className={ classes.TargetLine }/>
            <div className={ classes.text7 }>Не понятно зачем люди таким занимаются, но....</div>
        </div>
    )
}

export default FirstTarget