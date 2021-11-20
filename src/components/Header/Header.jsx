import React from 'react'
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import NavigationButtons from "./NavigationButtons/NavigationButtons";

const Header = (props) => {
    return (
        <div className={ classes.header }>
            <Logo />
            <NavigationButtons />
        </div>
    )
}

export default Header;