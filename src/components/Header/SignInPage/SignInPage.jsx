import React from 'react'
import classes from './SignInPage.module.css'
import Logo from "../Logo/Logo";


const SignInPage = (props) => {
    return (
        <div className={ classes.header }>
            <Logo/>
        </div>
    )
}

export default SignInPage;