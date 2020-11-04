import React, { useState } from 'react';
import { authService, firebaseInstance } from 'fBase';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            data = newAccount
                ? await authService.createUserWithEmailAndPassword(email, password)
                : await authService.signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;

        if (name === 'google') {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === 'github') {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        const data = await authService.signInWithPopup(provider);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Email" value={email} required onChange={onChange} />
                <input name="password" type="password" placeholder="Password" value={password} required onChange={onChange} />
                <input type="submit" value={newAccount ? 'Craete Account' : 'Log In'} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? 'Sign In' : 'Create Account'}</span>
            <div>
                <button name="google" onClick={onSocialClick}>
                    Continue with Google
                </button>
                <button name="github" onClick={onSocialClick}>
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default Auth;
