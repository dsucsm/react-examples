import React, { useState } from "react";
import { Task } from "../App";
import "../style/AddTask.css"


interface Props {
    onAddTask: (task: Task) => void;
}

const AddTask = ({ onAddTask }: Props) => {
    const [task, setTask] = useState<string>("");

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (task) {
            onAddTask({ id: Date.now(), task, isDone: false });
            setTask("");
        }
    };
    return (
        <form className="input" onSubmit={handleAddTask}>
            <input id="input" type="input" placeholder="Enter a task" className="input_box"
                value={task}
                onChange={(e) => { setTask(e.target.value); console.log(task); }} />
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}

export default AddTask;