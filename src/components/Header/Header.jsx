import React from 'react'
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import SignInPage from './SignInPage/SignInPage'

const Header = (props) => {
    return (
        <div className={ classes.header }>
            <Logo />
            <NavigationButtons />
        </div>
    )
}


// const Header = (props) => {
//     return (
//         <SignUpPage />
//     )
// }
export default Header;