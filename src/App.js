import React, { useState } from "react";
import Header from "./components/Header";
import TodoElement from "./components/TodoElements";
import "./App.css";
import { nanoid } from "nanoid";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "Demo Element 1",
      content: "This is a Demo note",
    },
    {
      id: nanoid(),
      title: "Demo Element 2",
      content: "This is a demo note",
    },
  ]);

  return (
    <div className="app">
        <img src="./public/" alt="" />
      <Header todos={todos} setTodos={setTodos} />
      <TodoElement todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
