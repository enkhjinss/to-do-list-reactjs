
import React, { useState } from 'react';

export const AddTask = ({ addNewTask }) => {
    const [title , setTitle] = useState("");

    const onChange = (e) => {
        setTitle(e.target.value);
    }
    const onButton = () => {
        if(title === "") return;
        addNewTask({title: title});
        setTitle('');
    }
    return (
        <div className="addContainer flex align-center">
            <div style={{ height: "70%", width: "100%" }} className="flex justify-center">
                <input className="addTaskInput" onChange={ onChange } value={ title }/>
                <button className="addButton" onClick={ onButton }>Add</button>
            </div>
        </div>
    );
};
