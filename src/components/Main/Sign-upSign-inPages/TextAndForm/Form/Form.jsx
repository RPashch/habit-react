import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignInForm from './SignInForm/SignInForm'
import SignUpForm from './SignUpForm/SignUpForm'
import NotFoundPage from '../../../NotFoundPage/NotFoundPage'


const Form = (props) => {
    return(
        <Routes>
            <Route path={'SignIn'} element={<SignInForm/>}/>
            <Route path={'SignUp'} element={<SignUpForm/>}/>
        </Routes>
    )
}

export default Form;