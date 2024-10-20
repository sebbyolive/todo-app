export default function TodoCard(props) {
  const { todo, handleDeleteTodo, handleCompleteTodo, todoIndex } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.complete}>
          <h6 onClick={() => handleCompleteTodo(todoIndex)}>Done</h6>
        </button>
        <button>
          <h6 onClick={() => handleDeleteTodo(todoIndex)}>Delete</h6>
        </button>
      </div>
    </div>
  );
}
