import "../styles/App.css";
import "../styles/flex.css";

import { AddTask } from "../components/addNewTask";
import { List } from "../components/list.js";

import React, { useState } from 'react';

const Todo = () => {
    const [tasks , setTasks ] = useState([]);

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }
    return (
        <main className="flex column">
            <AddTask addNewTask={ addNewTask }/>
            <List tasks={ tasks }/>
        </main>
    )
}

export default Todo;