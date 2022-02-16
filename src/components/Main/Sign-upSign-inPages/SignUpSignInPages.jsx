import React from 'react'
import classes from './SignUpSignInPages.module.css'
import TextAndForm from './TextAndForm/TextAndForm'
import img1 from '../Photos/Photo.png'



const SignUpSignInPages = (props) => {
    return (
        <div className={ classes.main }>
            <TextAndForm />
            <div className={ classes.photo }>
                <img src={img1} alt={''}/>
            </div>
        </div>
    )
}

export default SignUpSignInPages;

