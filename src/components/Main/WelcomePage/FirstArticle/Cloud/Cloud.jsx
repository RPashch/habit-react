import React from 'react'
import classes from './Cloud.module.css'
import img1 from '../../../Photos/cloud.png'


const Cloud = (props) => {
    return (
        <div className={ classes.cloud }>
            <img src={img1} alt={''} draggable={"false"}/>
        </div>
    )
}

export default Cloud