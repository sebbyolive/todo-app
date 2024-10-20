import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, setTodos, selectedTab } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            {...props}
          />
        );
      })}
    </>
  );
}
