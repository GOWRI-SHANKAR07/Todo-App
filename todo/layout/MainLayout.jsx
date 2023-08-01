import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

const bgImage = require('../src/assets/bg.png')

const MainLayout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {children}
            </Box>
        </ThemeProvider>
    )
}

export default MainLayout