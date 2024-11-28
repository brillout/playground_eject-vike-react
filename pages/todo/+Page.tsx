import type { Data } from "./+data";
import React from "react";
import { useData } from "../../hooks/useData";
import { TodoList } from "./TodoList.js";

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <h1>To-do List</h1>
      <TodoList initialTodoItems={data.todo} />
    </>
  );
}
