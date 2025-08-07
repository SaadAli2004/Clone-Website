import "@/index.css";
import { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }




    return(
      <div className="p-5">
        <h1 className="text-2xl font-bold">ToDo List</h1>
        <div className="flex gap-2">
            <input className="bg-gray-200  px-2" type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button onClick={addTask} className="bg-blue-600 text-white p-1 rounded-lg">Add Task</button>
        </div>
        <div>
            <ol>{tasks.map((task,index) => (
                <li key={index}>
                    <h1>{task}</h1>
                    <button className="bg-red-600 text-white p-1 rounded-lg" onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}</ol>
        </div>
      </div>

    
    );

}
export default ToDoList;