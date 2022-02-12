import React from 'react'
import classes from './SecondTarget.module.css'
import img1 from '../../../../Photos/book.png'


const SecondTarget = (props) => {
    return (
        <div className={ classes.secondTarget }>
            <div className={ classes.book }><img src={img1} alt={''} draggable={"false"}/></div>
            <div className={ classes.text6 }>Читать 30 мин в день</div>
            <div className={ classes.TargetLine }/>
            <div className={ classes.text7 }>Для того чтобы стать грамотнее и умнее нужно...</div>
        </div>
    )
}

export default SecondTarget