import {  Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import '../styles/signup.css';
import { Link } from 'react-router-dom';

const SignupScreen = () => {

    return (
        <div className='glassmorphism'>
            <div className='logo'>
                <img style={{
                    width: '150px', height: '150px',
                }} src='https://www.spritle.com/assets/img/logo/logo.svg' />
            </div>
            <Grid
                container
                direction='row'
                justifyContent="center"
                alignItems="center"
            >
                <LockIcon sx={{ color: '#00A8E8', width: 30, height: 30 }} />
                <h2 className='Txt'>Sign In</h2>
            </Grid>
            <TextField
                variant='standard'
                type='text'
                label='Name'
                placeholder='Enter Username'
                required
                fullWidth
            />
            <br /><br />
            <TextField
                variant='standard'
                type='Email'
                label='Email ID'
                placeholder='Enter Email ID'
                required
                fullWidth
            />
            <br /><br />
            <TextField
                variant='standard'
                type='password'
                label='Password'
                placeholder='Enter Password'
                required
                fullWidth
            />
            <br /><br />
            <TextField
                variant='standard'
                type='password'
                label='Confirm Password'
                placeholder='Enter Password'
                required
                fullWidth
            />
            <br />
            <p>Already have a accoount? <a href='/login'>Login In</a></p>
            <br />
            <Grid
                container
                justifyContent='center'
                alignItems='center'
            >
                <button className='log-btn' type='submit'>Sign Up</button>
            </Grid>
        </div>
    )
}

export default SignupScreen;