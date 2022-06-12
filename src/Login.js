import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <LunchDiningIcon className="login_logo_Image" fontSize="large" />
                    <h2 className="login__logoTitle">BurgeRoad</h2>
                </div>
            </Link>

            <div className='login__container'>
                <center><h1>Sign-in</h1> </center>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the BurgeRoad Website Conditions of Use & Sale. Please
                    see our Privacy Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your BurgeRoad Account</button>
            </div>
        </div>
    )
}

export default Login;