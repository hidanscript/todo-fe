import React, { useEffect, useState } from "react";
import "./css/GeneralStyles.css";

//Components
import TodoGenerator from "./components/TodoGenerator";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const refreshTasks = () => {
    Axios.get("http://192.168.0.53:3001/tasks")
      .then((res) => res.data)
      .then((tasks) => {
        setTasks(tasks);
      });
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoGenerator refreshCallback={refreshTasks} />
      <TodoList tasks={tasks} refreshCallback={refreshTasks} />
    </div>
  );
}

export default App;
