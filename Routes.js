import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Login from './Login.js'
import Register from './Register.js'
import Afterlogin from './Afterlogin.js'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true} />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="afterlogin" component={Afterlogin} title="Afterlogin" />
        </Scene>
    </Router>
)
export default Routes
