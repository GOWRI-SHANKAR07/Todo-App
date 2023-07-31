import React, { useState } from 'react';
import styles from '../styles/styles.css';
import { AiOutlineSend } from "react-icons/ai";

const Todo = () => {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleAddTask = () => {
        if (newTask.trim() != '') {
            setTask([...task, newTask]);
            console.log(task);
            setNewTask('');
        } else {
            console.warn('Please enter a valid input');
        }
    }

    const handleDeleteTask = (index) => {
        const updatedTask = [...task];
        updatedTask.splice(index, 1);
        setTask(updatedTask);
    }


    return (
        <div className='container'>
            <h1>Todo App</h1>
            <div className='inpCont'>
                <input
                    className='input'
                    name='task'
                    placeholder='Enter the Tasks'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <AiOutlineSend
                    className='button'
                    size={20}
                    onClick={handleAddTask}
                />
                <ul style={{listStyle: 'none'}}>
                    {task.map((task, index) => (
                        <li className='taskList' key={index}>
                            {task}
                            <button className='deleteTask' onClick={() => handleDeleteTask(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo;

