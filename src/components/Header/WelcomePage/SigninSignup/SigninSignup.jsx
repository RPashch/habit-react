import React from 'react'
import classes from './SigninSignup.module.css'

const SigninSignup = (props) => {
    return (
        <div className={ classes.signUpSignIn }>
            <a href={ "#" } className={ classes.signIn}><input type="button" value="Sign in"/></a>
            <a href={ "#" } className={ classes.singUp }><input type='button' value="Sign up"/></a>
        </div>

    )
}

export default SigninSignup;