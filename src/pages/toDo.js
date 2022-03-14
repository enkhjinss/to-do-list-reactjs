import "../styles/App.css";
import "../styles/flex.css";

import { AddTask } from "../components/addNewTask";
import { List } from "../components/list.js";
import { db } from "../components/firebase";


import React, { useState, useEffect } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    const addNewTask = (newTask) => {
        db.collection("todos").add({
            text: newTask.title,
            date: new Date()
        });
    };

    useEffect(() => {
        const data = (sshot) => {
            const docs = sshot.docs.map((doc) => ({
                docid: doc.id,
                title: doc.data().text,
            }));
            setTasks(docs);
        };

        db.collection("todos").orderBy("date").onSnapshot(data);
    }, []);

    return (
        <main className="flex column">
            <AddTask addNewTask={addNewTask} />
            <List tasks={tasks} />
        </main>
    );
};

export default Todo;
