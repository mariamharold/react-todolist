import React, { useState } from "react";

const Header = ({ todo, setTodo }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    if(text.trim()!==""){
    const newToDo = {
      id: new Date().getTime(),
      completed: false,
      text: text,
    };
    setTodo([...todo, newToDo]);
    setText("");
  }
  };
  return (
    <div>
      <h1>TO DO LİST</h1>
      <input
        style={{ width: "300px", height: "44px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="to do list.."
      />
      <button
        onClick={handleAdd}
        type="submit"
      >
        Add
      </button>
    </div>
  );
};

export default Header;
