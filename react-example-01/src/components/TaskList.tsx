import { Task } from "../App";
import TaskItem from "./TaskItem";
import "../style/TaskList.css"

interface Props {
    tasks: Task[];
    onTaskUpdate: (task: Task) => void; // Edit, Complete, Undo Complete
    onTaskDelete: (task: Task) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onTaskUpdate, onTaskDelete }: Props) => {

    const activeTasks: Task[] = tasks.filter(task => task.isDone === false);
    const completedTasks: Task[] = tasks.filter(task => task.isDone === true);

    return <span className="container">
        <div className="card tasks__active" >
            <div className="card-body">
                <h5 className="card-title"><u><i>Active Tasks</i></u></h5>
                <p className="card-text">{activeTasks.length === 0 && <>No active tasks present !</>}</p>
                {activeTasks.map((task) => {
                    return <TaskItem key={task.id} task={task} onTaskUpdate={onTaskUpdate} onTaskDelete={onTaskDelete} />;
                })}
            </div>
        </div>

        <div className="card tasks__completed" >
            <div className="card-body">
                <h5 className="card-title"><u><i>Completed Tasks</i></u></h5>
                <p className="card-text">{completedTasks.length === 0 && <>No tasks completed yet !</>}</p>
                {completedTasks.map((task) => {
                    return <TaskItem key={task.id} task={task} onTaskUpdate={onTaskUpdate} onTaskDelete={onTaskDelete} />;
                })}
            </div>
        </div>
    </span>;
}
export default TaskList;