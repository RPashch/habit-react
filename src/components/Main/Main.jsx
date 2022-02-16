import React from 'react'
import {Route, Routes} from 'react-router-dom'
import WelcomePage from './WelcomePage/WelcomePage'
import HabitPage from './HabitPage/HabitPage'
import SignUpSignInPage from './Sign-upSign-inPages/SignUpSignInPages'
import CalendarPage from './CalendarPage/CalendarPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'

const Main = (props) => {
    return (
        <Routes>
            <Route>
                <Route path={ "/" } element={ <WelcomePage/> }/>
                <Route path={ "/habits" } element={ <HabitPage/> }/>
                <Route path={ "/signPages/*" } element={ <SignUpSignInPage/> }/>
                <Route path={'/calendar'} element={<CalendarPage />}/>
            </Route>
            <Route path={ '*' } element={ <NotFoundPage/> }/>
        </Routes>

    )
}

export default Main;