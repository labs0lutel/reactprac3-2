import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";

function TodoList() {
  const { todos } = useTodo();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
