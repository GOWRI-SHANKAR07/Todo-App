import { Avatar, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import '../styles/login.css';
import { Link } from 'react-router-dom';

const LoginScreen = () => {

    return (
        <Grid className='glassmorphism'>
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
                label='Username'
                placeholder='Enter Username'
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
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                />
            </FormGroup>
            <br/>
            <a href='#'>Forgot Password?</a>
            <p>Don't have a accoount? <a href='/signup'>Sign up</a></p>
            <br />
            <Grid
                container
                justifyContent='center'
                alignItems='center'
            >
                <button className='log-btn' type='submit'>Sign In</button>
            </Grid>
        </Grid>
    )
}

export default LoginScreen