import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: false },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  const tabs = ["All", "Open", "Completed"];

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleCompleteTodo = (index) => {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((val, valIndex) => valIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleSaveData = (currTodos) => {
    localStorage.setItem("todo-app", JSON.stringify({ currTodos }));
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.currTodos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}
