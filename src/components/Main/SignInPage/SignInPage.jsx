import React from 'react'
import classes from './SignInPage.module.css'
import TextAndForm from './TextAndForm/TextAndForm'
import img1 from '../Photos/Photo.png'

const SignInPage = (props) => {
    return (
        <div className={ classes.main }>
            <TextAndForm />
            <div className={ classes.photo }>
                <img src={img1} alt={''}/>
            </div>
        </div>
)
}

export default SignInPage;