import { authService } from 'fBase';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const history = useHistory();
    const onLogOutClick = () => {
        history.push('/');
        authService.signOut();
    };

    return (
        <Fragment>
            <button onClick={onLogOutClick}>Log Out</button>
        </Fragment>
    );
};

export default Profile;
