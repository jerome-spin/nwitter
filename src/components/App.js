import React, { useState, useEffect } from 'react';
import AppRouter from 'components/AppRouter';
import { authService } from 'fBase';

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            user ? setIsLoggedIn(true) : setIsLoggedIn(false);
            setInit(true);
        });
    }, []);

    return (
        <React.Fragment>
            {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing...'}
            <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
        </React.Fragment>
    );
}

export default App;
