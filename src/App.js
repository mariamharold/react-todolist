import { useState, useEffect } from "react";
import "./App.css";
import Header from "./componets/Header";
import TodoList from "./componets/TodoList";

function App() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  console.log(todo);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="App">
      <Header todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;



