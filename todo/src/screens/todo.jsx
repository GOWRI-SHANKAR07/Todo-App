import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import '../styles/styles.css';
const Todo = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState('');
    const [editIndex, setEditIndex] = useState(null); // State to track the index of the task being edited

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTask([...task, newTask]);
            setNewTask('');
        } else {
            console.warn('Please enter a valid input');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTask = [...task];
        updatedTask.splice(index, 1);
        setTask(updatedTask);
    };

    const handleEditTask = (index) => {
        setEditMode(true);
        setEditedTask(task[index]);
        setEditIndex(index); // Set the index of the task being edited
        setNewTask('');
    };

    const handleUpdateTask = () => {
        if (editedTask.trim() !== '') {
            const updatedTask = [...task];
            updatedTask.splice(editIndex, 1, editedTask);
            setTask(updatedTask);
            setEditMode(false);
            setEditedTask('');
            setEditIndex(null); // Reset the editIndex after saving the edited task
        } else {
            console.warn('Please enter a valid input');
        }
    };

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <div className='Cont'>
                <div className="inpCont">
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
                </div>
                <div className="listCont">
                    <ul style={{ listStyle: 'none' }}>
                        {task.map((task, index) => (
                            <li className='taskList' key={index}>
                                {editMode && editIndex === index ? (
                                    <div className="editCont">
                                        <div className="editTxt">
                                            <input
                                                className="editInp"
                                                placeholder='Edit Task'
                                                value={editedTask}
                                                onChange={(e) => setEditedTask(e.target.value)}
                                            />
                                        </div>
                                        <div className="editBtn">
                                            <button
                                                className="saveBtn"
                                                onClick={handleUpdateTask}
                                            >
                                                ✓
                                            </button>
                                            <button
                                                className="cancelBtn"
                                                onClick={() => {
                                                    setEditMode(false);
                                                    setEditedTask('');
                                                    setEditIndex(null); // Reset editIndex when canceling edit
                                                }}
                                            >
                                                🗴
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {task}
                                        <div className='lstBtn'>
                                            <button
                                                className='editTask'
                                                onClick={() => handleEditTask(index)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className='deleteTask'
                                                onClick={() => handleDeleteTask(index)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;
