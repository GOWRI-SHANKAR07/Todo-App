import React from 'react'
import Todo from './screens/todo'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './screens/Login';
import styles from './styles/login.css';

export default function App() {
  return (
    <div className='cont'>
      <Login />
    </div>
  )
}
