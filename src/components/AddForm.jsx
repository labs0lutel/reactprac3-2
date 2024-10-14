import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function AddForm() {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState("");

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      addTodo(title);
      setTitle(""); 
    }
  }

  return (
    <div className="input_elem">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="Добавить задачу"
      />
    </div>
  );
}

export default AddForm;
