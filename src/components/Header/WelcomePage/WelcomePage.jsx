import React from 'react'
import classes from './WelcomePage.module.css'
import Logo from '../Logo/Logo'
import SigninSignup from './SigninSignup/SigninSignup'

const WelcomePage = (props) => {
    return (
        <div className={ classes.header }>
            <Logo/>
            <SigninSignup />
        </div>
)
}

export default WelcomePage;