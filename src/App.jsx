import React, { useState } from "react";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livro",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTask />

        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
