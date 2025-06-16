import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import '../../pages/login.css'; // CSS file

function LoginForm( { setIsLogin } ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await login({ userName: email, password });
            console.log(response);
            localStorage.setItem('token', response.data.token);
            // navigate('/dashboard');
            setEmail('');
            setPassword('');
        } catch (err) {
            
            console.error("Login Failed:", err);
            
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-image" />
                <div className="login-form-section">
                    <div className="login-form-box">
                        <h1 className="login-title">Sign In</h1>
                        <h3 className="login-subtitle">Sign in to continue to our application</h3>

                        <form className="login-form" onSubmit={submitHandler}>
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-input"
                                placeholder="Please Enter Mail ..."
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                placeholder="Please Enter Password ..."
                                required
                            />
                            <p className="login-forgot">Forget Password</p>
                            {error && <p className="login-error">{error}</p>}
                            <button className="login-button">Sign In</button>
                        </form>
                    </div>
                    <h3 className="login-bottom-text" 
                    onClick={() => setIsLogin(false)}>
                        Not a Member? <span className="login-signup-link">Sign up</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
