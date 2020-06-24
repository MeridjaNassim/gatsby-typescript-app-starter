import React from 'react'
import {Router} from '@reach/router'
import Profile from '../app/routes/Profile'
import Home from '../app/routes/Home'

export default function App() {
    return (
        <Router basepath="/app">
            <Home path="/home" ></Home>
            <Profile path="/profile"></Profile>
        </Router>
    )
}
