import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignInText2 from './SignInText2/SignInText2'
import SignUpText2 from './SignUpText2/SignUpText2'

const Text2 = (props) => {
    return(
        <Routes>
            <Route path={'SignIn'} element={<SignInText2/>}/>
            <Route path={'SignUp'} element={<SignUpText2/>}/>
        </Routes>
    )
}

export default Text2;