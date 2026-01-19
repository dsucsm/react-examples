import React, { useEffect, useRef, useState } from "react";
import { MdEdit, MdDone, MdUndo } from "react-icons/md";
import ConfirmDelete from "./ConfirmDelete"
import { Task } from "../App";
import "../style/TaskItem.css";

interface Props {
    task: Task;
    onTaskUpdate: (task: Task) => void; // Edit, Complete, Undo Complete
    onTaskDelete: (task: Task) => void;
}

const TaskItem: React.FC<Props> = ({ task, onTaskUpdate, onTaskDelete }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.task);

    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleEditTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (edit) {
            task.task = editTask;
            setEdit(false);
            onTaskUpdate(task);
        }
        setEdit(!edit);
    }

    const handleTaskDoneUndo = (e: React.FormEvent) => {
        e.preventDefault();
        task.isDone = !task.isDone;
        onTaskUpdate(task);
    };

    return (
        <form className={`task__item`}>
            <span className="task__item--text">
                <span className="icon">
                    {!task.isDone ? (
                        <>
                            <MdEdit key={`edit-${task.id}`} onClick={handleEditTask} className="icon--align" />
                            <MdDone key={`complete-${task.id}`} onClick={handleTaskDoneUndo} className="icon--align" />
                        </>
                    ) : (
                        <MdUndo key={`complete-${task.id}`} onClick={handleTaskDoneUndo} className="icon--align" />
                    )}
                    <ConfirmDelete task={task} onTaskDelete={onTaskDelete} />
                </span>
                {task.isDone ? (
                    <div className="task__item--size input__size">
                        <s>{task.task}</s>
                    </div>
                ) : edit ? (
                    <textarea
                        rows={5}
                        value={editTask}
                        ref={inputRef}
                        onChange={(e) => { setEditTask(e.target.value); }}
                        className="task__item--size"
                    />
                ) : (
                    <div className="task__item--size input__size">{task.task}</div>
                )}
            </span>
        </form>
    )
}

export default TaskItem