import React, { useState } from 'react';
import { login } from '../../services/authService';
import '../../pages/login.css'; // CSS file

function LoginForm( { setIsLogin } ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-image" />
                <div className="login-form-section">
                    <div className="login-form-box">
                        <h1 className="login-title">Sign Up</h1>
                        <h3 className="login-subtitle">Sign up to continue to our application</h3>

                        <form className="login-form" onSubmit={submitHandler}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-input"
                                placeholder="Please Enter Mail ..."
                                required
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                placeholder="Please Enter Password ..."
                                required
                            />
                            <div className='flex gap-3'>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="login-input"
                                placeholder="First name ..."
                                required
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="login-input"
                                placeholder="Last name ..."
                                required
                            />
                            </div>
                            <input
                                type="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="login-input"
                                placeholder="Please Enter phone no ..."
                                required
                            />
                            {error && <p className="login-error">{error}</p>}
                            <button className="login-button">Sign In</button>
                        </form>
                    </div>
                    <h3 className="login-bottom-text"
                        onClick={() => setIsLogin(true)}>
                        Already have an account? <span className="login-signup-link">Login</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
