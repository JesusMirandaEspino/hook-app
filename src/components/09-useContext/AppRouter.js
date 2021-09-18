import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

            <switch>
                <Route exact path="/"  component={ HomeScreen } />
                <Route exact path="/about"  component={ AboutScreen } />
                <Route exact path="/login"  component={ LoginScreen } />
                

            </switch>

            </div>
        </Router>

    )
}
