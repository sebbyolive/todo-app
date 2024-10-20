export default function Tabs({ todos, tabs, selectedTab, setSelectedTab }) {
  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length;

        return (
          <button
            onClick={() => setSelectedTab(tab)}
            className={`tab-button ${
              tab === selectedTab ? `tab-selected` : null
            }`}
            key={index}
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
