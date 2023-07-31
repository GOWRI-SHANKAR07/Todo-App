import React from 'react';
import styles from '../styles/login.css';
import { Container } from '@mui/material';
import logo from '../assets/logo.svg';

const Login = () => {
    return (
        <div className='cont'>
            <div className='inner-cont'>
                <div className='logo'>
                    <img style={{
                        width: '150px', height: '150px', paddingLeft: '130px'
                    }} src='https://www.spritle.com/assets/img/logo/logo.svg' />
                </div>
                <h3>Login to Dashboard</h3>
                <label>
                    Email ID <br />
                    <input
                        type='text'
                        size={50}
                        name='email'
                        placeholder='Enter your email'
                    />
                </label>
                <br /><br />
                <label>
                    Password <br />
                    <input
                        type='password'
                        size={50}
                        name='password'
                        placeholder='Enter you password'
                    />
                </label>
                <h4>Forgot Password</h4>
                <button style={{ backgroundColor: '#2dce65', fontSize: '18px' }}>Login</button>
                <h2>OR</h2>
            </div>
        </div>
    )
}

export default Login