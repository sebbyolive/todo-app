import { useState } from "react";

export default function TodoCard(props) {
  const [editClicked, setEditClicked] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");

  const {
    todo,
    todos,
    setTodos,
    handleDeleteTodo,
    handleCompleteTodo,
    todoIndex,
  } = props;

  const handleEditSave = () => {
    if (!editClicked) {
      setEditClicked(!editClicked);
      return;
    }

    let newTodosList = [...todos];
    let curTodo = todos[todoIndex];
    curTodo["input"] = editInputValue;
    newTodosList[todoIndex] = curTodo;
    setTodos(newTodosList);
    setEditClicked(!editClicked);
  };

  return (
    <div className="card todo-item">
      {!editClicked ? (
        <p>{todo.input}</p>
      ) : (
        <input
          placeholder="New task name"
          onChange={(e) => setEditInputValue(e.target.value)}
        ></input>
      )}
      <div className="todo-buttons">
        <button disabled={todo.complete}>
          <h6 onClick={() => handleCompleteTodo(todoIndex)}>Done</h6>
        </button>
        <button>
          <h6 onClick={() => handleEditSave()}>
            {!editClicked ? "Edit" : "Save"}
          </h6>
        </button>
        <button>
          <h6 onClick={() => handleDeleteTodo(todoIndex)}>Delete</h6>
        </button>
      </div>
    </div>
  );
}
