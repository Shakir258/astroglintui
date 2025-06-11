import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthPopup({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <button style={styles.closeButton} onClick={onClose}>X</button>
                {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <SignupForm setIsLogin={setIsLogin} />}
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed', top: 90, left: 50,  width: '90vw' , zIndex: 1000,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    popup: {
        padding: '0px', borderRadius: '10px', width: '80%', position: 'relative'
    },
    closeButton: {
        position: 'absolute', top: 60, right: 40, border: 'none', background: 'none', fontSize: '16px', cursor: 'pointer'
    },
    toggleButton: {
        background: 'none', color: 'blue', border: 'none', cursor: 'pointer', marginLeft: '5px'
    }
};
