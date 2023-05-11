import React from "react";
import TodoItem from "./TodoItem";

export default function ToDo() {
  console.log("todo here");
  return (
    <div>
      <h2 className="header">To Do</h2>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}
