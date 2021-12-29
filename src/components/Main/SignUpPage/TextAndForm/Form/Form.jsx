import React from 'react'
import classes from './Form.module.css'


const Form = (props) => {
    return (
        <div className={ classes.form }>
            <form>
                <div className={ classes.data }>
                    <input type="text" required/>
                    <label>Email Address</label>
                </div>
                <div className={ classes.data }>
                    <input type="text" required/>
                    <label>Username</label>
                </div>
                <div className={ classes.data }>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className={ classes.data }>
                    <input type="password" required/>
                    <label>Confirm password</label>
                </div>
                <div className={ classes.button_wrapper }>
                    <input type="submit" className={ classes.submit } value="Sign up"/>
                    <a href={ "#" } className={ classes.button }><input type="button" value="Sign in"/></a>
                </div>
            </form>
        </div>
    )
}

export default Form