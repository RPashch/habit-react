import React from 'react'
import classes from './ThirdArticle.module.css'
import img1 from '../../Photos/man.png'

const ThirdArticle = (props) => {
    return(
        <div className={ classes.thirdArticle }>
            <div className={ classes.thirdInf }>
                <div className={ classes.thirdArticleLine }/>
                <div className={ classes.text8 }>Соревнуйтесь с друзьями</div>
                <div className={ classes.text9 }>
                    Выбирай категории привычек и соревнуйтесь с друзьями, ты можешь поделиться привычкой или
                    категорией.
                </div>
                <a href="#">
                    Поделиться с другом
                </a>
            </div>
            <div className={ classes.man }><img src={img1} alt={''} draggable={"false"}/></div>
        </div>
    )
}

export default ThirdArticle