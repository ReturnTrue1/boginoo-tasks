import React from 'react';
import {
    HomeDefault,
    Login,
    SignUp,
    ForgotPass
} from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import './style/main.scss';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                <Route path="/forgotpass" exact>
                    <ForgotPass />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;