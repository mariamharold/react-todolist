import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const TodoList = ({ todo, setTodo }) => {

  return (
    <ul>
      {todo.map((item, i) => (
        <li 
          style={{ textDecoration: item.completed ? "line-through" : "none" }} 
          key={i}
        >
          <TiTick
           color={item.completed ? "green" : "orangered"} 
           className="btn"
        fontSize={40}
            onClick={() =>
              setTodo(
                todo.map((task) =>
                  task.id === item.id
                    ? { ...task, completed: !task.completed }
                    : task
                )
              )
            }
          /><span>{" "}
          {item.text}{" "}</span>
          <MdDeleteForever color="orangered" fontSize={40} className="btn"
            onClick={() => setTodo(todo.filter((task) => task.id !== item.id))}
          />{" "}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
