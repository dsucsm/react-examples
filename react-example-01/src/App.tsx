import React, { useState } from "react";
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import "./style/App.css"
import TaskList from "./components/TaskList";
import Notif from "./components/Notif";

export interface Task {
  id: number;
  task: string;
  isDone: boolean;
}

const App: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [showNotif, setShowNotif] = useState<boolean>(false);


  const handleAddTask = (task: Task) => {
    if (task) {
      console.log("addTask", task.task);
      setTasks([...tasks, task]);
    }
  };

  const handleTaskUpdate = (task: Task) => {
    console.log("updateTask", task.task);
    setTasks([...tasks]);
  };

  const handleTaskDelete = (task: Task) => {
    console.log("deleteTask", task);
    const taskAfterDelete: Task[] = tasks.filter(t => t.id != task.id);
    setTasks(taskAfterDelete);
    setShowNotif(true);
    console.log("tasks after delete", taskAfterDelete);
  };

  const handleChangeNotif = () => {
    setShowNotif(false);
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <Notif showNotif={showNotif} onChangeNotif={handleChangeNotif} />
      <TaskList tasks={tasks} onTaskUpdate={handleTaskUpdate} onTaskDelete={handleTaskDelete} />
    </div>
  )
}

export default App
