export default function Header({ todos }) {
  const todoLength = todos.length;

  return (
    <header>
      <h1 className="text-gradient">
        You have {todoLength} open todo{todoLength != 1 ? "s" : ""}.
      </h1>
    </header>
  );
}
