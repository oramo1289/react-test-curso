import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
} from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path={'/login'} component={LoginScreen} />
                    <Route exact path={'/about'} component={AboutScreen} />
                    <Route exact path={'/'} component={HomeScreen} />

                    {/* esta es la ruta por default o puede ser para un 404 */}
                    <Route component={HomeScreen} /> 
                </Switch>
            </div>
        </Router>
    )
}
