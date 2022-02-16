import React from 'react'
import classes from './SigninSignup.module.css'
import {NavLink} from 'react-router-dom'

const SigninSignup = (props) => {
    return (
        <div className={ classes.signUpSignIn }>
            <NavLink to={'/signPages/SignIn'} className={ classes.signIn}><input type="button" value="Sign in"/></NavLink>
            <NavLink to={'/signPages/SignUp'} className={ classes.singUp }><input type='button' value="Sign up"/></NavLink>
        </div>

    )
}

export default SigninSignup;