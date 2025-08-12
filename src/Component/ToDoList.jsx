import "@/index.css";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold flex justify-center p-5">Cart</h1>
      <div className="flex gap-2">
        <input
          className="bg-gray-200  px-2"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white p-1 rounded-lg"
        >
          Add Task
        </button>
      </div>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li className="flex gap-4 py-2 text-gray-400 font-semibold" key={index}>
              <h1>
                {index + 1 + "." + "  "}
                {task}
              </h1>
              <div className="flex py-0.5">

              <button
                className="bg-red-600 text-white p-1  rounded-lg"
                onClick={() => deleteTask(index)}
              >
                <span className="text-white"> <FaTrash/></span>
              </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoList;
