import React, { useState } from 'react';
import AppRouter from 'components/AppRouter';
import { authService } from 'fBase';

function App() {
    console.log(authService.currentUser);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <React.Fragment>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
        </React.Fragment>
    );
}

export default App;
