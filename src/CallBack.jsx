import React, { useCallback, useEffect,useRef, useState } from "react";

export default function CallBack() {
  let [count, setCount] = useState(0);
  let [todos, setTodos] = useState(["Hi", "Bye", "Enjoy", "Goodnight"]);
  const reRender = useRef(0);

  useEffect(() => {
    reRender.current = reRender.current + 1;
  });

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "NEw Todo"]);
  }, [todos]);
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li>{todo}</li>
        ))}
      </ul>
      <button onClick={increment}>Increment Count</button>
      <button onClick={addTodo}>Add Todo</button>
      <h3>Render Count: {reRender.current}</h3>
    </div>

  );
}
