import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <React.Fragment>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </React.Fragment>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
