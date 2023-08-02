import React from 'react'
import Todo from './screens/todo'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './screens/Login';
import styles from './styles/login.css';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/login' element={<LoginScreen />} />
    //     <Route path='/signup' element={<SignupScreen />} />
    //   </Routes>
    // </Router>
    <Todo />
  )
}


