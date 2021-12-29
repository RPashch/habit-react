import React from 'react'
import classes from './WelcomePage.module.css'
import FirstArticle from './FirstArticle/FirstArticle'
import SecondArticle from './SecondArticle/SecondArticle'
import ThirdArticle from './ThirdArticle/ThirdArticle'

const WelcomePage = (props) => {
    return (
        <div className={ classes.main }>
            <FirstArticle />
            <SecondArticle />
            <ThirdArticle />
        </div>
)
}

export default WelcomePage;