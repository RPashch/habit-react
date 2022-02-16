import React from 'react'
import classes from './SignInForm.module.css'
import {NavLink} from 'react-router-dom'


const SignInForm = (props) => {
    return (
        <div className={ classes.form }>
            <form>
                <div className={ classes.data }>
                    <input type="text" required/>
                    <label>Email Address</label>
                </div>
                <div className={ classes.data }>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className={ classes.forgot_password }>
                    <NavLink to={'/'}>Forgot password?</NavLink>
                </div>
                <div className={ classes.button_wrapper }>
                    <input type="submit" className={ classes.submit } value="Sign in"/>
                    <NavLink to={'/signPages/SignUp'} className={ classes.button }><input type="button" value="Sign up"/></NavLink>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;